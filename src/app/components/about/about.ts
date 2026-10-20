import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { COMPANY_INFO } from '../../data/company-data';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="about" class="relative py-28 bg-[#071a38] overflow-hidden border-t border-white/5">
      
      <!-- Subtle Decorative Shapes -->
      <div class="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#0F4C5C]/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column: The Narrative Story -->
          <div class="lg:col-span-7 space-y-6">
            
            <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
              <span>About JD Universal</span>
              <span class="w-1.5 h-1.5 rounded-full bg-[#F5C518]"></span>
              <span class="text-slate-400">Malacca, Malaysia</span>
            </div>

            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Asian-Based Creative Video, Event Management & <span class="text-gradient-gold">Production Agency</span>
            </h2>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
              Operating since 2021 from historic Melaka, Malaysia, <strong class="text-white font-semibold">JD Universal SDN BHD</strong> puts relentless effort into crafting the highest quality content for events, music production, and multimedia landscapes.
            </p>

            <p class="text-sm sm:text-base text-slate-400 leading-relaxed">
              Our mission is to empower artists, brands, and families to consume less time stressing over logistics and focus on the unforgettable moments of their celebration. Led by founder, lead planner and acclaimed director <strong class="text-slate-200">Jayakumar Chandrasekaran (MC-Jey)</strong>, we bridge premier talent and technical excellence across Southeast Asia and the Indian subcontinent.
            </p>

            <!-- Key Pillars Checklist -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E2F5F]/40 border border-[#F5C518]/15">
                <mat-icon class="!w-5 !h-5 !text-[20px] text-[#F5C518] mt-0.5">verified</mat-icon>
                <div>
                  <h4 class="text-sm font-semibold text-white">Full-Spectrum Production</h4>
                  <p class="text-xs text-slate-400">From scriptwriting & filming to 4K color grading and delivery.</p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E2F5F]/40 border border-[#F5C518]/15">
                <mat-icon class="!w-5 !h-5 !text-[20px] text-[#F5C518] mt-0.5">public</mat-icon>
                <div>
                  <h4 class="text-sm font-semibold text-white">Cross-Border Network</h4>
                  <p class="text-xs text-slate-400">Direct active partnerships across Malaysia, India, and Sri Lanka.</p>
                </div>
              </div>
            </div>

            <!-- Quantitative Stats Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              @for (stat of stats; track stat.label) {
                <div class="p-4 rounded-xl bg-[#0a1e3f]/60 border border-white/5">
                  <div class="font-display text-2xl sm:text-3xl font-extrabold text-[#F5C518] tracking-tight">
                    {{ stat.value }}
                  </div>
                  <div class="text-xs font-semibold text-white mt-1">{{ stat.label }}</div>
                  <div class="text-[11px] text-slate-400">{{ stat.subtext }}</div>
                </div>
              }
            </div>

          </div>

          <!-- Right Column: Layered Cinematic Graphic & Credibility Showcase -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <!-- Ambient Backing Glow -->
              <div class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#0F4C5C]/40 via-[#F5C518]/20 to-[#FFB033]/20 blur-xl"></div>
              
              <!-- Card Surface with Geometric Corner Accent -->
              <div class="relative rounded-2xl bg-[#0E2F5F]/60 border border-[#F5C518]/30 backdrop-blur-xl p-6 sm:p-8 overflow-hidden shadow-2xl corner-accent-tl corner-accent-br">
                
                <!-- Badge Head -->
                <div class="flex items-center justify-between pb-6 border-b border-white/10">
                  <div class="flex items-center gap-3">
                    <img 
                      src="/logo.png" 
                      alt="JD Universal Logo" 
                      class="w-10 h-10 rounded-full object-contain border border-[#F5C518]/40 shadow-sm shrink-0" 
                      referrerpolicy="no-referrer" />
                    <div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Company Profile</div>
                      <div class="text-sm font-bold text-white">SDN BHD Verification</div>
                    </div>
                  </div>
                  <span class="text-[11px] px-2.5 py-1 rounded bg-[#F5C518]/15 text-[#F5C518] font-mono font-semibold">
                    EST. 2021
                  </span>
                </div>

                <!-- Showcase Highlights -->
                <div class="space-y-4 my-6">
                  <div class="flex items-center justify-between text-xs text-slate-300 p-2.5 rounded-lg bg-black/20">
                    <span class="flex items-center gap-2">
                      <mat-icon class="!w-4 !h-4 !text-[16px] text-[#F5C518]">radio</mat-icon>
                      National Radio Airplay
                    </span>
                    <span class="font-semibold text-white">Minnal & Raaga FM</span>
                  </div>

                  <div class="flex items-center justify-between text-xs text-slate-300 p-2.5 rounded-lg bg-black/20">
                    <span class="flex items-center gap-2">
                      <mat-icon class="!w-4 !h-4 !text-[16px] text-[#F5C518]">album</mat-icon>
                      Released Music Catalog
                    </span>
                    <span class="font-semibold text-white">10+ Productions</span>
                  </div>

                  <div class="flex items-center justify-between text-xs text-slate-300 p-2.5 rounded-lg bg-black/20">
                    <span class="flex items-center gap-2">
                      <mat-icon class="!w-4 !h-4 !text-[16px] text-[#F5C518]">place</mat-icon>
                      Headquarters
                    </span>
                    <span class="font-semibold text-white">Kasturi Semabok, Melaka</span>
                  </div>

                  <div class="flex items-center justify-between text-xs text-slate-300 p-2.5 rounded-lg bg-black/20">
                    <span class="flex items-center gap-2">
                      <mat-icon class="!w-4 !h-4 !text-[16px] text-[#F5C518]">military_tech</mat-icon>
                      Industry Credential
                    </span>
                    <span class="font-semibold text-white">International Collaborator</span>
                  </div>
                </div>

                <!-- Quote Card -->
                <div class="p-4 rounded-xl bg-gradient-to-r from-[#0F4C5C]/30 to-[#0E2F5F]/40 border border-[#F5C518]/20 text-xs text-slate-300 italic">
                  "Every production is treated as a cultural landmark. We merge strategy and artistic fire to transcend expectations."
                  <div class="text-[11px] text-[#F5C518] font-bold not-italic mt-2">
                    — Jayakumar Chandrasekaran (MC-Jey)
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class About {
  readonly stats = COMPANY_INFO.stats;
}
