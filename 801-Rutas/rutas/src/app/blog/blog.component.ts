import { Component, OnInit } from '@angular/core';
import { DatablogService } from '../datablog.service';



@Component({
  selector: 'app-blog',
  template: `
  
      <h3>Blog</h3>
        <div class="entrada" *ngFor="let item of data">
            <img src="/assets/imagenes/nada.jpg">
            <h4>{{ item.titulo }}</h4>
            <p class="autor">{{item.autor}}</p>
            <p>{{ item.contenido }}</p>
            <div class="clearfix"></div>
        </div>
        
    
  `,
})
export class BlogComponent  implements OnInit {
    data!: any[];
      constructor(private datablogService: DatablogService) { }

      ngOnInit() {
        this.datablogService.getData().subscribe(response => {
          this.data = response;
        });
      }
}
