import {NotesConstants, keyPressed, keyReleased} from "../actions/note_actions";
import TONES from "../util/tones";
import NOTE_NAMES from "../util/tones";

const keyMap = {'KeyA': 'C5', 'KeyS': 'D5', 'KeyD': 'E5', 'KeyF': 'F5', 'KeyG': 'G5'};
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
        let newState = [...oldState];
        return newState.slice(0, newState.length - 1);
      } else {
        return oldState;
      }
    default:
      return oldState;
  }
};

export default notes;
