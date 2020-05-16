import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
})
export class EntryListComponent implements OnInit {
  entries: Entry[] = [];
  constructor(private service: EntryService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (entries) => (this.entries = entries),
      (error) => console.log('Erro ao carregar a lista', error)
    );
  }

  deleteEntry(entry: Entry) {
    const mustDelete = confirm('Deseja Realmente excluir este item?');
    if (mustDelete) {
      this.service.delete(entry.id).subscribe(
        () => (this.entries = this.entries.filter((cat) => cat !== entry)),
        (error) => console.log('Erro ao carregar a lista', error)
      );
    }
  }
}
