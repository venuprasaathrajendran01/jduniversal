import { Component, ChangeDetectionStrategy, input, output, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectItem } from '../../models/company.model';

@Component({
  selector: 'app-project-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    @if (project(); as item) {
      <div 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
        role="dialog"
        aria-modal="true"
        [attr.aria-labelledby]="'project-title-' + item.id">
        
        <!-- Accessible backdrop click target -->
        <button 
          type="button" 
          class="absolute inset-0 w-full h-full bg-transparent border-0 cursor-default" 
          (click)="closeModal()" 
          aria-label="Close modal overlay">
        </button>

        <!-- Dialog Container -->
        <div class="relative w-full max-w-3xl bg-[#0a1e3f] border border-[#F5C518]/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col corner-accent-tl">
          
          <!-- Poster / Video Banner Area -->
          <div class="relative h-64 sm:h-80 w-full bg-[#051429] flex items-center justify-center overflow-hidden border-b border-white/10">
            
            <!-- Atmospheric Gradient & Title Art Backdrop -->
            <div 
              class="absolute inset-0 opacity-40 bg-cover bg-center"
              [style.background-color]="item.accentColor"
              style="background-image: radial-gradient(circle at center, rgba(245,197,24,0.3) 0%, rgba(7,26,56,0.95) 100%);">
            </div>

            <!-- Stylized Poster Preview Card in Center -->
            <div class="relative z-10 flex flex-col items-center text-center p-6 max-w-lg">
              
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs text-white mb-3 backdrop-blur-md">
                <span class="text-[#F5C518] font-bold">{{ item.year }}</span>
                <span>·</span>
                <span>{{ item.type }}</span>
                @if (item.international) {
                  <span>·</span>
                  <span class="text-[#FFB033] font-semibold">International Collaboration</span>
                }
              </div>

              <h2 [id]="'project-title-' + item.id" class="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-md">
                {{ item.title }}
              </h2>

              <p class="text-xs sm:text-sm text-slate-300 line-clamp-2">
                {{ item.castAndCrew }}
              </p>

              <!-- Central Play Button Trigger to YouTube -->
              <a 
                [href]="item.youtubeUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="mt-4 px-6 py-2.5 rounded-full bg-[#F5C518] hover:bg-[#FFB033] text-[#071a38] text-xs font-bold tracking-wide flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
                <mat-icon class="!w-4 !h-4 !text-[18px]">play_arrow</mat-icon>
                <span>Watch on Official YouTube</span>
              </a>

            </div>

            <!-- Close Button in Top Corner -->
            <button 
              type="button"
              (click)="closeModal()"
              class="absolute top-4 right-4 z-20 p-2 rounded-xl text-slate-300 hover:text-white bg-black/50 hover:bg-black/70 border border-white/10 transition-colors"
              aria-label="Close project modal">
              <mat-icon class="!w-5 !h-5 !text-[20px]">close</mat-icon>
            </button>

          </div>

          <!-- Project Metadata & Production Details Body -->
          <div class="p-6 sm:p-8 space-y-6 overflow-y-auto">
            
            <!-- Synopsis / Story -->
            <div>
              <h4 class="text-xs uppercase tracking-wider font-bold text-[#F5C518] mb-2">Project Synopsis</h4>
              <p class="text-sm sm:text-base text-slate-200 leading-relaxed">
                {{ item.summary }}
              </p>
            </div>

            <!-- Cast, Directors & Credits Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-[#071a38]/60 border border-white/5">
              <div>
                <span class="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">Director & Role</span>
                <span class="text-sm font-bold text-white">{{ item.director || 'MC Jey' }} · {{ item.role }}</span>
              </div>

              <div>
                <span class="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">Music Director / Composer</span>
                <span class="text-sm font-bold text-[#F5C518]">{{ item.musicDirector || 'JD Universal Ensembles' }}</span>
              </div>

              <div class="sm:col-span-2 pt-2 border-t border-white/10">
                <span class="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1.5">Featured Artists & Talents</span>
                <div class="flex flex-wrap gap-1.5">
                  @for (artist of item.featuredArtists; track artist) {
                    <span class="text-xs px-2.5 py-1 rounded-md bg-[#0E2F5F] text-slate-200 border border-white/10 font-medium">
                      {{ artist }}
                    </span>
                  }
                </div>
              </div>

              <div class="sm:col-span-2 pt-2 border-t border-white/10">
                <span class="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">Complete Production Credits</span>
                <p class="text-xs text-slate-300 font-mono">
                  {{ item.castAndCrew }}
                </p>
              </div>
            </div>

          </div>

          <!-- Footer Actions -->
          <div class="p-5 sm:p-6 bg-[#071a38]/90 border-t border-white/10 flex items-center justify-between gap-4">
            <span class="text-xs text-slate-400 hidden sm:inline-block">
              JD Universal Official Catalog · Melaka
            </span>

            <div class="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button 
                type="button"
                (click)="closeModal()"
                class="px-4 py-2 rounded-xl border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                Close
              </button>

              <a 
                [href]="item.youtubeUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-5 py-2 rounded-xl bg-gradient-to-r from-[#F5C518] to-[#FFB033] text-[#071a38] text-xs font-bold tracking-wide flex items-center gap-2 shadow-lg shadow-[#F5C518]/20 hover:scale-[1.02] transition-all">
                <mat-icon class="!w-4 !h-4 !text-[16px]">open_in_new</mat-icon>
                <span>Channel Link</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    }
  `
})
export class ProjectModal {
  readonly project = input<ProjectItem | null>(null);
  readonly closeModalRequest = output<void>();

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.project()) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.closeModalRequest.emit();
  }
}
