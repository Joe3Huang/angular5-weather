import { Component } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { SET, RESET } from './../../ngrx/search.reducer';

@Component({
    selector: 'optionBar',
    templateUrl: '../views/optionBar.template.html',
    // styleUrls: ['../../styles/global.scss']
})

export class OptionBarComponent {

    title = 'Optionbar component';
    constructor(private store: Store<String>){
        this.store.pipe(select('option'));
    }

    setOption(theOption : string){
        this.store.dispatch({ type: SET, payload : theOption});
    }

}