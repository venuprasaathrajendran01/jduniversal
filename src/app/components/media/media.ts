import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-media',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section class="relative py-28 bg-[#071a38] overflow-hidden border-t border-white/5">
      
      <!-- Ambient Backing -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#F5C518]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
            <mat-icon class="!w-4 !h-4 !text-[16px]">podcasts</mat-icon>
            <span>National Broadcast Coverage</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Media & Radio <span class="text-gradient-gold">Recognition</span>
          </h2>
          <p class="text-sm sm:text-base text-slate-300">
            Recognized by Malaysia's most prominent Tamil-language national radio networks. Discussing our creative journey, production standards, and contributions to regional arts.
          </p>
        </div>

        <!-- 2 Press & Radio Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          <!-- Card 1: Minnal FM -->
          <div class="relative rounded-2xl bg-[#0a1e3f] border border-[#F5C518]/25 p-7 sm:p-8 shadow-xl flex flex-col justify-between corner-accent-tl">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-800 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    <mat-icon class="!w-6 !h-6 !text-[24px]">radio</mat-icon>
                  </div>
                  <div>
                    <span class="text-[10px] uppercase font-bold tracking-widest text-red-400">RTM National Radio</span>
                    <h3 class="font-display text-xl font-bold text-white">Minnal FM</h3>
                  </div>
                </div>

                <!-- Animated Equalizer Waves -->
                <div class="flex items-end gap-1 h-8 px-2 py-1 bg-black/40 rounded-lg">
                  <span class="w-1 bg-[#F5C518] rounded-full" [class.animate-wave-1]="isPlaying()"></span>
                  <span class="w-1 bg-[#F5C518] rounded-full" [class.animate-wave-2]="isPlaying()"></span>
                  <span class="w-1 bg-[#FFB033] rounded-full" [class.animate-wave-3]="isPlaying()"></span>
                  <span class="w-1 bg-[#F5C518] rounded-full" [class.animate-wave-4]="isPlaying()"></span>
                  <span class="w-1 bg-[#FFB033] rounded-full" [class.animate-wave-5]="isPlaying()"></span>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-[#071a38]/80 border border-white/5 mb-6 text-sm text-slate-200 leading-relaxed italic">
                &ldquo;Featured in a special radio interview on Minnal FM, the leading Tamil-language national radio station in Malaysia. Discussed JD Universal's cinematic milestones, artistic storytelling in music videos, and event innovation.&rdquo;
              </div>

              <div class="space-y-2 text-xs text-slate-400">
                <div class="flex items-center justify-between">
                  <span>Broadcast Reach:</span>
                  <span class="font-semibold text-white">Nationwide Malaysia & Singapore</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Featured Spokesperson:</span>
                  <span class="font-semibold text-[#F5C518]">Jayakumar (MC-Jey), Founder & CEO</span>
                </div>
              </div>
            </div>

            <!-- Interactive Waveform Toggle Button -->
            <button 
              type="button"
              (click)="toggleAudio()"
              class="mt-6 w-full py-2.5 rounded-xl border border-white/10 hover:border-[#F5C518]/50 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <mat-icon class="!w-4 !h-4 !text-[16px] text-[#F5C518]">{{ isPlaying() ? 'volume_up' : 'play_arrow' }}</mat-icon>
              <span>{{ isPlaying() ? 'Airplay Visualizer Active' : 'Simulate On-Air Broadcast Waves' }}</span>
            </button>
          </div>

          <!-- Card 2: Raaga FM -->
          <div class="relative rounded-2xl bg-[#0a1e3f] border border-[#F5C518]/25 p-7 sm:p-8 shadow-xl flex flex-col justify-between corner-accent-br">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    <mat-icon class="!w-6 !h-6 !text-[24px]">mic</mat-icon>
                  </div>
                  <div>
                    <span class="text-[10px] uppercase font-bold tracking-widest text-[#FFB033]">Astro Radio Network</span>
                    <h3 class="font-display text-xl font-bold text-white">Raaga FM</h3>
                  </div>
                </div>

                <!-- Animated Equalizer Waves -->
                <div class="flex items-end gap-1 h-8 px-2 py-1 bg-black/40 rounded-lg">
                  <span class="w-1 bg-[#FFB033] rounded-full" [class.animate-wave-2]="isPlaying()"></span>
                  <span class="w-1 bg-[#F5C518] rounded-full" [class.animate-wave-4]="isPlaying()"></span>
                  <span class="w-1 bg-[#FFB033] rounded-full" [class.animate-wave-1]="isPlaying()"></span>
                  <span class="w-1 bg-[#F5C518] rounded-full" [class.animate-wave-5]="isPlaying()"></span>
                  <span class="w-1 bg-[#FFB033] rounded-full" [class.animate-wave-3]="isPlaying()"></span>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-[#071a38]/80 border border-white/5 mb-6 text-sm text-slate-200 leading-relaxed italic">
                &ldquo;Invited for prime-time radio interviews on Raaga FM with renowned broadcasters VJ Uthaya and Magen. Shared in-depth industry insights on event management, cross-border music video production, and talent development.&rdquo;
              </div>

              <div class="space-y-2 text-xs text-slate-400">
                <div class="flex items-center justify-between">
                  <span>Broadcast Network:</span>
                  <span class="font-semibold text-white">Astro Raaga (No. 1 Tamil Station in MY)</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Show Hosts:</span>
                  <span class="font-semibold text-[#FFB033]">VJ Uthaya & Magen</span>
                </div>
              </div>
            </div>

            <!-- Action -->
            <button 
              type="button"
              (click)="toggleAudio()"
              class="mt-6 w-full py-2.5 rounded-xl border border-white/10 hover:border-[#F5C518]/50 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <mat-icon class="!w-4 !h-4 !text-[16px] text-[#FFB033]">{{ isPlaying() ? 'equalizer' : 'graphic_eq' }}</mat-icon>
              <span>{{ isPlaying() ? 'Broadcast Equalizer Active' : 'Toggle Radio Frequency Waves' }}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  `
})
export class Media {
  readonly isPlaying = signal(true);

  toggleAudio(): void {
    this.isPlaying.update(v => !v);
  }
}
