import { Component, ChangeDetectionStrategy, signal, inject, PLATFORM_ID, AfterViewInit, OnDestroy, output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <!-- Top Gold Progress Bar -->
    <div 
      class="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#F5C518] via-[#FFB033] to-[#F5C518] z-50 transition-all duration-100 ease-out shadow-[0_0_12px_rgba(245,197,24,0.6)]"
      [style.width.%]="scrollProgress()">
    </div>

    <!-- Main Navigation Header -->
    <header 
      class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out"
      [class.translate-y-0]="navVisible()"
      [class.-translate-y-full]="!navVisible()"
      [class.bg-[#071a38]/90]="isScrolled()"
      [class.backdrop-blur-md]="isScrolled()"
      [class.border-b]="isScrolled()"
      [class.border-[#F5C518]/15]="isScrolled()"
      [class.shadow-2xl]="isScrolled()"
      [class.py-3]="isScrolled()"
      [class.py-5]="!isScrolled()">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-8">
          
          <!-- Zone 1: Brand Zone with Logo Mark & Typography -->
          <a href="#hero" (click)="scrollTo($event, '#hero')" class="flex items-center gap-3.5 group select-none whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] rounded-lg p-1">
            <img 
              src="/logo.png" 
              alt="JD Universal Logo" 
              class="w-11 h-11 rounded-full object-contain shadow-md shadow-[#0F4C5C]/30 border border-[#F5C518]/40 group-hover:border-[#F5C518] transition-all group-hover:scale-105 shrink-0" 
              referrerpolicy="no-referrer" />
            
            <div class="flex flex-col">
              <span class="font-display text-lg font-bold tracking-tight text-white group-hover:text-[#F5C518] transition-colors flex items-center gap-1.5">
                JD UNIVERSAL
                <span class="text-[10px] text-slate-400 font-normal tracking-normal hidden sm:inline-block">SDN BHD</span>
              </span>
              <span class="text-[10px] tracking-wider text-slate-400 uppercase font-medium">Melaka · Malaysia</span>
            </div>
          </a>

          <!-- Zone 2: Desktop Navigation Links (4-6 single-line links) -->
          <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300" aria-label="Main Navigation">
            <a href="#about" (click)="scrollTo($event, '#about')" class="hover:text-[#F5C518] transition-colors whitespace-nowrap py-1">About</a>
            <a href="#services" (click)="scrollTo($event, '#services')" class="hover:text-[#F5C518] transition-colors whitespace-nowrap py-1">Services</a>
            <a href="#projects" (click)="scrollTo($event, '#projects')" class="hover:text-[#F5C518] transition-colors whitespace-nowrap py-1">Projects</a>
            <a href="#events" (click)="scrollTo($event, '#events')" class="hover:text-[#F5C518] transition-colors whitespace-nowrap py-1">Events & Gallery</a>
            <a href="#artists" (click)="scrollTo($event, '#artists')" class="hover:text-[#F5C518] transition-colors whitespace-nowrap py-1">Artists</a>
            <a href="#founder" (click)="scrollTo($event, '#founder')" class="hover:text-[#F5C518] transition-colors whitespace-nowrap py-1">Founder</a>
          </nav>

          <!-- Zone 3: 1 Primary CTA Button + Mobile Menu Toggle -->
          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <a 
              href="#contact"
              (click)="scrollTo($event, '#contact')" 
              class="relative group overflow-hidden px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#F5C518] to-[#FFB033] text-[#071a38] text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-[#F5C518]/20 hover:shadow-[#F5C518]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
              <mat-icon class="!w-3.5 sm:!w-4 !h-3.5 sm:!h-4 !text-[15px] sm:!text-[16px]">calendar_today</mat-icon>
              <span class="hidden sm:inline">Book Event</span>
              <span class="sm:hidden">Book</span>
            </a>

            <!-- Mobile Hamburger Toggle -->
            <button 
              type="button"
              (click)="toggleMobileMenu()"
              class="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white bg-[#0E2F5F]/60 border border-white/10 hover:border-[#F5C518]/40 transition-colors"
              [attr.aria-expanded]="mobileMenuOpen()"
              aria-label="Toggle Navigation Menu">
              <mat-icon>{{ mobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
            </button>
          </div>

        </div>
      </div>
    </header>

    <!-- Mobile Fullscreen Overlay Menu -->
    @if (mobileMenuOpen()) {
      <div 
        class="fixed inset-0 z-50 bg-[#071a38]/98 backdrop-blur-xl flex flex-col justify-between pt-6 pb-8 px-6 lg:hidden animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation">
        
        <!-- Header with Close Button -->
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <div class="flex items-center gap-2.5">
            <img 
              src="/logo.png" 
              alt="JD Universal Logo" 
              class="w-8 h-8 rounded-full object-contain border border-[#F5C518]/30 shrink-0" 
              referrerpolicy="no-referrer" />
            <span class="font-display font-bold text-sm text-white">JD UNIVERSAL</span>
          </div>

          <button 
            type="button"
            (click)="toggleMobileMenu()"
            class="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 transition-colors cursor-pointer"
            aria-label="Close navigation menu">
            <mat-icon class="!w-5 !h-5 !text-[20px]">close</mat-icon>
          </button>
        </div>

        <div class="space-y-3.5 text-center my-auto py-4">
          <a href="#hero" (click)="mobileNavigate('#hero')" class="block py-1.5 text-xl font-display font-bold text-white hover:text-[#F5C518] transition-colors">Home</a>
          <a href="#about" (click)="mobileNavigate('#about')" class="block py-1.5 text-xl font-display font-bold text-slate-300 hover:text-[#F5C518] transition-colors">About Story</a>
          <a href="#services" (click)="mobileNavigate('#services')" class="block py-1.5 text-xl font-display font-bold text-slate-300 hover:text-[#F5C518] transition-colors">14 Core Services</a>
          <a href="#projects" (click)="mobileNavigate('#projects')" class="block py-1.5 text-xl font-display font-bold text-slate-300 hover:text-[#F5C518] transition-colors">Released Projects</a>
          <a href="#coming-soon" (click)="mobileNavigate('#coming-soon')" class="block py-1.5 text-xl font-display font-bold text-slate-300 hover:text-[#F5C518] transition-colors">Coming Soon 2026</a>
          <a href="#events" (click)="mobileNavigate('#events')" class="block py-1.5 text-xl font-display font-bold text-slate-300 hover:text-[#F5C518] transition-colors">Events & Shoot Gallery</a>
          <a href="#artists" (click)="mobileNavigate('#artists')" class="block py-1.5 text-xl font-display font-bold text-slate-300 hover:text-[#F5C518] transition-colors">International Network</a>
          <a href="#founder" (click)="mobileNavigate('#founder')" class="block py-1.5 text-xl font-display font-bold text-slate-300 hover:text-[#F5C518] transition-colors">Owner & Director Profile</a>
          <a href="#contact" (click)="mobileNavigate('#contact')" class="block py-1.5 text-xl font-display font-bold text-[#F5C518] transition-colors">Contact Melaka HQ</a>
        </div>

        <div class="border-t border-slate-800 pt-5 text-center space-y-2">
          <p class="text-xs text-slate-400">Direct Melaka Hotline: <a href="tel:0176482460" class="text-[#F5C518] font-bold">017-6482460</a></p>
          <div class="flex items-center justify-center gap-4 text-slate-400 text-xs">
            <span>Operating Since 2021</span>
            <span>·</span>
            <span>From Vision to Reality</span>
          </div>
        </div>
      </div>
    }
  `
})
export class Navbar implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly isScrolled = signal(false);
  readonly navVisible = signal(true);
  readonly scrollProgress = signal(0);
  readonly mobileMenuOpen = signal(false);

  readonly openBookingModal = output<void>();

  private lastScrollY = 0;
  private scrollListener?: () => void;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.scrollListener = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      if (docHeight > 0) {
        this.scrollProgress.set(Math.min(100, Math.max(0, (currentScrollY / docHeight) * 100)));
      }

      this.isScrolled.set(currentScrollY > 40);

      // Hide navbar when scrolling down fast, show when scrolling up
      if (currentScrollY > 200 && currentScrollY > this.lastScrollY + 12) {
        this.navVisible.set(false);
      } else if (currentScrollY < this.lastScrollY - 6 || currentScrollY <= 100) {
        this.navVisible.set(true);
      }

      this.lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  mobileNavigate(selector: string): void {
    this.mobileMenuOpen.set(false);
    this.scrollTo(null, selector);
  }

  scrollTo(event: Event | null, targetSelector: string): void {
    if (event) {
      event.preventDefault();
    }
    if (!this.isBrowser) return;

    const el = document.querySelector(targetSelector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
