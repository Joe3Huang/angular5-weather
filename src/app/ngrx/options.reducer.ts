import { ActionReducer, Action } from '@ngrx/store';

export const SETOPTION = 'SETOPTION';
export const RESETOPTION = 'RESETOPTION';

export function optionsReducer(state: string = 'today', action: Action) {
	switch (action.type) {
		case SETOPTION:
			state = action.payload;
			return state;
            
		case RESETOPTION:
			return 'today';

		default:
			return state;
	}
}