import React, { useState, useEffect } from 'react';
import botonEscuchar from '../../assets/SVG/escuchar-icon.svg';
import SoundfontProvider from '../Piano/SoundfontProvider';
import PianoBrowne from '../Piano/PianoBrowne';
import _ from 'lodash';
import { MidiNumbers } from 'react-piano';
import { melodias } from '../Piano/melody.json';
import { Container } from './style.css.jsx';
import Button from '../Button/index'
import { Link } from 'gatsby';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';


const Start = () => {

  const [recording, setRecording] = useState({
    mode: 'RECORDING',
    events: melodias,
    currentTime: 0,
    currentEvents: [],
    player: [],
    id: 1,
  })

  const [song, setSong] = useState({
    startNote: 'c3',
    endNote: 'c4',
    name: '',
  })

  const [scheduledEvents, setScheduledEvents] = useState([])

  useEffect(() => {
    recording.events.filter(element => {
      return element.id === 1
    })
      .map(element => {
        setSong({
          startNote: element.startNote,
          endNote: element.endNote,
          name: element.pageName
        });
        setRecording({
          events: element.melody,
        })
      })
  })

  const getRecordingEndTime = () => {
    if (recording.events.length === 0) {
      return 0;
    }
    return Math.max(
      ...recording.events.map(event => event.time + event.duration),
    );
  };

  const onCLickPlay = () => {
    setRecording({
      mode: 'PLAYING',
      player: [],
    })

    const startAndEndTimes = _.uniq(
      _.flatMap(recording.events, event => [
        event.time,
        event.time + event.duration,
      ]),
    );


    startAndEndTimes.forEach(time => {
      scheduledEvents.push(
        setTimeout(() => {
          const currentEvents = recording.events.filter(event => {
            return event.time <= time && event.time + event.duration > time;
          });
          setRecording({
            currentEvents,
          });
        }, time * 1000),
      );

    });

    setTimeout(() => {
      scheduledEvents.forEach(scheduledEvent => {
        clearTimeout(scheduledEvent);
      });
      setRecording({
        mode: 'RECORDING',
        currentEvents: [],
      });
    }, getRecordingEndTime * 1000);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.recording.player !== this.state.recording.player) { this.playing() }

  // }

  const playing = () => {

    //Esta función toma los midinumbers de la canción ha escuchar y toma los midinumbers tocados por el jugga

    let midiSong = recording.events.map(event => { return event.midiNumber })
    let midiPlayer = recording.player.map(event => event.midiNumber)
    if (midiSong.length === midiPlayer.length) {
      if (JSON.stringify(midiSong) === JSON.stringify(midiPlayer)) {
        alert("son iguales")
        setRecording({
          mode: 'RECORDING',
          currentTime: 0,
          currentEvents: [],
          player: [],
        })
      } else {
        alert("no son iguales")
        setRecording({
          mode: 'RECORDING',
          currentTime: 0,
          currentEvents: [],
          player: [],
        })
      }
    }
  }

  const noteRange = {
      first: MidiNumbers.fromNote('c3'),
      last: MidiNumbers.fromNote('c4'),
    };
    return (
      <Container>
        <div className='texto-1'>
          <p>Toca la melodía en el piano para seguir leyendo</p>
        </div>
        <div className='partitura'>
        </div>
        <div className='boton-escuchar'>
          <img src={botonEscuchar} alt="boton de escuchar" onClick={onCLickPlay} />
        </div>
        <div className="container-piano">

          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
              <PianoBrowne
                record={recording}
                setRecord={setRecording}
                noteRange={noteRange}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
              />
            )}
          />

        </div>
        <div className="continuar">
          <Link to={song.name}><Button title="Continuar"></Button></Link>
        </div>
        <div className="texto-2">
          <p>No tengo dedos para el piano.</p>
        </div>
      </Container>
    );
  
}

export default Start;