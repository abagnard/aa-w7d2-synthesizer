const NotesConstants = {
  KEY_PRESSED: 'KEY_PRESSED',
  KEY_RELEASED: 'KEY_RELEASED'
};

const keyPressed = (key) => ({

  type: NotesConstants.KEY_PRESSED,
  key
});

const keyReleased = (key) => ({
  type: NotesConstants.KEY_RELEASED,
  key
});



export {NotesConstants, keyPressed, keyReleased };
