class AudioController {
  private ctx: AudioContext | null = null;
  private gainNode: GainNode | null = null;
  private initialized: boolean = false;

  private init() {
    if (this.initialized) return;
    
    try {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.gainNode = this.ctx.createGain();
      this.gainNode.connect(this.ctx.destination);
      // Master volume: Extremely subtle
      this.gainNode.gain.value = 0.04; 
      this.initialized = true;
    } catch (e) {
      console.error("Audio init failed", e);
    }
  }

  playHover() {
    if (!this.initialized) this.init();
    if (!this.ctx || !this.gainNode) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // Filter for that "soft" premium feel, removing harsh highs
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2000;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.gainNode);

    // High pitched, very short tick (Sine wave)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1000, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(500, this.ctx.currentTime + 0.03);

    // Short envelope
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  playClick() {
    if (!this.initialized) this.init();
    if (!this.ctx || !this.gainNode) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // Heavier filter for the "thock" sound
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.gainNode);

    // Slightly deeper "thock" (Triangle wave)
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.1);

    // Longer envelope than hover
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }
}

export const sfx = new AudioController();