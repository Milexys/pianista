import React, { Component } from 'react';
import { Piano } from 'react-piano';
import './piano.css';

class PianoBrowne extends Component {

  static defaultProps = {
    notesRecorded: false,
  };

  state = {
    keysDown: {},
  };

  onPlayNoteInput = midiNumber => {
    this.setState({
      notesRecorded: false,
    });
  };

  onStopNoteInput = (midiNumber, { prevActiveNotes }) => {
    if (this.state.notesRecorded === false) {
      this.recordNotes(prevActiveNotes);
      this.setState({
        notesRecorded: true,
      });
    }
  };

  recordNotes = (midiNumbers) => {
    if (this.props.recording.mode !== 'RECORDING') {
      return;
    }
    const newEvents = midiNumbers.map(midiNumber => {
      return {
        midiNumber,
      };
    });
    this.props.setRecording({
      player: this.props.recording.player.concat(newEvents),
    });
  };
  
  render() {
    const {
      playNote,
      stopNote,
      recording,
      setRecording,
      ...pianoProps
    } = this.props;
    const { mode, currentEvents } = this.props.recording;
    const activeNotes =
      mode === 'PLAYING' ? currentEvents.map(event => event.midiNumber) : null;
    return (
      <Piano
      playNote={this.props.playNote}
      stopNote={this.props.stopNote}
      onPlayNoteInput={this.onPlayNoteInput}
      onStopNoteInput={this.onStopNoteInput}
      activeNotes={activeNotes}
      {...pianoProps}
      />
    )
    }
    
}
export default PianoBrowne;