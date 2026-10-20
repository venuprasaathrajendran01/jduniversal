import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { COMING_SOON_PROJECTS } from '../../data/company-data';

@Component({
  selector: 'app-coming-soon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ReactiveFormsModule],
  template: `
    <section id="coming-soon" class="relative py-28 bg-[#040e1c] overflow-hidden border-t border-white/5">
      
      <!-- Glitch / Cinema Neon Ambient Glow -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-red-900/15 rounded-full blur-[120px]"></div>
        <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#F5C518]/10 rounded-full blur-[120px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>Classified Teasers</span>
          </div>

          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Future <span class="text-gradient-gold">Releases</span>
          </h2>
          <p class="text-sm sm:text-base text-slate-300">
            Currently in active post-production. Witness the next monumental chapter in Malaysian and South Asian cinema.
          </p>
        </div>

        <!-- 2 Teaser Feature Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          @for (item of teasers; track item.id) {
            <div class="relative group rounded-2xl bg-[#07172e] border border-red-500/20 hover:border-[#F5C518]/50 p-7 sm:p-8 overflow-hidden shadow-2xl transition-all duration-300 corner-accent-tl">
              
              <!-- Subtle Red Accent Glow -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-[#F5C518]/20 transition-all"></div>

              <!-- Top Row Badges -->
              <div class="flex items-center justify-between mb-6">
                <span class="text-[11px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-black/50 text-slate-400 border border-white/10">
                  {{ item.codeName }}
                </span>
                
                <span class="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  Releasing 2026
                </span>
              </div>

              <!-- Title with Glitch Style on Hover -->
              <h3 class="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-[#F5C518] glitch-hover transition-colors mb-3">
                {{ item.title }}
              </h3>

              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {{ item.logline }}
              </p>

              <!-- Meta specs -->
              <div class="space-y-2 py-4 border-y border-white/10 text-xs">
                <div class="flex items-center justify-between text-slate-400">
                  <span>Direction & Production</span>
                  <span class="font-semibold text-slate-200">{{ item.director }}</span>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>Sound Architecture</span>
                  <span class="font-semibold text-[#F5C518]">{{ item.musicDirector }}</span>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>Production Status</span>
                  <span class="font-semibold text-emerald-400">{{ item.status }}</span>
                </div>
              </div>

              <div class="mt-6 flex items-center justify-between text-xs text-slate-400">
                <span class="italic text-[11px]">Exclusive theatrical & digital premiere</span>
                <span class="text-[#F5C518] font-bold">{{ item.highlight }}</span>
              </div>

            </div>
          }
        </div>

        <!-- Interactive "Notify Me" Form -->
        <div class="max-w-xl mx-auto rounded-2xl bg-[#0a1e3f]/70 border border-[#F5C518]/25 p-6 sm:p-8 backdrop-blur-md text-center">
          <div class="w-10 h-10 rounded-full bg-[#F5C518]/15 border border-[#F5C518]/30 flex items-center justify-center text-[#F5C518] mx-auto mb-3">
            <mat-icon class="!w-5 !h-5 !text-[20px]">notifications_active</mat-icon>
          </div>
          <h4 class="font-display text-lg font-bold text-white mb-1">
            Get First Access to Teasers & Premiere Tickets
          </h4>
          <p class="text-xs text-slate-300 mb-5">
            Be the first to receive behind-the-scenes footage and private premiere invitations for Navitan III & Production #6.
          </p>

          @if (subscribed()) {
            <div class="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center justify-center gap-2">
              <mat-icon class="!w-5 !h-5 !text-[20px] text-emerald-400">check_circle</mat-icon>
              <span>You are on the VIP Premiere list! We will notify you when the first look drops.</span>
            </div>
          } @else {
            <form (submit)="onNotifySubmit($event)" class="flex flex-col sm:flex-row gap-2.5">
              <input 
                type="email"
                [formControl]="emailControl"
                placeholder="Enter your email address"
                class="flex-1 px-4 py-2.5 rounded-xl bg-[#071a38] border border-white/15 focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] text-white text-xs placeholder:text-slate-500 outline-none transition-all"
                aria-label="Email for teaser notification"
                required />
              
              <button 
                type="submit"
                class="px-5 py-2.5 rounded-xl bg-[#F5C518] hover:bg-[#FFB033] text-[#071a38] text-xs font-bold tracking-wide transition-all shadow-md hover:scale-[1.02] cursor-pointer whitespace-nowrap">
                Notify Me
              </button>
            </form>
            @if (emailControl.invalid && (emailControl.dirty || emailControl.touched)) {
              <p class="text-[11px] text-red-400 mt-2 text-left">Please enter a valid email address.</p>
            }
          }
        </div>

      </div>
    </section>
  `
})
export class ComingSoon {
  readonly teasers = COMING_SOON_PROJECTS;
  readonly emailControl = new FormControl('', [Validators.required, Validators.email]);
  readonly subscribed = signal(false);

  onNotifySubmit(event: Event): void {
    event.preventDefault();
    if (this.emailControl.valid) {
      this.subscribed.set(true);
    } else {
      this.emailControl.markAsTouched();
    }
  }
}
