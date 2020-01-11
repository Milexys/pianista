import React, { Component } from 'react';
import botonEscuchar from '../../assets/SVG/escuchar-icon.svg';
import SoundfontProvider from '../Piano/SoundfontProvider';
import PianoBrowne from '../Piano/PianoBrowne';
import _ from 'lodash';
import { MidiNumbers } from 'react-piano';
import { melodias } from '../Piano/melody.json';
import { SongContext } from '../Piano/SongContext';
import { Container } from './style.css.jsx';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';



class Start extends Component {
  static contextType = SongContext;
    state = {
        recording: {
          mode: 'RECORDING',
          events: melodias,
          currentTime: 0,
          currentEvents: [],
          player: [],
        },
        song: {
          startNote: 'c3',
          endNote: 'c4',
          name: '',
        }
      };
      constructor(props) {
        super(props);
    
        this.scheduledEvents = [];
      }
      componentDidMount(){
        this.getSongToPlay()
      }
      getSongToPlay = () => {
        const id = 4;
        const currentSong = this.state.recording.events.filter(element =>{
          return element.id === id
        })
        .map(element =>{
          this.setSong({
            startNote: element.startNote,
            endNote: element.endNote,
            name: element.pageName
          });
          this.setRecording({
            events: element.melody,
          })
          return element.song
        })
      }
    
      getRecordingEndTime = () => {
        if (this.state.recording.events.length === 0) {
          return 0;
        }
        return Math.max(
          ...this.state.recording.events.map(event => event.time + event.duration),
        );
      };
    
      setRecording = value => {
        this.setState({
          recording: Object.assign({}, this.state.recording, value),
        });
      };
    
      setSong = value => {
        this.setState({
          song: Object.assign({}, this.state.song, value),
        });
      };
    
      onCLickPlay = () => {
        this.setRecording({
          mode: 'PLAYING',
          player: []
        })
    
        const startAndEndTimes = _.uniq(
          _.flatMap(this.state.recording.events, event => [
            event.time,
            event.time + event.duration,
          ]),
        );
    
    
        startAndEndTimes.forEach(time => {
          this.scheduledEvents.push(
            setTimeout(() => {
              const currentEvents = this.state.recording.events.filter(event => {
                return event.time <= time && event.time + event.duration > time;
              });
              this.setRecording({
                currentEvents,
              });
            }, time * 1000),
          );
    
        });
    
        setTimeout(() => {
          this.scheduledEvents.forEach(scheduledEvent => {
            clearTimeout(scheduledEvent);
          });
          this.setRecording({
            mode: 'RECORDING',
            currentEvents: [],
          });
        }, this.getRecordingEndTime() * 1000);
      };
    
      componentDidUpdate(prevProps, prevState) {
        if(this.state.song.id === 0){
          return false;
        }
        if (prevState.recording.player !== this.state.recording.player) { this.playing() }
    
      }
      playing = () => {
        const midiSong = this.state.recording.events.map(event => {return event.midiNumber})
        const midiPlayer = this.state.recording.player.map(event => event.midiNumber)
        if (midiSong.length === midiPlayer.length) {
         if (JSON.stringify(midiSong) === JSON.stringify(midiPlayer)){
           alert("son iguales")
           this.setRecording({
            mode: 'RECORDING',
            currentTime: 0,
            currentEvents: [],
            player: [],
          })
          window.open(this.state.song.name, '_parent')
          this.setSong({
            id: 2
          })
         } else{
           alert("no son iguales")
           this.setRecording({
            mode: 'RECORDING',
            currentTime: 0,
            currentEvents: [],
            player: [],
          })
         }
        }
      }
    render() {
        const noteRange = {
            first: MidiNumbers.fromNote(this.state.song.startNote),
            last: MidiNumbers.fromNote(this.state.song.endNote),
          };
        return (
            <Container>
                <div className='texto-1'>
                    <p>Toca la melodía en el piano para seguir leyendo</p>
                </div>
                <div className='partitura'>
                </div>
                <div className='boton-escuchar'>
                    <img src={botonEscuchar} alt="boton de escuchar" onClick={this.onCLickPlay} />
                </div>
                <div className="container-piano">
                    <SoundfontProvider
                        instrumentName="acoustic_grand_piano"
                        audioContext={audioContext}
                        hostname={soundfontHostname}
                        render={({ isLoading, playNote, stopNote }) => (
                            <PianoBrowne
                                recording={this.state.recording}
                                setRecording={this.setRecording}
                                noteRange={noteRange}
                                playNote={playNote}
                                stopNote={stopNote}
                                disabled={isLoading}
                            />
                        )}
                    />
                </div>
                <div className="texto-2">
                    <p>No tengo dedos para el piano.</p>
                </div>
            </Container>
        );
    }
}

export default Start;