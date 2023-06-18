import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
@ViewChild('txtTagInput')
tagInput!: ElementRef <HTMLInputElement>
constructor(private gifsService:GifsService){

}
  searchTag(){
    const newTag = this.tagInput.nativeElement.value
    // Guardando tag en nuestro servicio
    this.gifsService.searchTag(newTag)
    //Dejando el input vacio
    this.tagInput.nativeElement.value = ''
  }
}
