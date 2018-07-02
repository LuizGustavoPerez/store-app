import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './searchs/books/books.component';
import { ClientsComponent } from './searchs/clients/clients.component';

const appRoutes: Routes = [
    { path: 'clients', component: ClientsComponent},
    { path: 'books', component: BooksComponent},
    { path: '', redirectTo:'/clients', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}