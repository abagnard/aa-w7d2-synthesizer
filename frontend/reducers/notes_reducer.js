import NotesConstants from "../actions/note_actions";
import TONES from "../util/tones";
import NOTE_NAMES from "../util/tones";

const keyMap = {'a': 'C5', 's': 'D5', 'd': 'E5', 'f': 'F5', 'g': 'G5'};
const validKeys = Object.keys(keyMap);

const notes = (oldState = [], action) => {
  let pressedKey = action.key;
  switch (action.type){
    case NotesConstants.KEY_PRESSED:
      if (validKeys.includes(pressedKey) && oldState.includes(keyMap[pressedKey])){
        return oldState;
      } else {
        return [...oldState, keyMap[pressedKey]];
      }
    case NotesConstants.KEY_RELEASED:
      if (validKeys.includes(pressedKey) && oldState.includes(keyMap[pressedKey])){
        return [...oldState].slice(0, -1);
      } else {
        return oldState;
      }
    default:
      return oldState;
  }
};

export default notes;
