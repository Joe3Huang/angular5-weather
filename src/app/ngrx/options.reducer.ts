import { ActionReducer, Action } from '@ngrx/store';

export const SET = 'SET';
export const RESET = 'RESET';

export function optionsReducer(state: string = 'Today', action: Action) {
	switch (action.type) {
		case SET:
			state = action.payload;
			return state;
            
		case RESET:
			return 'Today';

		default:
			return state;
	}
}