import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CLIENT_LOGOS } from '../../data/company-data';

@Component({
  selector: 'app-clients',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section class="py-20 bg-[#051429] overflow-hidden border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span class="text-xs uppercase tracking-widest font-bold text-slate-400 block mb-2">
          Trusted Production & Distribution Partners
        </span>
        <h3 class="font-display text-2xl sm:text-3xl font-bold text-white">
          Collaborating with <span class="text-gradient-gold">Industry Leaders</span>
        </h3>
      </div>

      <!-- Infinite Logo Carousel -->
      <div class="w-full overflow-hidden py-4">
        <div class="flex w-max animate-[clientMarquee_28s_linear_infinite] gap-6 items-center">
          @for (client of loopClients; track $index) {
            <div class="group px-6 py-4 rounded-xl bg-[#071a38] border border-white/10 hover:border-[#F5C518]/40 transition-all duration-300 flex items-center gap-3 shrink-0 cursor-default">
              <div class="w-8 h-8 rounded-lg bg-[#0E2F5F] flex items-center justify-center text-[#F5C518] group-hover:scale-110 transition-transform">
                <mat-icon class="!w-4 !h-4 !text-[18px]">verified_user</mat-icon>
              </div>
              <div>
                <span class="font-display font-bold text-sm text-slate-300 group-hover:text-white transition-colors block">
                  {{ client.name }}
                </span>
                <span class="text-[10px] text-slate-500 uppercase tracking-wider block">
                  {{ client.type }}
                </span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes clientMarquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `]
})
export class Clients {
  readonly clients = CLIENT_LOGOS;
  // Duplicate for seamless 60fps infinite marquee
  readonly loopClients = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];
}
