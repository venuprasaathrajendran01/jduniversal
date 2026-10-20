import { Component, ChangeDetectionStrategy, signal, computed, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PROJECTS_DATA } from '../../data/company-data';
import { ProjectItem } from '../../models/company.model';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="projects" class="relative py-28 bg-[#051429] overflow-hidden border-t border-white/5">
      
      <!-- Ambient Lighting -->
      <div class="absolute -top-32 left-1/3 w-96 h-96 bg-[#F5C518]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-96 h-96 bg-[#0F4C5C]/25 rounded-full blur-[130px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
              <mat-icon class="!w-4 !h-4 !text-[16px]">movie</mat-icon>
              <span>The Cinematic Catalog</span>
            </div>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Featured <span class="text-gradient-gold">Projects</span>
            </h2>
            <p class="text-sm sm:text-base text-slate-300 max-w-xl">
              From the blockbuster Navitan saga to international milestone Gajakesari and festive anthems. Explore our complete music and lyrical video catalog.
            </p>
          </div>

          <!-- YouTube Channel CTA -->
          <a 
            href="https://youtube.com/@jduniversal9602" 
            target="_blank" 
            rel="noopener noreferrer"
            class="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-200 text-xs font-semibold hover:text-white transition-all">
            <mat-icon class="!w-4 !h-4 !text-[18px] text-red-500">smart_display</mat-icon>
            <span>Subscribe &#64;jduniversal9602</span>
          </a>
        </div>

        <!-- Filter Controls: Timeline (Year) + Category Type -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-[#071a38] border border-white/10 mb-10">
          
          <!-- Year Timeline Tabs -->
          <div class="flex items-center gap-1 overflow-x-auto max-w-full py-1">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0">Year:</span>
            @for (year of years; track year) {
              <button 
                type="button"
                (click)="setYear(year)"
                class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                [class.bg-[#F5C518]]="activeYear() === year"
                [class.text-[#071a38]]="activeYear() === year"
                [class.text-slate-300]="activeYear() !== year"
                [class.hover:text-white]="activeYear() !== year"
                [class.hover:bg-white/5]="activeYear() !== year">
                {{ year }}
              </button>
            }
          </div>

          <!-- Type Filter -->
          <div class="flex items-center gap-1 py-1">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0">Type:</span>
            @for (type of types; track type) {
              <button 
                type="button"
                (click)="setType(type)"
                class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                [class.bg-[#0F4C5C]]="activeType() === type"
                [class.text-white]="activeType() === type"
                [class.border]="activeType() === type"
                [class.border-[#F5C518]/30]="activeType() === type"
                [class.text-slate-400]="activeType() !== type"
                [class.hover:text-white]="activeType() !== type">
                {{ type }}
              </button>
            }
          </div>

        </div>

        <!-- Projects Grid / Poster Cards (10 projects in order) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          @for (p of filteredProjects(); track p.id) {
            <button 
              type="button"
              class="group relative rounded-2xl bg-[#071a38] border border-white/10 hover:border-[#F5C518]/50 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer text-left w-full"
              (click)="onSelectProject(p)"
              [attr.aria-label]="'View project details for ' + p.title">
              
              <!-- Poster Visual Header with Play Overlay -->
              <div class="relative h-56 sm:h-64 w-full bg-[#0a1e3f] overflow-hidden flex items-center justify-center">
                
                <!-- Stylized Colored Background Canvas matching project accent -->
                <div 
                  class="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                  [style.background]="'radial-gradient(circle at top, ' + p.accentColor + '40 0%, #071a38 100%)'">
                </div>

                <!-- Subtle Geometric Watermark Shape -->
                <div class="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border border-white/5 pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

                <!-- Center Title Badge Art -->
                <div class="relative z-10 p-6 text-center max-w-xs">
                  <div class="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#0F4C5C] to-[#043B3F] border border-[#F5C518]/40 flex items-center justify-center text-[#F5C518] shadow-lg mb-3 group-hover:scale-110 group-hover:bg-[#F5C518] group-hover:text-[#071a38] transition-all duration-300">
                    <mat-icon class="!w-6 !h-6 !text-[24px]">play_arrow</mat-icon>
                  </div>
                  <h3 class="font-display text-2xl font-black text-white tracking-tight group-hover:text-[#F5C518] transition-colors">
                    {{ p.title }}
                  </h3>
                  <p class="text-xs text-slate-300 mt-1 line-clamp-1 font-medium">
                    {{ p.musicDirector || 'JD Music' }}
                  </p>
                </div>

                <!-- Top Floating Badges: Year & Type -->
                <div class="absolute top-3 left-3 z-20 flex items-center gap-1.5">
                  <span class="px-2.5 py-1 rounded-md bg-[#071a38]/80 backdrop-blur-md border border-[#F5C518]/30 text-[#F5C518] text-[11px] font-bold">
                    {{ p.year }}
                  </span>
                  <span class="px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-slate-200 text-[10px] font-semibold">
                    {{ p.type }}
                  </span>
                </div>

                @if (p.international) {
                  <div class="absolute top-3 right-3 z-20">
                    <span class="px-2 py-0.5 rounded bg-[#FFB033]/20 border border-[#FFB033]/40 text-[#FFB033] text-[10px] font-bold uppercase tracking-wider">
                      International
                    </span>
                  </div>
                }

              </div>

              <!-- Content Body -->
              <div class="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    {{ p.role }}
                  </div>
                  
                  <p class="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {{ p.summary }}
                  </p>
                </div>

                <!-- Bottom Talent Chips & Action -->
                <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <div class="text-[11px] text-slate-400 truncate max-w-[180px]">
                    Feat: {{ p.featuredArtists.join(', ') }}
                  </div>

                  <span class="inline-flex items-center gap-1 text-xs font-bold text-[#F5C518] group-hover:translate-x-1 transition-transform shrink-0">
                    <span>Details</span>
                    <mat-icon class="!w-4 !h-4 !text-[16px]">chevron_right</mat-icon>
                  </span>
                </div>
              </div>

            </button>
          }
        </div>

        @if (filteredProjects().length === 0) {
          <div class="text-center py-16 bg-[#071a38] rounded-2xl border border-white/5 p-8">
            <mat-icon class="!w-10 !h-10 !text-[40px] text-slate-500 mb-2">video_library</mat-icon>
            <h4 class="text-base font-bold text-white">No projects found for this selection</h4>
            <p class="text-xs text-slate-400 mt-1">Try selecting "All" or a different year filter.</p>
            <button 
              type="button" 
              (click)="resetFilters()"
              class="mt-4 px-4 py-2 rounded-lg bg-[#F5C518] text-[#071a38] text-xs font-bold">
              Reset Filters
            </button>
          </div>
        }

      </div>
    </section>
  `
})
export class Projects {
  readonly allProjects = PROJECTS_DATA;
  readonly years: (number | 'All')[] = ['All', 2022, 2023, 2024, 2025, 2026];
  readonly types = ['All', 'Music Video', 'Lyrical Video'];

  readonly activeYear = signal<number | 'All'>('All');
  readonly activeType = signal<string>('All');

  readonly selectProject = output<ProjectItem>();

  readonly filteredProjects = computed(() => {
    let list = this.allProjects;
    const year = this.activeYear();
    const type = this.activeType();

    if (year !== 'All') {
      list = list.filter(p => p.year === year);
    }
    if (type !== 'All') {
      list = list.filter(p => p.type === type);
    }
    return list;
  });

  setYear(year: number | 'All'): void {
    this.activeYear.set(year);
  }

  setType(type: string): void {
    this.activeType.set(type);
  }

  resetFilters(): void {
    this.activeYear.set('All');
    this.activeType.set('All');
  }

  onSelectProject(project: ProjectItem): void {
    this.selectProject.emit(project);
  }
}
