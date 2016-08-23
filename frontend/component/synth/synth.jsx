import React from 'react';
import NOTE_NAMES from '../../util/tones';
import TONES from '../../util/tones';
import Note from '../../util/note';

class Synth extends React.Component {
  constructor() {
    super();
    this.tones = TONES;
    this.noteNames = NOTE_NAMES;
    this.notes = this.makeNotesArr();

  }

  makeNotesArr() {
    const noteArr = [];
    this.noteNames.forEach((name) => {
      noteArr.push(new Note(this.tones[name]));
    });
    return noteArr;
  }

  render() {
    let noteList = this.notes.map((el) => {
      return <li>el</li>;
    });
    return (
      <ul>
        {noteList}
      </ul>
    );
  }
}

export default Synth;
