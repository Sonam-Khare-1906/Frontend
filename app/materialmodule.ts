import { NgModel } from "@angular/forms";
import{MatInputModule} from '@angular/material/input';
import{MatCardModule} from '@angular/material/card';
import{MatSelectModule} from '@angular/material/select';
import{MatRadioModule} from '@angular/material/radio';
import{MatTableModule} from '@angular/material/table';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatSortModule} from '@angular/material/sort';
import{MatDialogModule} from '@angular/material/dialog';
import{MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';

@NgModule ({
    exports: [
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule 
    ]
})
export class materialmodule{}