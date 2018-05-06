import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET, RESET } from './../../ngrx/search.reducer';

@Component({
    selector: 'navbar',
    templateUrl: '../views/navbar.template.html',
    // styleUrls: ['../../styles/global.scss']
})

export class NavbarComponent {

    title = 'Navbar component';
    public cityName = '';
    constructor(private store: Store<String>){
        this.store.select('search');
    }

    search(){
        this.store.dispatch({ type: SET, payload : this.cityName});
    }


}