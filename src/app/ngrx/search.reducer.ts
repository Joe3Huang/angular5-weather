import { ActionReducer, Action } from '@ngrx/store';

export const SET = 'SET';
export const RESET = 'RESET';

export function searchReducer(state: string = 'Christchurch', action: Action) {
	switch (action.type) {
		case SET:
			state = action.payload;
			return state;
            
		case RESET:
			return 'Christchurch';

		default:
			return state;
	}
}