import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryListComponent } from './entry-list/entry-list.component';

@NgModule({
  declarations: [EntryListComponent],
  imports: [CommonModule, RouterModule, EntriesRoutingModule],
})
export class EntriesModule {}
