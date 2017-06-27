import { combineReducers } from 'redux';
import libraries from './LibraryReducer'
import selectedLibraryId from './SelectedReducer'

export default combineReducers({
	libraries,
	selectedLibraryId
});

