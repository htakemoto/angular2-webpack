import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'about',
    styleUrls: ['./about.component.css'],
    templateUrl: './about.component.html'
})
export class AboutComponent implements AfterViewInit {
    constructor() {
    }

    ngAfterViewInit() {
        //called after the constructor and called after the first ngOnChanges() 
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
    }
}
