import { Component } from '@angular/core';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';

  currentUrl: string;
  currentPageTitle: string;

  constructor() {
    this.currentUrl = window.location.href;
    this.currentPageTitle = document.title;
  }

  shareOnFacebook(): void {
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${this.currentUrl}`;
    const windowSize = 'width=565,height=569';
    window.open(fbShareUrl, '', `menubar=no,resizeable=yes,scrollbars=yes,${windowSize}`);
  }

  shareOnTwitter(): void {
    const twShareUrl = `https://twitter.com/intent/tweet?text=${this.currentPageTitle}&url=${this.currentUrl}`;
    const windowSize = 'width=565,height=569';
    window.open(twShareUrl, '', `menubar=no,resizeable=yes,scrollbars=yes,${windowSize}`);
  }

  shareOnWhatsApp(): void {
    const wtsShareUrl = `whatsapp://send?text=${this.currentUrl}`;
    const windowSize = 'width=565,height=569';
    window.open(wtsShareUrl, '', `menubar=no,resizeable=yes,scrollbars=yes,${windowSize}`);
  }

  shareOnLinkedIn(): void {
    const lnkShareUrl = `https://www.linkedin.com/cws/share?url=${this.currentUrl}`;
    const windowSize = 'width=565,height=569';
    window.open(lnkShareUrl, '', `menubar=no,resizeable=yes,scrollbars=yes,${windowSize}`);
  }

  shareOnGooglePlus(): void {
    const gpShareUrl = `https://plus.google.com/share?url=${this.currentUrl}`;
    const windowSize = 'width=565,height=569';
    window.open(gpShareUrl, '', `menubar=no,resizeable=yes,scrollbars=yes,${windowSize}`);
  }

}
