import { Component, ChangeDetectionStrategy, input, output, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ServiceItem } from '../../models/company.model';

@Component({
  selector: 'app-service-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    @if (service(); as item) {
      <div 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
        role="dialog"
        aria-modal="true"
        [attr.aria-labelledby]="'modal-title-' + item.id">
        
        <!-- Accessible backdrop click target -->
        <button 
          type="button" 
          class="absolute inset-0 w-full h-full bg-transparent border-0 cursor-default" 
          (click)="closeModal()" 
          aria-label="Close modal overlay">
        </button>

        <!-- Modal Card Dialog -->
        <div class="relative w-full max-w-2xl bg-[#0a1e3f] border border-[#F5C518]/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col corner-accent-tl">
          
          <!-- Modal Header -->
          <div class="p-6 sm:p-8 bg-[#0E2F5F]/80 border-b border-white/10 flex items-start justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0F4C5C] to-[#043B3F] border border-[#F5C518]/40 flex items-center justify-center text-[#F5C518] shadow-lg">
                <mat-icon class="!w-7 !h-7 !text-[28px]">{{ item.icon }}</mat-icon>
              </div>
              <div>
                <span class="text-xs font-semibold uppercase tracking-wider text-[#F5C518]">
                  {{ item.category }} Capability
                </span>
                <h3 [id]="'modal-title-' + item.id" class="font-display text-2xl sm:text-3xl font-bold text-white">
                  {{ item.title }}
                </h3>
              </div>
            </div>

            <!-- Close Button -->
            <button 
              type="button"
              (click)="closeModal()"
              class="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Close service modal">
              <mat-icon class="!w-5 !h-5 !text-[20px]">close</mat-icon>
            </button>
          </div>

          <!-- Modal Body Content -->
          <div class="p-6 sm:p-8 space-y-6 overflow-y-auto">
            
            <!-- Tagline -->
            <div class="p-4 rounded-xl bg-[#071a38]/60 border border-[#F5C518]/20 text-sm sm:text-base text-slate-200 italic">
              "{{ item.tagline }}"
            </div>

            <!-- Description -->
            <div>
              <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Service Overview</h4>
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                {{ item.description }}
              </p>
            </div>

            <!-- Deliverables -->
            <div>
              <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Key Deliverables & Specifications</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                @for (d of item.deliverables; track d) {
                  <div class="flex items-center gap-2.5 p-3 rounded-lg bg-[#071a38]/40 border border-white/5 text-xs text-slate-200">
                    <mat-icon class="!w-4 !h-4 !text-[18px] text-[#F5C518] shrink-0">check_circle</mat-icon>
                    <span>{{ d }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- Ideal For -->
            <div class="p-4 rounded-xl bg-[#0F4C5C]/20 border border-[#0F4C5C]/40 text-xs text-slate-300">
              <span class="font-bold text-[#F5C518] block mb-1 uppercase tracking-wider text-[11px]">Best Suited For</span>
              {{ item.idealFor }}
            </div>

          </div>

          <!-- Modal Actions Footer -->
          <div class="p-6 bg-[#071a38]/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button 
              type="button"
              (click)="closeModal()"
              class="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
              Close Details
            </button>

            <button 
              type="button"
              (click)="bookService(item.title)"
              class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F5C518] to-[#FFB033] text-[#071a38] text-xs font-bold tracking-wide shadow-lg shadow-[#F5C518]/25 hover:shadow-[#F5C518]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <mat-icon class="!w-4 !h-4 !text-[18px]">calendar_month</mat-icon>
              <span>Book {{ item.title }}</span>
            </button>
          </div>

        </div>
      </div>
    }
  `
})
export class ServiceModal {
  readonly service = input<ServiceItem | null>(null);
  readonly closeModalRequest = output<void>();
  readonly requestBooking = output<string>();

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.service()) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.closeModalRequest.emit();
  }

  bookService(title: string): void {
    this.requestBooking.emit(title);
    this.closeModal();
  }
}
