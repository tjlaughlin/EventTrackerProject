import { Novel } from 'src/app/models/novel.model';
import { SciFiLibraryService } from 'src/app/services/sci-fi-library.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private svc: SciFiLibraryService,
    private router: Router,


  ) { }

  newNovel: Novel = new Novel();
  ngOnInit(): void {
  }


  addNovel(newNovel: Novel): void {
    this.svc.addNovel(newNovel).subscribe(
      data=>{
        newNovel = data;
        this.router.navigateByUrl('/novels');
        console.log('in about addNovel data');
      },
      err=>{
      console.error('retrieved failed')
      console.error(err);
      }
    );


  }



}
