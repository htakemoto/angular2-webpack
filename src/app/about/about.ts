import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'about',
  styleUrls: ['./about.css'],
  templateUrl: './about.html'
})
export class About implements AfterViewInit {
    constructor() {
    }

    ngAfterViewInit() {
        //called after the constructor and called after the first ngOnChanges() 
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
    }
}
