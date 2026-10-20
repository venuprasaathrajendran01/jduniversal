import { Component, ChangeDetectionStrategy, signal, inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isBrowser && isPointerDevice()) {
      <div 
        class="custom-cursor-dot"
        [style.left.px]="x()"
        [style.top.px]="y()"
        [style.opacity]="visible() ? 1 : 0">
      </div>
      <div 
        class="custom-cursor-ring"
        [class.scale-150]="hovered()"
        [class.border-[#F5C518]]="hovered()"
        [style.left.px]="ringX()"
        [style.top.px]="ringY()"
        [style.opacity]="visible() ? 1 : 0">
      </div>
    }
  `
})
export class CustomCursor implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly x = signal(-100);
  readonly y = signal(-100);
  readonly ringX = signal(-100);
  readonly ringY = signal(-100);
  readonly visible = signal(false);
  readonly hovered = signal(false);
  readonly isPointerDevice = signal(false);

  private mouseMoveHandler?: (e: MouseEvent) => void;
  private mouseOverHandler?: (e: MouseEvent) => void;
  private mouseOutHandler?: () => void;
  private animFrameId?: number;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    // Detect if mouse pointer is primary (not touch-only)
    if (window.matchMedia('(pointer: fine)').matches) {
      this.isPointerDevice.set(true);

      let targetX = -100;
      let targetY = -100;
      let currentRingX = -100;
      let currentRingY = -100;

      this.mouseMoveHandler = (e: MouseEvent) => {
        targetX = e.clientX;
        targetY = e.clientY;
        this.x.set(e.clientX);
        this.y.set(e.clientY);
        this.visible.set(true);
      };

      this.mouseOverHandler = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (target && target.closest('button, a, input, select, textarea, [role="button"], .interactive-hover')) {
          this.hovered.set(true);
        } else {
          this.hovered.set(false);
        }
      };

      this.mouseOutHandler = () => {
        this.visible.set(false);
      };

      window.addEventListener('mousemove', this.mouseMoveHandler, { passive: true });
      window.addEventListener('mouseover', this.mouseOverHandler, { passive: true });
      document.body.addEventListener('mouseleave', this.mouseOutHandler);

      // Smooth trailing ring loop
      const updateRing = () => {
        currentRingX += (targetX - currentRingX) * 0.18;
        currentRingY += (targetY - currentRingY) * 0.18;
        this.ringX.set(currentRingX);
        this.ringY.set(currentRingY);
        this.animFrameId = requestAnimationFrame(updateRing);
      };
      this.animFrameId = requestAnimationFrame(updateRing);
    }
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    if (this.mouseMoveHandler) window.removeEventListener('mousemove', this.mouseMoveHandler);
    if (this.mouseOverHandler) window.removeEventListener('mouseover', this.mouseOverHandler);
    if (this.mouseOutHandler) document.body.removeEventListener('mouseleave', this.mouseOutHandler);
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
  }
}
