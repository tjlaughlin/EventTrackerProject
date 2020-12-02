import { Component, OnInit } from '@angular/core';
import { Novel } from 'src/app/models/novel.model';
import { SciFiLibraryService } from 'src/app/services/sci-fi-library.service';

@Component({
  selector: 'app-sci-fi-library',
  templateUrl: './sci-fi-library.component.html',
  styleUrls: ['./sci-fi-library.component.css']
})
export class SciFiLibraryComponent implements OnInit {

  constructor(
    private sciFiLibraryService: SciFiLibraryService
    ) { }

  searchList: Novel[] = [];
  searchDiv: Boolean = false;
  novels: Novel[] = [];
  selected: Novel = null;
  add: Boolean = false;
  update: boolean = false;
  newNovel: Novel = new Novel();
  keyword: String;



  ngOnInit(): void {
    this.loadNovel();
  }

  loadNovel(): void {
    this.sciFiLibraryService.index().subscribe(
      data=>{
        this.novels = data;
        console.log('retrieved');
      },
      err=>{
      console.error('retrieved failed')
      console.error(err);
      }
      );
    }

    addNovel(): void {
      this.sciFiLibraryService.addNovel(this.newNovel).subscribe(
        data=>{
          this.newNovel = data;
          console.log('retrieved');
        },
        err=>{
        console.error('retrieved failed')
        console.error(err);
        }
      );

      window.location.reload();
    }

    deleteNovel(): void {
      this.sciFiLibraryService.deleteNovel(this.selected.id).subscribe(
        data=>{
          // this.newNovel = data;
          this.selected = data;
          console.log('retrieved');

        },
        err=>{
        console.error('retrieved failed')
        console.error(err);
        }

      );


      window.location.reload();


    }

    updateNovel(): void {
      this.sciFiLibraryService.updateNovel(this.selected.id, this.selected).subscribe(
        data=>{
          this.newNovel = data;
          console.log('retrieved');
        },
        err=>{
        console.error('retrieved failed')
        console.error(err);
        }
      );
      window.location.reload();
    }

    search(keyword: String): void {
      this.sciFiLibraryService.searchNovels(keyword).subscribe(
        data=>{
          this.searchList = data;
          console.log(this.searchList.length);
          this.searchDiv = true;
          console.log('retrieved');
        },
        err=>{
        console.error('retrieved failed')
        console.error(err);
        }
      );
      // window.location.reload();
    }


}
