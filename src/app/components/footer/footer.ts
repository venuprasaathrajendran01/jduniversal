import { Component, ChangeDetectionStrategy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { COMPANY_INFO } from '../../data/company-data';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <footer class="relative bg-[#040e1c] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      
      <!-- Ambient Glow Behind CTA Banner -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#F5C518]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Large Headline Statement -->
        <div class="text-center max-w-4xl mx-auto pb-16 border-b border-white/10">
          <img 
            src="/logo.png" 
            alt="JD Universal SDN BHD Logo" 
            class="w-20 h-20 rounded-full object-contain border border-[#F5C518]/40 mx-auto mb-6 shadow-2xl drop-shadow-[0_0_25px_rgba(245,197,24,0.3)]" 
            referrerpolicy="no-referrer" />

          <h2 class="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Let's Create Something <span class="text-gradient-gold">Unforgettable</span>
          </h2>
          
          <p class="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 font-light">
            Whether it's a multi-million-stream music video or a once-in-a-lifetime wedding gala, JD Universal SDN BHD turns your highest vision into living reality.
          </p>

          <a 
            href="#contact" 
            (click)="scrollTo($event, '#contact')"
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F5C518] to-[#FFB033] text-[#071a38] font-display font-bold text-sm tracking-wide shadow-xl shadow-[#F5C518]/25 hover:shadow-[#F5C518]/40 hover:scale-105 active:scale-95 transition-all">
            <mat-icon class="!w-4 !h-4 !text-[18px]">calendar_today</mat-icon>
            <span>Initiate Your Booking</span>
          </a>
        </div>

        <!-- Links & Info Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-white/10">
          
          <!-- Column 1: Brand & Slogan -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="JD Universal Logo" 
                class="w-9 h-9 rounded-full object-contain border border-[#F5C518]/40 shrink-0" 
                referrerpolicy="no-referrer" />
              <div>
                <span class="font-display text-base font-bold text-white block">JD UNIVERSAL</span>
                <span class="text-[10px] text-slate-400 uppercase tracking-widest block">SDN BHD · Melaka</span>
              </div>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">
              From Vision to Reality. Asian-based creative video, event management, and entertainment production agency operating since 2021.
            </p>
            <div class="text-[11px] text-[#F5C518] font-semibold">
              Director: Jayakumar (MC-Jey)
            </div>
          </div>

          <!-- Column 2: Navigation Links -->
          <div>
            <h4 class="font-display text-xs uppercase font-bold tracking-widest text-[#F5C518] mb-4">Explore</h4>
            <ul class="space-y-2 text-xs text-slate-300">
              <li><a href="#about" (click)="scrollTo($event, '#about')" class="hover:text-white transition-colors">About Our Story</a></li>
              <li><a href="#services" (click)="scrollTo($event, '#services')" class="hover:text-white transition-colors">14 Specialized Capabilities</a></li>
              <li><a href="#projects" (click)="scrollTo($event, '#projects')" class="hover:text-white transition-colors">Featured Music Videos</a></li>
              <li><a href="#coming-soon" (click)="scrollTo($event, '#coming-soon')" class="hover:text-white transition-colors">2026 Future Releases</a></li>
              <li><a href="#events" (click)="scrollTo($event, '#events')" class="hover:text-white transition-colors">Events & Shoot Gallery</a></li>
            </ul>
          </div>

          <!-- Column 3: Talent & Industry -->
          <div>
            <h4 class="font-display text-xs uppercase font-bold tracking-widest text-[#F5C518] mb-4">Talent Network</h4>
            <ul class="space-y-2 text-xs text-slate-300">
              <li><a href="#artists" (click)="scrollTo($event, '#artists')" class="hover:text-white transition-colors">Malaysia Artists & DJs</a></li>
              <li><a href="#artists" (click)="scrollTo($event, '#artists')" class="hover:text-white transition-colors">India Lyricists & Scoring</a></li>
              <li><a href="#artists" (click)="scrollTo($event, '#artists')" class="hover:text-white transition-colors">Sri Lanka Audio Masters</a></li>
              <li><a href="#founder" (click)="scrollTo($event, '#founder')" class="hover:text-white transition-colors">Director MC-Jey Profile</a></li>
              <li><a href="https://youtube.com/@jduniversal9602" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">YouTube Channel</a></li>
            </ul>
          </div>

          <!-- Column 4: Studio Contact -->
          <div>
            <h4 class="font-display text-xs uppercase font-bold tracking-widest text-[#F5C518] mb-4">Melaka Studio</h4>
            <div class="space-y-2.5 text-xs text-slate-400">
              <p>B4, 08, Jln TSS 2, Kasturi Semabok, 75050 Melaka, Malaysia</p>
              <p>Hotline: <a href="tel:0176482460" class="text-white font-bold hover:underline">017-6482460</a></p>
              <p>Mon - Sat: 09:00 - 20:00 (MYT)</p>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright & Back to Top -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 JD Universal SDN BHD. All rights reserved. Registered in Malaysia.</p>
          
          <button 
            type="button"
            (click)="scrollToTop()"
            class="flex items-center gap-1.5 text-slate-400 hover:text-[#F5C518] transition-colors cursor-pointer"
            aria-label="Scroll back to top">
            <span>Back to Top</span>
            <mat-icon class="!w-4 !h-4 !text-[16px]">arrow_upward</mat-icon>
          </button>
        </div>

      </div>

      <!-- Persistent Floating WhatsApp Button in Bottom-Right Corner -->
      <a 
        [href]="contact.whatsapp" 
        target="_blank" 
        rel="noopener noreferrer"
        class="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        aria-label="Chat directly on WhatsApp with JD Universal">
        <mat-icon class="!w-7 !h-7 !text-[28px]">chat</mat-icon>
        <span class="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-[#071a38] text-white text-[11px] font-bold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

    </footer>
  `
})
export class Footer {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);
  readonly contact = COMPANY_INFO.contact;

  scrollTo(event: Event, targetSelector: string): void {
    event.preventDefault();
    if (!this.isBrowser) return;
    const el = document.querySelector(targetSelector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    if (!this.isBrowser) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
