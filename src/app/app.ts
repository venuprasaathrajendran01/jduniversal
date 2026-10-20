import { Component, ChangeDetectionStrategy, signal, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Vision } from './components/vision/vision';
import { Services } from './components/services/services';
import { Projects } from './components/projects/projects';
import { ComingSoon } from './components/coming-soon/coming-soon';
import { Gallery } from './components/gallery/gallery';
import { Collaborations } from './components/collaborations/collaborations';
import { Media } from './components/media/media';
import { Clients } from './components/clients/clients';
import { Founder } from './components/founder/founder';
import { Process } from './components/process/process';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { CustomCursor } from './components/cursor/cursor';
import { ServiceModal } from './components/service-modal/service-modal';
import { ProjectModal } from './components/project-modal/project-modal';
import { ServiceItem, ProjectItem } from './models/company.model';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Navbar,
    Hero,
    About,
    Vision,
    Services,
    Projects,
    ComingSoon,
    Gallery,
    Collaborations,
    Media,
    Clients,
    Founder,
    Process,
    Contact,
    Footer,
    CustomCursor,
    ServiceModal,
    ProjectModal
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly selectedService = signal<ServiceItem | null>(null);
  readonly selectedProject = signal<ProjectItem | null>(null);
  readonly bookingPreselection = signal<string | null>(null);

  // Cinematic page-load curtain reveal
  readonly showIntroCurtain = signal(true);

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      this.showIntroCurtain.set(false);
      return;
    }

    // Check if ?autostart=1 or prefers-reduced-motion is active
    const urlParams = new URLSearchParams(window.location.search);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (urlParams.get('autostart') === '1' || prefersReducedMotion) {
      this.showIntroCurtain.set(false);
      return;
    }

    // Curtain reveal dismiss after initial logo draw
    setTimeout(() => {
      this.showIntroCurtain.set(false);
    }, 1100);
  }

  onSelectService(service: ServiceItem): void {
    this.selectedService.set(service);
  }

  onCloseServiceModal(): void {
    this.selectedService.set(null);
  }

  onSelectProject(project: ProjectItem): void {
    this.selectedProject.set(project);
  }

  onCloseProjectModal(): void {
    this.selectedProject.set(null);
  }

  onRequestBooking(serviceTitle: string): void {
    this.bookingPreselection.set(serviceTitle);
    if (!this.isBrowser) return;
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  dismissIntro(): void {
    this.showIntroCurtain.set(false);
  }
}
