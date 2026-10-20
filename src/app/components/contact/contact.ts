import { Component, ChangeDetectionStrategy, signal, input, effect, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/company-data';
import { validateInquiryForm, formatWhatsAppUrl } from '../../utils/data-helpers';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="relative py-28 bg-[#071a38] overflow-hidden border-t border-white/5">
      
      <!-- Ambient Lighting -->
      <div class="absolute -right-32 top-1/3 w-96 h-96 bg-[#F5C518]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -left-32 bottom-1/4 w-96 h-96 bg-[#0F4C5C]/25 rounded-full blur-[130px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
            <mat-icon class="!w-4 !h-4 !text-[16px]">connect_without_contact</mat-icon>
            <span>Start Your Journey</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let's Bring Your <span class="text-gradient-gold">Vision to Reality</span>
          </h2>
          <p class="text-sm sm:text-base text-slate-300">
            Tell us about your upcoming event, music video project, or commercial production. Our directors and event planners in Melaka respond within 24 hours.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Left Column: Interactive Booking Inquiry Form -->
          <div class="lg:col-span-7 rounded-2xl bg-[#0a1e3f] border border-[#F5C518]/25 p-6 sm:p-8 shadow-2xl corner-accent-tl">
            
            <h3 class="font-display text-2xl font-bold text-white mb-2">
              Book a Consultation
            </h3>
            <p class="text-xs text-slate-400 mb-6">
              Complete the form below or message our director directly on WhatsApp.
            </p>

            @if (submitted()) {
              <!-- Submission Success State -->
              <div class="p-6 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-center space-y-4 animate-fade-in">
                <div class="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <mat-icon class="!w-8 !h-8 !text-[32px]">check_circle</mat-icon>
                </div>
                <h4 class="font-display text-xl font-bold text-white">
                  Inquiry Received Successfully!
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong class="text-emerald-300">{{ lastSubmissionName() }}</strong>. Jayakumar Chandrasekaran and the JD Universal production team have received your request and will connect with you promptly.
                </p>
                <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a 
                    [href]="whatsAppUrl()"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide flex items-center gap-2 shadow-lg transition-all">
                    <mat-icon class="!w-4 !h-4 !text-[16px]">chat</mat-icon>
                    <span>Instant WhatsApp Follow-up</span>
                  </a>
                  
                  <button 
                    type="button"
                    (click)="resetForm()"
                    class="px-4 py-2.5 rounded-xl border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                    Send Another Request
                  </button>
                </div>
              </div>
            } @else {
              <!-- Active Reactive Form -->
              <form [formGroup]="inquiryForm" (ngSubmit)="onSubmit()" class="space-y-4">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Name Field -->
                  <div>
                    <label for="fullName" class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input 
                      id="fullName"
                      type="text" 
                      formControlName="fullName"
                      placeholder="e.g. Praveen Raj"
                      class="w-full px-4 py-2.5 rounded-xl bg-[#071a38] border text-white text-xs placeholder:text-slate-500 outline-none transition-all"
                      [class.border-red-500]="isFieldInvalid('fullName')"
                      [class.border-white/10]="!isFieldInvalid('fullName')"
                      [class.focus:border-[#F5C518]]="!isFieldInvalid('fullName')" />
                    @if (isFieldInvalid('fullName')) {
                      <span class="text-[11px] text-red-400 mt-1 block">Name is required (min 2 characters).</span>
                    }
                  </div>

                  <!-- Email Field -->
                  <div>
                    <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      formControlName="email"
                      placeholder="e.g. name@domain.com"
                      class="w-full px-4 py-2.5 rounded-xl bg-[#071a38] border text-white text-xs placeholder:text-slate-500 outline-none transition-all"
                      [class.border-red-500]="isFieldInvalid('email')"
                      [class.border-white/10]="!isFieldInvalid('email')"
                      [class.focus:border-[#F5C518]]="!isFieldInvalid('email')" />
                    @if (isFieldInvalid('email')) {
                      <span class="text-[11px] text-red-400 mt-1 block">Valid email address is required.</span>
                    }
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Phone Field -->
                  <div>
                    <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input 
                      id="phone"
                      type="tel" 
                      formControlName="phone"
                      placeholder="e.g. 017-6482460"
                      class="w-full px-4 py-2.5 rounded-xl bg-[#071a38] border text-white text-xs placeholder:text-slate-500 outline-none transition-all"
                      [class.border-red-500]="isFieldInvalid('phone')"
                      [class.border-white/10]="!isFieldInvalid('phone')"
                      [class.focus:border-[#F5C518]]="!isFieldInvalid('phone')" />
                    @if (isFieldInvalid('phone')) {
                      <span class="text-[11px] text-red-400 mt-1 block">Valid phone number required.</span>
                    }
                  </div>

                  <!-- Service Dropdown -->
                  <div>
                    <label for="serviceCategory" class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service Requirement *
                    </label>
                    <select 
                      id="serviceCategory"
                      formControlName="serviceCategory"
                      class="w-full px-4 py-2.5 rounded-xl bg-[#071a38] border text-white text-xs outline-none transition-all cursor-pointer"
                      [class.border-red-500]="isFieldInvalid('serviceCategory')"
                      [class.border-white/10]="!isFieldInvalid('serviceCategory')"
                      [class.focus:border-[#F5C518]]="!isFieldInvalid('serviceCategory')">
                      <option value="" disabled class="bg-[#071a38]">Select a capability</option>
                      @for (srv of servicesList; track srv.id) {
                        <option [value]="srv.title" class="bg-[#071a38] text-white">{{ srv.title }} ({{ srv.category }})</option>
                      }
                      <option value="General Production Inquiry" class="bg-[#071a38] text-white">General Entertainment Inquiry</option>
                    </select>
                    @if (isFieldInvalid('serviceCategory')) {
                      <span class="text-[11px] text-red-400 mt-1 block">Please select a service.</span>
                    }
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Event Date -->
                  <div>
                    <label for="eventDate" class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Target Event / Shoot Date (Optional)
                    </label>
                    <input 
                      id="eventDate"
                      type="date" 
                      formControlName="eventDate"
                      class="w-full px-4 py-2.5 rounded-xl bg-[#071a38] border border-white/10 text-white text-xs outline-none focus:border-[#F5C518] transition-all" />
                  </div>

                  <!-- Budget Range -->
                  <div>
                    <label for="estimatedBudget" class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Estimated Budget Range (MYR)
                    </label>
                    <select 
                      id="estimatedBudget"
                      formControlName="estimatedBudget"
                      class="w-full px-4 py-2.5 rounded-xl bg-[#071a38] border border-white/10 text-white text-xs outline-none focus:border-[#F5C518] transition-all cursor-pointer">
                      <option value="RM 5,000 - RM 15,000" class="bg-[#071a38]">RM 5,000 – RM 15,000</option>
                      <option value="RM 15,000 - RM 35,000" class="bg-[#071a38]" selected>RM 15,000 – RM 35,000</option>
                      <option value="RM 35,000 - RM 75,000" class="bg-[#071a38]">RM 35,000 – RM 75,000</option>
                      <option value="RM 75,000+" class="bg-[#071a38]">RM 75,000+ (Grand / International)</option>
                    </select>
                  </div>
                </div>

                <!-- Message Field -->
                <div>
                  <label for="message" class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Scope & Vision Details *
                  </label>
                  <textarea 
                    id="message"
                    formControlName="message"
                    rows="4"
                    placeholder="Tell us about your event theme, music video concept, venue preferences, or expected deliverables..."
                    class="w-full px-4 py-2.5 rounded-xl bg-[#071a38] border text-white text-xs placeholder:text-slate-500 outline-none transition-all resize-none"
                    [class.border-red-500]="isFieldInvalid('message')"
                    [class.border-white/10]="!isFieldInvalid('message')"
                    [class.focus:border-[#F5C518]]="!isFieldInvalid('message')"></textarea>
                  @if (isFieldInvalid('message')) {
                    <span class="text-[11px] text-red-400 mt-1 block">Please enter at least 10 characters describing your project.</span>
                  }
                </div>

                <button 
                  type="submit"
                  class="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F5C518] to-[#FFB033] hover:from-[#FFB033] hover:to-[#F5C518] text-[#071a38] font-display font-bold text-sm tracking-wide shadow-xl shadow-[#F5C518]/25 hover:shadow-[#F5C518]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <mat-icon class="!w-4 !h-4 !text-[18px]">send</mat-icon>
                  <span>Transmit Inquiry to Directors</span>
                </button>

              </form>
            }

          </div>

          <!-- Right Column: Direct Contacts & Embedded Location Map -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Contact Card with Verified Info -->
            <div class="rounded-2xl bg-[#0a1e3f] border border-white/10 p-6 sm:p-7 space-y-5 shadow-xl">
              <h4 class="font-display text-xl font-bold text-white flex items-center gap-2">
                <mat-icon class="!w-5 !h-5 !text-[20px] text-[#F5C518]">storefront</mat-icon>
                <span>Melaka Headquarters</span>
              </h4>

              <div class="space-y-4 text-xs">
                <!-- Address -->
                <div class="flex items-start gap-3 text-slate-300">
                  <mat-icon class="!w-4 !h-4 !text-[18px] text-[#F5C518] shrink-0 mt-0.5">place</mat-icon>
                  <div>
                    <span class="font-bold text-white block">Physical Studio Address</span>
                    <span>{{ contact.address }}</span>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start gap-3 text-slate-300">
                  <mat-icon class="!w-4 !h-4 !text-[18px] text-[#F5C518] shrink-0 mt-0.5">call</mat-icon>
                  <div>
                    <span class="font-bold text-white block">Direct Telephone Hotline</span>
                    <a [href]="'tel:' + contact.phone" class="text-[#F5C518] hover:underline font-mono text-sm font-bold">
                      {{ contact.phone }}
                    </a>
                  </div>
                </div>

                <!-- YouTube -->
                <div class="flex items-start gap-3 text-slate-300">
                  <mat-icon class="!w-4 !h-4 !text-[18px] text-red-500 shrink-0 mt-0.5">smart_display</mat-icon>
                  <div>
                    <span class="font-bold text-white block">Official Channel</span>
                    <a [href]="contact.youtube" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-[#F5C518] break-all">
                      {{ contact.youtube }}
                    </a>
                  </div>
                </div>

                <!-- Business Hours -->
                <div class="flex items-start gap-3 text-slate-300">
                  <mat-icon class="!w-4 !h-4 !text-[18px] text-emerald-400 shrink-0 mt-0.5">schedule</mat-icon>
                  <div>
                    <span class="font-bold text-white block">Operating Schedule</span>
                    <span>Monday – Saturday: 09:00 AM – 08:00 PM (MYT)</span>
                  </div>
                </div>
              </div>

              <!-- Instant WhatsApp Button -->
              <a 
                [href]="contact.whatsapp" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all">
                <mat-icon class="!w-4 !h-4 !text-[18px]">chat</mat-icon>
                <span>Direct WhatsApp with Founder MC-Jey</span>
              </a>

            </div>

            <!-- Stylized Map Card (OpenStreetMap / Melaka Preview) -->
            <div class="rounded-2xl bg-[#0a1e3f] border border-white/10 overflow-hidden shadow-xl">
              <div class="p-3 bg-[#071a38] border-b border-white/10 flex items-center justify-between text-xs">
                <span class="font-bold text-slate-300 flex items-center gap-1.5">
                  <mat-icon class="!w-3.5 !h-3.5 !text-[14px] text-[#F5C518]">navigation</mat-icon>
                  Kasturi Semabok, 75050 Melaka
                </span>
                <span class="text-[10px] text-slate-500 font-mono">LAT: 2.1960 N · LNG: 102.2646 E</span>
              </div>
              
              <div class="relative h-56 w-full bg-[#051429] flex items-center justify-center">
                <iframe 
                  title="JD Universal Melaka Studio Location"
                  width="100%" 
                  height="100%" 
                  frameborder="0" 
                  scrolling="no" 
                  marginheight="0" 
                  marginwidth="0" 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=102.2500%2C2.1850%2C102.2800%2C2.2100&amp;layer=mapnik&amp;marker=2.1960%2C102.2646"
                  class="filter contrast-125 opacity-80 hover:opacity-100 transition-opacity">
                </iframe>
                
                <div class="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-[#071a38]/90 border border-white/10 text-[10px] text-slate-300 pointer-events-none">
                  Melaka, Malaysia
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  readonly contact = COMPANY_INFO.contact;
  readonly servicesList = SERVICES_DATA;

  readonly preselectedService = input<string | null>(null);

  readonly inquiryForm: FormGroup;
  readonly submitted = signal(false);
  readonly lastSubmissionName = signal('');
  readonly whatsAppUrl = signal('');

  constructor() {
    this.inquiryForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      serviceCategory: ['', [Validators.required]],
      eventDate: [''],
      estimatedBudget: ['RM 15,000 - RM 35,000'],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Auto prefill service when selected from a modal
    effect(() => {
      const selected = this.preselectedService();
      if (selected) {
        this.inquiryForm.patchValue({ serviceCategory: selected });
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.inquiryForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.inquiryForm.valid) {
      const data = this.inquiryForm.value;
      const validation = validateInquiryForm(data);
      if (validation.valid) {
        this.lastSubmissionName.set(data.fullName);
        const waMsg = `Hi JD Universal, my name is ${data.fullName}. I am interested in ${data.serviceCategory}. Budget: ${data.estimatedBudget}. Note: ${data.message}`;
        this.whatsAppUrl.set(formatWhatsAppUrl(this.contact.phone, waMsg));
        this.submitted.set(true);
      }
    } else {
      this.inquiryForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.inquiryForm.reset({
      estimatedBudget: 'RM 15,000 - RM 35,000'
    });
    this.submitted.set(false);
  }
}
