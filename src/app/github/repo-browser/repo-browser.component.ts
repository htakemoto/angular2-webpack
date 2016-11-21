import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../shared/github.service';

@Component({
    selector: 'repo-browser',
    templateUrl: './repo-browser.component.html',
    styleUrls: ['./repo-browser.component.css']
})
export class RepoBrowserComponent {

    constructor(private router: Router, private githubService: GithubService) {
    }

    searchForOrg(orgName: string) {
        this.githubService.getOrg(orgName)
            .subscribe(({name}) => {
                console.log(name);
                this.router.navigate(['/github', orgName]);
            });
    }

}
