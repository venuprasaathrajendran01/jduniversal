import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PROCESS_STEPS } from '../../data/company-data';

@Component({
  selector: 'app-process',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section class="py-28 bg-[#051429] overflow-hidden border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
            <mat-icon class="!w-4 !h-4 !text-[16px]">linear_scale</mat-icon>
            <span>The Proven Formula</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our 4-Step <span class="text-gradient-gold">Production Pipeline</span>
          </h2>
          <p class="text-sm sm:text-base text-slate-300">
            How we translate your conceptual vision into world-class entertainment and flawless live experiences.
          </p>
        </div>

        <!-- 4 Step Grid with Connecting Gold Accent Trail -->
        <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          @for (item of steps; track item.step; let idx = $index) {
            <div 
              class="relative rounded-2xl bg-[#071a38] border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-default"
              [class.border-[#F5C518]/50]="activeStep() === idx"
              [class.border-white/10]="activeStep() !== idx"
              (mouseenter)="setActiveStep(idx)">
              
              <div>
                <!-- Step Number Badge -->
                <div class="flex items-center justify-between mb-6">
                  <span class="font-display text-3xl font-black text-[#F5C518] tracking-tight">
                    {{ item.step }}
                  </span>
                  
                  <div class="w-8 h-8 rounded-full bg-[#0E2F5F] border border-[#F5C518]/20 flex items-center justify-center text-[#F5C518]">
                    <mat-icon class="!w-4 !h-4 !text-[16px]">
                      @switch (idx) {
                        @case (0) { search }
                        @case (1) { architecture }
                        @case (2) { videocam }
                        @case (3) { verified }
                      }
                    </mat-icon>
                  </div>
                </div>

                <h3 class="font-display text-lg font-bold text-white mb-2">
                  {{ item.title }}
                </h3>

                <p class="text-xs text-slate-300 leading-relaxed mb-4">
                  {{ item.summary }}
                </p>
              </div>

              <div class="pt-4 border-t border-white/5 text-[11px] text-slate-400 font-medium">
                {{ item.details }}
              </div>

            </div>
          }

        </div>

      </div>
    </section>
  `
})
export class Process {
  readonly steps = PROCESS_STEPS;
  readonly activeStep = signal(0);

  setActiveStep(index: number): void {
    this.activeStep.set(index);
  }
}
