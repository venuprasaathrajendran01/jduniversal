import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GALLERY_ITEMS } from '../../data/company-data';
import { GalleryItem, GalleryCategory } from '../../models/company.model';
import { filterGalleryByCategory } from '../../utils/data-helpers';

@Component({
  selector: 'app-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="events" class="relative py-28 bg-[#071a38] overflow-hidden border-t border-white/5">
      
      <!-- Subtle Ambient Lighting -->
      <div class="absolute top-1/3 left-0 w-80 h-80 bg-[#0F4C5C]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
              <mat-icon class="!w-4 !h-4 !text-[16px]">collections</mat-icon>
              <span>Visual Portfolio</span>
            </div>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Events, Weddings & <span class="text-gradient-gold">Shoots</span>
            </h2>
            <p class="text-sm sm:text-base text-slate-300 max-w-xl">
              Capturing moments of grandeur. Explore our bespoke stage backdrops, luxury wedding setups, editorial modeling portfolios, and commercial product shoots.
            </p>
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#0a1e3f] border border-white/10 self-start md:self-auto overflow-x-auto max-w-full" role="tablist" aria-label="Filter Gallery">
            @for (cat of categories; track cat) {
              <button 
                type="button"
                role="tab"
                [attr.aria-selected]="activeCategory() === cat"
                (click)="setCategory(cat)"
                class="px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer"
                [class.bg-[#F5C518]]="activeCategory() === cat"
                [class.text-[#071a38]]="activeCategory() === cat"
                [class.text-slate-300]="activeCategory() !== cat"
                [class.hover:text-white]="activeCategory() !== cat"
                [class.hover:bg-white/5]="activeCategory() !== cat">
                {{ cat }}
              </button>
            }
          </div>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (item of filteredGallery(); track item.id) {
            <div 
              class="group relative rounded-2xl bg-[#0a1e3f] border border-white/10 hover:border-[#F5C518]/50 overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between">
              
              <!-- If Comparison Item: Interactive Slider Container -->
              @if (item.isComparison) {
                <div class="relative h-64 sm:h-72 w-full overflow-hidden bg-black select-none">
                  <!-- Finished Image Layer -->
                  <img 
                    [src]="item.finishedImageUrl" 
                    [alt]="item.title + ' commercial finished result'"
                    class="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    referrerpolicy="no-referrer" />

                  <!-- Before / Raw Layer clipped by slider -->
                  <div 
                    class="absolute inset-0 overflow-hidden border-r-2 border-[#F5C518]"
                    [style.width.%]="comparisonSliderPos()">
                    <img 
                      [src]="item.rawImageUrl" 
                      [alt]="item.title + ' raw on-set capture'"
                      class="absolute inset-0 w-full h-full object-cover max-w-none"
                      style="width: 100%;"
                      loading="lazy"
                      referrerpolicy="no-referrer" />
                    <span class="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 text-[10px] uppercase font-bold text-slate-300">
                      Raw Capture
                    </span>
                  </div>

                  <span class="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#F5C518]/90 text-[10px] uppercase font-bold text-[#071a38]">
                    Commercial Grade
                  </span>

                  <!-- Slider Range Input -->
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    [value]="comparisonSliderPos()"
                    (input)="onSliderChange($event)"
                    class="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                    aria-label="Drag to compare before and after" />

                  <div 
                    class="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/70 text-[10px] text-white backdrop-blur-md pointer-events-none flex items-center gap-1.5">
                    <mat-icon class="!w-3 !h-3 !text-[12px] text-[#F5C518]">swap_horiz</mat-icon>
                    <span>Drag Slider to Reveal Grade</span>
                  </div>
                </div>
              } @else {
                <!-- Standard Image Slot with CSS Fallback and Lightbox Trigger -->
                <button 
                  type="button"
                  class="relative h-64 sm:h-72 w-full overflow-hidden bg-[#071a38] cursor-pointer text-left p-0 border-0 block"
                  (click)="openLightbox(item)"
                  [attr.aria-label]="'Enlarge ' + item.title">
                  <img 
                    [src]="item.imageUrl" 
                    [alt]="item.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerpolicy="no-referrer" />
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  <div class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <mat-icon class="!w-4 !h-4 !text-[18px]">zoom_in</mat-icon>
                  </div>

                  <span class="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#071a38]/80 text-[#F5C518] border border-[#F5C518]/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {{ item.category }}
                  </span>
                </button>
              }

              <!-- Caption Details -->
              <div class="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 class="font-display text-lg font-bold text-white group-hover:text-[#F5C518] transition-colors mb-1">
                    {{ item.title }}
                  </h3>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    {{ item.caption }}
                  </p>
                </div>

                <div class="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Melaka & Regional Deployments</span>
                  <span class="text-[#F5C518] font-semibold">JD Universal Quality</span>
                </div>
              </div>

            </div>
          }
        </div>

      </div>

      <!-- Lightbox Modal -->
      @if (activeLightboxItem(); as active) {
        <div 
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in"
          role="dialog"
          aria-modal="true">
          
          <!-- Accessible backdrop click target -->
          <button 
            type="button" 
            class="absolute inset-0 w-full h-full bg-transparent border-0 cursor-default" 
            (click)="closeLightbox()" 
            aria-label="Close lightbox overlay">
          </button>

          <div class="relative z-10 max-w-4xl w-full bg-[#071a38] border border-[#F5C518]/40 rounded-2xl overflow-hidden shadow-2xl">
            <button 
              type="button"
              (click)="closeLightbox()"
              class="absolute top-4 right-4 z-20 p-2 rounded-xl text-white bg-black/60 border border-white/20 hover:bg-black/90 transition-colors"
              aria-label="Close image lightbox">
              <mat-icon class="!w-5 !h-5 !text-[20px]">close</mat-icon>
            </button>

            <div class="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img 
                [src]="active.imageUrl" 
                [alt]="active.title"
                class="max-h-[70vh] w-auto object-contain"
                referrerpolicy="no-referrer" />
            </div>

            <div class="p-6 bg-[#0a1e3f] flex items-center justify-between">
              <div>
                <span class="text-xs text-[#F5C518] font-bold uppercase tracking-wider">{{ active.category }}</span>
                <h3 class="font-display text-xl font-bold text-white">{{ active.title }}</h3>
                <p class="text-xs text-slate-300 mt-1">{{ active.caption }}</p>
              </div>

              <button 
                type="button"
                (click)="closeLightbox()"
                class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white">
                Back to Gallery
              </button>
            </div>
          </div>
        </div>
      }

    </section>
  `
})
export class Gallery {
  readonly allItems = GALLERY_ITEMS;
  readonly categories: GalleryCategory[] = [
    'All',
    'Weddings',
    'Stage & Backdrops',
    'Modeling Shoots',
    'Product Shoots',
    'Private Events'
  ];

  readonly activeCategory = signal<GalleryCategory>('All');
  readonly comparisonSliderPos = signal<number>(50);
  readonly activeLightboxItem = signal<GalleryItem | null>(null);

  readonly filteredGallery = computed(() => {
    return filterGalleryByCategory(this.allItems, this.activeCategory());
  });

  setCategory(category: GalleryCategory): void {
    this.activeCategory.set(category);
  }

  onSliderChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.comparisonSliderPos.set(Number(input.value));
  }

  openLightbox(item: GalleryItem): void {
    this.activeLightboxItem.set(item);
  }

  closeLightbox(): void {
    this.activeLightboxItem.set(null);
  }
}
