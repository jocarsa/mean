import { Component } from '@angular/core';




@Component({
  selector: 'app-prueba',
  template: `
  
  <div appCustomStyle>
  This text will have custom styles applied by the directive.
</div>
  
    <button (click)="toggleContent()">Toggle Content</button>

    <div *ngIf="showContent">
      <p>This content is only displayed if the showContent variable is true.</p>
    </div>
  `
})
export class PruebaComponent {
        showContent = false;

      toggleContent() {
        this.showContent = !this.showContent;
      }
}
