import { Component, Inject, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/entry';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
})
export class CoreComponent implements OnInit {
  entries: Entry[] = [];

  constructor(@Inject(CoreService) private coreService: CoreService) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.getData();
  }

  getData() {
    this.coreService.get().subscribe((entries) => {
      this.entries = this.sortEntries(entries);
    });
  }

  sortEntries(entries: Entry[]): Entry[] {
    return entries.sort(
      (x, y) => +new Date(y.published_at) - +new Date(x.published_at)
    );
  }
}
