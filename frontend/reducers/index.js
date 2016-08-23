import { combineReducers } from 'redux';
import notes from './notes_reducer';


const rootReducer = combineReducers({
  notes: notes
});

export default rootReducer;
