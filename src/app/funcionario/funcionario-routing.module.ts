import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioComponent } from './components/funcionario.component';

import { ListagemComponent, LancamentoComponent } from './components';


export const FuncionariosRoutes: Routes = [
    {
        path: 'funcionario',
        component: FuncionarioComponent,
        children: [
            {
                path: '',
                component: LancamentoComponent
            },
            {
                path: 'listagem',
                component: ListagemComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(FuncionariosRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FuncionarioRoutingModule{
}