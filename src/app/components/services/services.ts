import { Component, ChangeDetectionStrategy, signal, computed, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SERVICES_DATA } from '../../data/company-data';
import { ServiceItem, ServiceCategory } from '../../models/company.model';
import { filterServicesByCategory } from '../../utils/data-helpers';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="services" class="relative py-28 bg-[#071a38] overflow-hidden">
      
      <!-- Ambient Lighting in Background -->
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-[#0F4C5C]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-10 left-10 w-96 h-96 bg-[#F5C518]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
              <mat-icon class="!w-4 !h-4 !text-[16px]">stars</mat-icon>
              <span>14 Specialized Capabilities</span>
            </div>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Our End-to-End <span class="text-gradient-gold">Services</span>
            </h2>
            <p class="text-sm sm:text-base text-slate-300 max-w-xl">
              From intimate VIP galas and grand Malaysian weddings to chart-topping music videos and commercial brand activations.
            </p>
          </div>

          <!-- Category Filter Segmented Tabs -->
          <div class="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#0a1e3f] border border-white/10 self-start md:self-auto overflow-x-auto max-w-full" role="tablist" aria-label="Filter Services">
            @for (cat of categories; track cat) {
              <button 
                type="button"
                role="tab"
                [attr.aria-selected]="activeCategory() === cat"
                (click)="setCategory(cat)"
                class="px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer"
                [class.bg-gradient-to-r]="activeCategory() === cat"
                [class.from-[#F5C518]]="activeCategory() === cat"
                [class.to-[#FFB033]]="activeCategory() === cat"
                [class.text-[#071a38]]="activeCategory() === cat"
                [class.shadow-md]="activeCategory() === cat"
                [class.text-slate-300]="activeCategory() !== cat"
                [class.hover:text-white]="activeCategory() !== cat"
                [class.hover:bg-white/5]="activeCategory() !== cat">
                {{ cat }}
                @if (cat === 'All') {
                  <span class="text-[10px] ml-1 opacity-70">({{ allServices.length }})</span>
                }
              </button>
            }
          </div>
        </div>

        <!-- 14 Glassmorphism Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of filteredServices(); track service.id; let idx = $index) {
            <button 
              type="button"
              class="group relative rounded-2xl p-6 sm:p-7 glass-panel glass-panel-hover flex flex-col justify-between cursor-pointer border border-[#F5C518]/15 hover:border-[#F5C518]/45 transition-all duration-300 text-left w-full"
              (click)="onSelectService(service)"
              [attr.aria-label]="'View details for ' + service.title">
              
              <!-- Subtle Card Background Accent -->
              <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F5C518]/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:from-[#F5C518]/25 transition-all"></div>

              <div>
                <!-- Top Row: Icon + Category Badge -->
                <div class="flex items-center justify-between mb-5">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F4C5C] to-[#0E2F5F] flex items-center justify-center border border-[#F5C518]/30 group-hover:border-[#F5C518] shadow-md shadow-[#0F4C5C]/30 text-[#F5C518] group-hover:scale-110 transition-transform">
                    <mat-icon class="!w-6 !h-6 !text-[24px]">{{ service.icon }}</mat-icon>
                  </div>

                  <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
                    {{ service.category }}
                  </span>
                </div>

                <!-- Title & Tagline -->
                <h3 class="font-display text-xl font-bold text-white group-hover:text-[#F5C518] transition-colors mb-2">
                  {{ service.title }}
                </h3>

                <p class="text-xs sm:text-sm text-slate-300 italic mb-4 leading-relaxed font-light">
                  "{{ service.tagline }}"
                </p>

                <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-5">
                  {{ service.description }}
                </p>
              </div>

              <!-- Deliverable Snippets & Click to Expand Action -->
              <div class="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <span class="text-[11px] text-slate-400">
                  {{ service.deliverables.length }} Core Deliverables
                </span>
                
                <span class="inline-flex items-center gap-1 text-xs font-semibold text-[#F5C518] group-hover:translate-x-1 transition-transform">
                  <span>Explore Specs</span>
                  <mat-icon class="!w-4 !h-4 !text-[16px]">arrow_forward</mat-icon>
                </span>
              </div>

            </button>
          }
        </div>

      </div>
    </section>
  `
})
export class Services {
  readonly allServices = SERVICES_DATA;
  readonly categories: ServiceCategory[] = ['All', 'Events', 'Production', 'Digital'];
  readonly activeCategory = signal<ServiceCategory>('All');

  readonly selectService = output<ServiceItem>();

  readonly filteredServices = computed(() => {
    return filterServicesByCategory(this.allServices, this.activeCategory());
  });

  setCategory(category: ServiceCategory): void {
    this.activeCategory.set(category);
  }

  onSelectService(service: ServiceItem): void {
    this.selectService.emit(service);
  }
}
