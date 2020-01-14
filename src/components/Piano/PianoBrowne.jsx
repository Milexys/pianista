import React, { useState } from 'react';
import { Piano } from 'react-piano';
import './piano.css';

const PianoBrowne = (props) => {

  const [notesRecorded, setNotesRecorded] = useState(false)

  const onPlayNoteInput = () => {
    setNotesRecorded(false);
  };

  const onStopNoteInput = (midiNumber, { prevActiveNotes }) => {
    if (notesRecorded === false) {
      recordNotes(prevActiveNotes);
      setNotesRecorded(true);
    }
  };

  const recordNotes = (midiNumbers) => {
    if (props.record.mode !== 'RECORDING') {
      return;
    }
    const newEvents = midiNumbers.map(midiNumber => {
      return {
        midiNumber,
      };
    });
    props.setRecord({
      player: props.recording.player.concat(newEvents),
    });
  };

  const {
    playNote,
    stopNote,
    record,
    setRecord,
    ...pianoProps
  } = props;
  const { mode, currentEvents } = props.record;
  const activeNotes =
  mode === 'PLAYING' ? currentEvents.map(event => event.midiNumber) : null;
  return (
    <Piano
      playNote={props.playNote}
      stopNote={props.stopNote}
      onPlayNoteInput={onPlayNoteInput}
      onStopNoteInput={onStopNoteInput}
      activeNotes={activeNotes}
      {...pianoProps}
    />
  )
}
export default PianoBrowne;