import { Component, ChangeDetectionStrategy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="hero" class="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#071a38]">
      
      <!-- Ambient Cinematic Background Glows & Floating Geometric Motifs -->
      <div class="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <!-- Radial Gold and Teal Glows -->
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#0F4C5C]/25 via-[#F5C518]/10 to-transparent rounded-full blur-[120px]"></div>
        <div class="absolute top-1/3 -left-32 w-96 h-96 bg-[#0E2F5F]/60 rounded-full blur-[90px]"></div>
        <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FFB033]/15 rounded-full blur-[100px]"></div>

        <!-- Floating Geometric Diamonds/Triangles (echoing slide deck motifs) -->
        <div class="absolute top-24 left-[10%] w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[32px] border-b-[#F5C518]/25 rotate-12 animate-pulse"></div>
        <div class="absolute top-44 right-[12%] w-7 h-7 bg-gradient-to-tr from-[#0F4C5C] to-[#F5C518]/40 rotate-45 border border-[#F5C518]/30"></div>
        <div class="absolute bottom-40 left-[15%] w-6 h-6 bg-[#FFB033]/20 rotate-45"></div>
        <div class="absolute top-2/3 right-[8%] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[26px] border-t-[#0E2F5F]/60 rotate-45"></div>

        <!-- Subtle Animated Grid Texture -->
        <div class="absolute inset-0 film-grain opacity-60"></div>
      </div>

      <!-- Main Central Hero Content -->
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        
        <!-- Tagline / Trust Indicator -->
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E2F5F]/50 border border-[#F5C518]/20 backdrop-blur-md mb-8 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#F5C518]"></span>
          <span class="text-xs uppercase tracking-widest font-semibold text-slate-300">
            Melaka, Malaysia · Operating Since 2021
          </span>
        </div>

        <!-- Grand Cinematic Headline with Gradient Accents -->
        <h1 class="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] mb-6">
          We Turn <span class="text-gradient-gold">Vision</span><br />
          Into <span class="text-gradient-gold">Reality</span>
        </h1>

        <!-- Subtext -->
        <p class="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          Premier Asian-based event management, music video & cinematic production agency from Melaka, Malaysia. Bringing extraordinary stories and royal celebrations to life across Malaysia, India, and Sri Lanka.
        </p>

        <!-- Two Action CTAs -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a 
            href="#projects" 
            (click)="scrollTo($event, '#projects')"
            class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F5C518] via-[#FFB033] to-[#F5C518] text-[#071a38] font-display font-bold text-sm tracking-wide shadow-xl shadow-[#F5C518]/25 hover:shadow-[#F5C518]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
            <span>View Our Projects</span>
            <mat-icon class="!w-4 !h-4 !text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</mat-icon>
          </a>

          <a 
            href="#contact" 
            (click)="scrollTo($event, '#contact')"
            class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0E2F5F]/40 hover:bg-[#0E2F5F]/70 text-white font-display font-semibold text-sm tracking-wide border border-[#F5C518]/30 hover:border-[#F5C518] backdrop-blur-md transition-all flex items-center justify-center gap-2">
            <mat-icon class="!w-4 !h-4 !text-[18px] text-[#F5C518]">event_available</mat-icon>
            <span>Book Your Event</span>
          </a>
        </div>

      </div>

      <!-- Bottom: Animated Scroll Indicator & Infinite Marquee -->
      <div class="relative z-10 w-full mt-12">
        <!-- Scroll indicator -->
        <div class="flex flex-col items-center justify-center mb-8">
          <a href="#about" (click)="scrollTo($event, '#about')" class="flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#F5C518] transition-colors" aria-label="Scroll to About section">
            <span class="text-[11px] tracking-widest uppercase font-medium">Explore Agency</span>
            <mat-icon class="!w-5 !h-5 !text-[20px] animate-bounce text-[#F5C518]">keyboard_arrow_down</mat-icon>
          </a>
        </div>

        <!-- Slow Infinite Marquee of Talents and Partners -->
        <div class="w-full border-y border-white/5 bg-[#051429]/60 backdrop-blur-sm py-3.5 overflow-hidden">
          <div class="flex w-max animate-[marquee_35s_linear_infinite] gap-8 items-center text-xs tracking-wider text-slate-400 uppercase font-medium">
            <span>Darkkey</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Vikadakavi</span>
            <span class="text-[#F5C518]">✦</span>
            <span>MC Sentamilthazan</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Shane Xtreme</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Semma Beatz</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Melvin Miranda</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Raaga FM</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Minnal FM</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Raptown Productions</span>
            <span class="text-[#F5C518]">✦</span>
            <span>VDR Entertainment</span>
            <span class="text-[#F5C518]">✦</span>
            <span>SCii Studio</span>
            <span class="text-[#F5C518]">✦</span>
            <span>NBN (Northern Borneo Networks)</span>
            <span class="text-[#F5C518]">✦</span>
            <span>EASI Kota Damansara</span>
            <span class="text-[#F5C518]">✦</span>
            <!-- Duplicate for seamless loop -->
            <span>Darkkey</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Vikadakavi</span>
            <span class="text-[#F5C518]">✦</span>
            <span>MC Sentamilthazan</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Shane Xtreme</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Semma Beatz</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Melvin Miranda</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Raaga FM</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Minnal FM</span>
            <span class="text-[#F5C518]">✦</span>
            <span>Raptown Productions</span>
            <span class="text-[#F5C518]">✦</span>
            <span>VDR Entertainment</span>
            <span class="text-[#F5C518]">✦</span>
            <span>SCii Studio</span>
          </div>
        </div>
      </div>

    </section>
  `,
  styles: [`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `]
})
export class Hero {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  scrollTo(event: Event, targetSelector: string): void {
    event.preventDefault();
    if (!this.isBrowser) return;
    const el = document.querySelector(targetSelector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
