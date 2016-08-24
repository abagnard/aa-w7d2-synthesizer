import React from 'react';
import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map((name) => {
      return new Note(TONES[name]);
    });
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", e => this.onKeyDown(e));
    document.addEventListener("keyup", e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    const keyPushed = e.code.toString();
    console.log(keyPushed);
    this.props.keyPressed(keyPushed);
  }

  onKeyUp(e) {
    const keyPulled = e.code.toString();
    this.props.keyReleased(keyPulled);
  }

  playNotes() {

    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.includes(note)) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  render() {
    let noteList = NOTE_NAMES.map((el, idx) => {
      return <li><NoteKey noteName={el}/></li>;
    });
    return (
      <ul>
        {this.playNotes()}
        {noteList}
      </ul>
    );
  }
}

export default Synth;
