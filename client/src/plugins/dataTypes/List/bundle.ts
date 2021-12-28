import { DTBundle } from '~types/dataTypes';
import { initialState, Example, Options, Help, getMetadata, rowStateReducer } from './List';

const bundle: DTBundle = {
	initialState,
	Example,
	Options,
	Help,
	getMetadata,
	rowStateReducer
};

export default bundle;
