import { Component } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { SETOPTION, RESETOPTION } from './../../ngrx/options.reducer';

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
        this.store.dispatch({ type: SETOPTION, payload : theOption});
    }

}