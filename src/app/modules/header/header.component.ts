import { Component, AfterViewInit, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('colorWaveBanner', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  phrases: string[] = [
    'Full Stack Developer',
    'Front End Developer',
    'Graphic Designer',
    'UI/UX Designer',
    'Software Developer'
  ];
  phraseIndex: number = 0;
  charIndex: number = 0;
  currentPhrase: string[] = [];
  isDeleting: boolean = false;
  isEnd: boolean = false;

  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  private imgSize = 512;
  private mapSize = 1024;
  private heightMap1: number[] = [];
  private heightMap2: number[] = [];
  private imageData!: ImageData;
  private palette: any[] = [];
  private dx1 = 0;
  private dy1 = 0;
  private dx2 = 0;
  private dy2 = 0;


  ngOnInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.width = this.imgSize;
    this.canvas.height = this.imgSize;
    this.initHeightMaps();
    this.initImageData();
    this.updatePalette(0);

    requestAnimationFrame((time) => this.tick(time));
  }

  ngAfterViewInit() {
    this.type();
  }

  type() {
    this.isEnd = false;
    const typingElement = document.querySelector('.typing') as HTMLElement;
    typingElement.innerHTML = this.currentPhrase.join('');

    if (this.charIndex <= this.phrases[this.phraseIndex].length) {
      if (!this.isDeleting && this.charIndex < this.phrases[this.phraseIndex].length) {
        this.currentPhrase.push(this.phrases[this.phraseIndex][this.charIndex]);
        this.charIndex++;
        typingElement.innerHTML = this.currentPhrase.join('');
      }

      if (this.isDeleting && this.charIndex <= this.phrases[this.phraseIndex].length) {
        this.currentPhrase.pop();
        this.charIndex--;
        typingElement.innerHTML = this.currentPhrase.join('');
      }

      if (this.charIndex === this.phrases[this.phraseIndex].length) {
        this.isEnd = true;
        this.isDeleting = true;
      }

      if (this.isDeleting && this.charIndex === 0) {
        this.currentPhrase = [];
        this.isDeleting = false;
        this.phraseIndex++;
        if (this.phraseIndex === this.phrases.length) {
          this.phraseIndex = 0;
        }
      }
    }

    const typingSpeed = this.isEnd ? 2000 : this.isDeleting ? 50 : 100;
    setTimeout(() => this.type(), typingSpeed);
  }

  private initHeightMaps(): void {
    // Initialize heightMap1
    for (let u = 0; u < this.mapSize; u++) {
      for (let v = 0; v < this.mapSize; v++) {
        const i = u * this.mapSize + v;
        const cx = u - this.mapSize / 2;
        const cy = v - this.mapSize / 2;
        const d = Math.sqrt(cx * cx + cy * cy);
        const stretch = (3 * Math.PI) / (this.mapSize / 2);
        const ripple = Math.sin(d * stretch);
        const normalized = (ripple + 1) / 2;
        this.heightMap1[i] = Math.floor(normalized * 128);
      }
    }

    // Initialize heightMap2
    for (let u = 0; u < this.mapSize; u++) {
      for (let v = 0; v < this.mapSize; v++) {
        const i = u * this.mapSize + v;
        const cx = u - this.mapSize / 2;
        const cy = v - this.mapSize / 2;
        const d1 = Math.sqrt(0.8 * cx * cx + 1.3 * cy * cy) * 0.022;
        const d2 = Math.sqrt(1.35 * cx * cx + 0.45 * cy * cy) * 0.022;
        const s = Math.sin(d1);
        const c = Math.cos(d2);
        const h = s + c;
        const normalized = (h + 2) / 4;
        this.heightMap2[i] = Math.floor(normalized * 127);
      }
    }
  }

  private initImageData(): void {
    this.imageData = this.context.createImageData(this.imgSize, this.imgSize);
    for (let i = 0; i < this.imageData.data.length; i += 4) {
      this.imageData.data[i] = 0;
      this.imageData.data[i + 1] = 0;
      this.imageData.data[i + 2] = 0;
      this.imageData.data[i + 3] = 255;
    }
  }

  private updatePalette(time: number): void {
    const color1 = { r: 52, g: 0, b: 115 }; // #7148eb
    const color2 = { r: 113, g: 72, b: 235  }; // pink
    const color3 = { r: 43, g: 0, b: 171 }; // #ff7e39 rgb(43, 0, 171)
    const color4 = { r: 2, g: 194, b: 219 }; // rgb(89, 0, 255)
    const color5 = { r: 113, g: 72, b: 235 }; // pink

    const inter = (Math.cos(time * 0.0005) + 1) / 2;
    const gradient = this.makeFiveColorGradient(color1, color2, color3, color4, color5);
    this.palette = gradient;
  }

  private makeFiveColorGradient(c1: any, c2: any, c3: any, c4: any, c5: any) {
    const g: any[] = [];
    for (let i = 0; i < 64; i++) {
      const f = i / 64;
      g[i] = this.interpolate(c1, c2, f);
    }
    for (let i = 64; i < 128; i++) {
      const f = (i - 64) / 64;
      g[i] = this.interpolate(c2, c3, f);
    }
    for (let i = 128; i < 192; i++) {
      const f = (i - 128) / 64;
      g[i] = this.interpolate(c3, c4, f);
    }
    for (let i = 192; i < 256; i++) {
      const f = (i - 192) / 64;
      g[i] = this.interpolate(c4, c5, f);
    }
    return g;
  }

  private interpolate(c1: any, c2: any, f: number) {
    return {
      r: Math.floor(c1.r + (c2.r - c1.r) * f),
      g: Math.floor(c1.g + (c2.g - c1.g) * f),
      b: Math.floor(c1.b + (c2.b - c1.b) * f)
    };
  }

  private moveHeightMaps(time: number): void {
    this.dx1 = Math.floor((((Math.cos(time * 0.0002 + Math.PI) + 1) / 2) * this.mapSize) / 2);
    this.dy1 = Math.floor((((Math.cos(time * 0.0003) + 1) / 2) * this.mapSize) / 2);
    this.dx2 = Math.floor((((Math.cos(time * -0.0002) + 1) / 2) * this.mapSize) / 2);
    this.dy2 = Math.floor((((Math.cos(time * -0.0003 + Math.PI) + 1) / 2) * this.mapSize) / 2);
  }

  private updateImageData(): void {
    for (let u = 0; u < this.imgSize; u++) {
      for (let v = 0; v < this.imgSize; v++) {
        const i = (u + this.dy1) * this.mapSize + (v + this.dx1);
        const k = (u + this.dy2) * this.mapSize + (v + this.dx2);
        const j = u * this.imgSize * 4 + v * 4;

        const h = this.heightMap1[i] + this.heightMap2[k];
        const c = this.palette[h];

        this.imageData.data[j] = c.r;
        this.imageData.data[j + 1] = c.g;
        this.imageData.data[j + 2] = c.b;
      }
    }
  }

  private tick(time: number): void {
    this.moveHeightMaps(time);
    this.updatePalette(time);
    this.updateImageData();
    this.context.putImageData(this.imageData, 0, 0);
    requestAnimationFrame((t) => this.tick(t));
  }


}
