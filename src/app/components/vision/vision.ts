import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vision',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section class="relative py-24 bg-[#051429] overflow-hidden border-y border-[#F5C518]/20">
      
      <!-- Ambient Stage Beam Center Effect -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#F5C518]/15 via-[#FFB033]/20 to-[#0F4C5C]/20 rounded-full blur-[100px]"></div>
      </div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <!-- Vision Eyebrow -->
        <div class="inline-flex items-center gap-2 mb-6">
          <mat-icon class="!w-5 !h-5 !text-[20px] text-[#F5C518]">flare</mat-icon>
          <span class="text-xs uppercase tracking-widest font-bold text-[#F5C518]">Our Driving Vision</span>
          <mat-icon class="!w-5 !h-5 !text-[20px] text-[#F5C518]">flare</mat-icon>
        </div>

        <!-- Vision Statement Quote -->
        <blockquote class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto">
          &ldquo;To be the region's <span class="text-gradient-gold">preferred</span> event management, music and video production agency, combining strategy and efficiency to bring every project from a <span class="text-gradient-gold">Vision</span> to a <span class="text-gradient-gold">Reality</span>.&rdquo;
        </blockquote>

        <div class="mt-8 flex items-center justify-center gap-3">
          <div class="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#F5C518]"></div>
          <span class="text-xs tracking-widest uppercase text-slate-400 font-semibold">JD Universal SDN BHD Manifesto</span>
          <div class="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#F5C518]"></div>
        </div>

      </div>
    </section>
  `
})
export class Vision {}
