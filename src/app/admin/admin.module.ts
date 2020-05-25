import { ConfirmarDialog } from './components/listagem/listagem.component';
import { FuncionarioService } from './../shared/services/funcionario.service';
import { PtBrMatPaginatorIntl } from './../shared/validators/pt-br-mat-paginator-intl';
import { LancamentoService } from './../shared/services/lancamento.service';
import { HttpUtilService } from './../shared';
import { SharedModule } from './../shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent, AtualizacaoComponent, CadastroComponent, AdminComponent} from './components';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ListagemComponent,
     CadastroComponent,
      AtualizacaoComponent,
      AdminComponent,
      ConfirmarDialog
    
    ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
    
       
  ],
  providers: [
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide:  MatPaginatorIntl, useClass: PtBrMatPaginatorIntl },
    FuncionarioService
  ],
  entryComponents: [
    ConfirmarDialog
  ]
})
export class AdminModule { }
