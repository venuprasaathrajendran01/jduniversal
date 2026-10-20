import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ARTISTS_DATA } from '../../data/company-data';

@Component({
  selector: 'app-collaborations',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="artists" class="relative py-28 bg-[#051429] overflow-hidden border-t border-white/5">
      
      <!-- Ambient Lighting -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0F4C5C]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
            <mat-icon class="!w-4 !h-4 !text-[16px]">public</mat-icon>
            <span>Cross-Border Creative Coalition</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Artists & Industry <span class="text-gradient-gold">Collaborations</span>
          </h2>
          <p class="text-sm sm:text-base text-slate-300">
            We have had the privilege of collaborating with a diverse range of premier artists, radio icons, and music directors across Malaysia, India, and Sri Lanka.
          </p>
        </div>

        <!-- Stylized 3-Column Country Hub Showcase -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          <!-- Column 1: Malaysia (Home Hub) -->
          <div class="relative rounded-2xl bg-[#071a38] border border-[#F5C518]/30 p-7 shadow-xl flex flex-col justify-between corner-accent-tl">
            <div>
              <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div class="flex items-center gap-3">
                  <span class="text-2xl">🇲🇾</span>
                  <div>
                    <h3 class="font-display text-xl font-bold text-white">Malaysia</h3>
                    <span class="text-[11px] uppercase tracking-wider text-[#F5C518] font-semibold">Headquarters & Talent Core</span>
                  </div>
                </div>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>

              <!-- Malaysia Artists -->
              <div class="mb-5">
                <span class="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-2.5">
                  Featured Artists
                </span>
                <div class="space-y-2">
                  @for (a of artists.malaysiaArtists; track a.name) {
                    <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#0a1e3f] text-xs">
                      <span class="font-bold text-white">{{ a.name }}</span>
                      <span class="text-[11px] text-slate-400">{{ a.role }}</span>
                    </div>
                  }
                </div>
              </div>

              <!-- Malaysia Music Directors -->
              <div>
                <span class="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-2.5">
                  Music Directors & Production
                </span>
                <div class="space-y-2">
                  @for (md of artists.malaysiaMusicDirectors; track md.name) {
                    <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#0a1e3f] text-xs">
                      <span class="font-bold text-[#F5C518]">{{ md.name }}</span>
                      <span class="text-[11px] text-slate-400">{{ md.works }}</span>
                    </div>
                  }
                </div>
              </div>
            </div>

            <!-- Radio Feature note -->
            <div class="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
              <mat-icon class="!w-4 !h-4 !text-[16px] text-[#F5C518]">radio</mat-icon>
              <span>Featured on Raaga FM (VJ Uthaya & Magen)</span>
            </div>
          </div>

          <!-- Column 2: India (Cinematic & Lyrical Force) -->
          <div class="relative rounded-2xl bg-[#071a38] border border-white/10 hover:border-[#F5C518]/30 p-7 shadow-xl flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div class="flex items-center gap-3">
                  <span class="text-2xl">🇮🇳</span>
                  <div>
                    <h3 class="font-display text-xl font-bold text-white">India</h3>
                    <span class="text-[11px] uppercase tracking-wider text-[#FFB033] font-semibold">Lyricists & Composers</span>
                  </div>
                </div>
                <span class="w-2.5 h-2.5 rounded-full bg-[#FFB033]"></span>
              </div>

              <div class="space-y-4 mb-6">
                @for (a of artists.indiaArtists; track a.name) {
                  <div class="p-4 rounded-xl bg-[#0a1e3f] border border-white/5 space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="font-display font-bold text-sm text-white">{{ a.name }}</span>
                      <span class="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#FFB033]/20 text-[#FFB033]">{{ a.role }}</span>
                    </div>
                    <p class="text-xs text-slate-400">Key Projects: {{ a.note }}</p>
                  </div>
                }
              </div>

              <div class="p-4 rounded-xl bg-[#0F4C5C]/20 border border-[#0F4C5C]/40 text-xs text-slate-300">
                <span class="font-bold text-[#F5C518] block mb-1">Cultural Synergy</span>
                Deep-rooted collaboration with Chennai and South Indian lyricists delivering authentic Tamil poetry and high-energy hip-hop cadences.
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
              <mat-icon class="!w-4 !h-4 !text-[16px] text-[#F5C518]">flight_takeoff</mat-icon>
              <span>Melaka ⇄ Chennai Music Corridor</span>
            </div>
          </div>

          <!-- Column 3: Sri Lanka (Sound Engineering & Melodic Scoring) -->
          <div class="relative rounded-2xl bg-[#071a38] border border-white/10 hover:border-[#F5C518]/30 p-7 shadow-xl flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div class="flex items-center gap-3">
                  <span class="text-2xl">🇱🇰</span>
                  <div>
                    <h3 class="font-display text-xl font-bold text-white">Sri Lanka</h3>
                    <span class="text-[11px] uppercase tracking-wider text-teal-400 font-semibold">Music Directors & Vocals</span>
                  </div>
                </div>
                <span class="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
              </div>

              <div class="space-y-4 mb-6">
                @for (a of artists.sriLankaArtists; track a.name) {
                  <div class="p-4 rounded-xl bg-[#0a1e3f] border border-white/5 space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="font-display font-bold text-sm text-white">{{ a.name }}</span>
                      <span class="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">{{ a.role }}</span>
                    </div>
                    <p class="text-xs text-slate-400">Focus: {{ a.note }}</p>
                  </div>
                }
              </div>

              <div class="p-4 rounded-xl bg-[#0E2F5F]/40 border border-white/10 text-xs text-slate-300">
                <span class="font-bold text-teal-300 block mb-1">International Production</span>
                Seamless cross-border audio mastering, acoustic orchestration, and vocal tracking with Colombo-based sound studios.
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
              <mat-icon class="!w-4 !h-4 !text-[16px] text-[#F5C518]">hub</mat-icon>
              <span>Melaka ⇄ Colombo Audio Pipeline</span>
            </div>
          </div>

        </div>

        <!-- Connection Map Banner -->
        <div class="relative rounded-2xl bg-gradient-to-r from-[#071a38] via-[#0E2F5F] to-[#071a38] border border-[#F5C518]/25 p-8 text-center overflow-hidden">
          <div class="flex flex-col sm:flex-row items-center justify-around gap-6 relative z-10">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#F5C518] text-[#071a38] flex items-center justify-center font-bold">1</div>
              <div class="text-left">
                <div class="text-xs text-slate-400">Headquarters Hub</div>
                <div class="text-sm font-bold text-white">Melaka, Malaysia</div>
              </div>
            </div>

            <div class="hidden sm:flex items-center text-[#F5C518] gap-1">
              <span class="h-[1px] w-16 bg-[#F5C518]"></span>
              <mat-icon class="!w-5 !h-5 !text-[20px]">sync_alt</mat-icon>
              <span class="h-[1px] w-16 bg-[#F5C518]"></span>
            </div>

            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#FFB033] text-[#071a38] flex items-center justify-center font-bold">2</div>
              <div class="text-left">
                <div class="text-xs text-slate-400">Lyrical & Direction</div>
                <div class="text-sm font-bold text-white">Tamil Nadu, India</div>
              </div>
            </div>

            <div class="hidden sm:flex items-center text-[#F5C518] gap-1">
              <span class="h-[1px] w-16 bg-[#F5C518]"></span>
              <mat-icon class="!w-5 !h-5 !text-[20px]">sync_alt</mat-icon>
              <span class="h-[1px] w-16 bg-[#F5C518]"></span>
            </div>

            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-teal-400 text-[#071a38] flex items-center justify-center font-bold">3</div>
              <div class="text-left">
                <div class="text-xs text-slate-400">Acoustic & Scoring</div>
                <div class="text-sm font-bold text-white">Colombo, Sri Lanka</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class Collaborations {
  readonly artists = ARTISTS_DATA;
}
