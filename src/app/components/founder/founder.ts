import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { COMPANY_INFO } from '../../data/company-data';

@Component({
  selector: 'app-founder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="founder" class="relative py-28 bg-[#071a38] overflow-hidden border-t border-white/5">
      
      <!-- Ambient Lighting -->
      <div class="absolute -left-32 bottom-0 w-96 h-96 bg-[#0F4C5C]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column: Portrait Showcase with Gold Frame -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-sm sm:max-w-md">
              
              <!-- Ambient Halo Glow -->
              <div class="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#F5C518]/25 via-[#0F4C5C]/30 to-[#FFB033]/25 blur-xl"></div>
              
              <!-- Stylized Founder Card Frame -->
              <div class="relative rounded-2xl bg-[#0a1e3f] border border-[#F5C518]/40 p-3 shadow-2xl overflow-hidden corner-accent-tl corner-accent-br">
                
                <div class="relative h-96 sm:h-[460px] w-full rounded-xl bg-[#051429] overflow-hidden flex flex-col justify-end p-6 border border-white/5">
                  
                  <!-- Stylized Cinematic Silhouette Backdrop -->
                  <div class="absolute inset-0 bg-gradient-to-t from-[#071a38] via-[#0E2F5F]/60 to-transparent"></div>
                  
                  <!-- Artistic Portrait Illustration / Icon Graphic -->
                  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-gradient-to-b from-[#0F4C5C] to-[#071a38] border-2 border-[#F5C518]/40 flex items-center justify-center shadow-2xl">
                    <mat-icon class="!w-24 !h-24 !text-[96px] text-[#F5C518]/80">person</mat-icon>
                  </div>

                  <!-- Overlay Badges on Portrait -->
                  <div class="relative z-10 space-y-2">
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071a38]/85 border border-[#F5C518]/30 backdrop-blur-md text-[11px] font-bold text-[#F5C518]">
                      <span>STAGE NAME: MC-JEY</span>
                      <span>·</span>
                      <span>AGE: 40</span>
                    </div>

                    <h3 class="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                      Jayakumar Chandrasekaran
                    </h3>
                    
                    <p class="text-xs text-slate-300 font-medium">
                      Founder & CEO · Music Video Director & Producer
                    </p>

                    <div class="text-[11px] text-slate-400 font-mono">
                      Tenure: 2020 – 2025 (Present) · Melaka, MY
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          <!-- Right Column: Founder Profile, Expertise & Bio -->
          <div class="lg:col-span-7 space-y-6">
            
            <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
              <mat-icon class="!w-4 !h-4 !text-[16px]">military_tech</mat-icon>
              <span>Leadership & Creative Direction</span>
            </div>

            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              A Visionary Creative <span class="text-gradient-gold">Professional & Director</span>
            </h2>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {{ founder.bio }}
            </p>

            <!-- Core Expertise Chips -->
            <div>
              <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Core Expertise</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                @for (exp of founder.expertise; track exp) {
                  <div class="flex items-center gap-2.5 p-3 rounded-xl bg-[#0a1e3f] border border-[#F5C518]/15 text-xs text-slate-200">
                    <mat-icon class="!w-4 !h-4 !text-[18px] text-[#F5C518] shrink-0">check_circle</mat-icon>
                    <span class="font-semibold">{{ exp }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- Key Achievements List -->
            <div>
              <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Key Milestones & Achievements</h4>
              <div class="space-y-2.5">
                @for (ach of founder.achievements; track ach) {
                  <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <mat-icon class="!w-4 !h-4 !text-[18px] text-[#F5C518] shrink-0 mt-0.5">star</mat-icon>
                    <span>{{ ach }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- Direct Contact Note -->
            <div class="p-4 rounded-xl bg-[#0E2F5F]/40 border border-white/10 flex items-center justify-between gap-4">
              <div class="text-xs text-slate-300">
                <span class="font-bold text-white block">Work Directly with the Director</span>
                Direct consultation for high-tier music video directing and large-scale event management.
              </div>
              <a 
                href="#contact" 
                class="px-4 py-2 rounded-lg bg-[#F5C518] hover:bg-[#FFB033] text-[#071a38] text-xs font-bold shrink-0 transition-colors">
                Initiate Project
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class Founder {
  readonly founder = COMPANY_INFO.founder;
}
