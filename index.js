import ConnectionProviderOSC from '../../connectionProviders/ConnectionProviderOSC'

class DeviceProviderResolumeArena extends ConnectionProviderOSC {
  static providerRegistration = {
    id: 'DeviceProviderResolumeArena',
    label: 'Resolume Arena',
    manufacturer: 'Resolume',
    protocol: 'OSC',
    description: 'Resolume provides a wide range of flexibility to display various types of content to suit any event thanks to its powerful effects engine and easy to use layering interface.',
    category: 'Media Server',
    parameters: this.parameters,
    defaults: [null, 7000],
    constructor: DeviceProviderResolumeArena
  }

  providerFunctions = [
    {
      id: 'clearComposition',
      label: 'Clear Composition'
    },
    {
      id: 'clearLayer',
      label: 'Clear Layer',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'layer',
          label: 'Layer',
          required: true,
          placeholder: 'Layer',
          invalidText: 'Please enter a valid Layer Number'
        }
      ]
    },
    {
      id: 'connectColumn',
      label: 'Connect Column',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'column',
          label: 'Column',
          required: true,
          placeholder: 'Column Number',
          invalidText: 'Please enter a valid Column Number'
        }
      ]
    },
    {
      id: 'connectNextColumn',
      label: 'Connect Next Column'
    },
    {
      id: 'connectPrevColumn',
      label: 'Connect Previous Column'
    },
    {
      id: 'connectClip',
      label: 'Connect Clip',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'clip',
          label: 'Clip Number',
          required: true,
          placeholder: 'Clip Number',
          invalidText: 'Please enter a valid Clip Number',
          tooltip: 'The Clip number is the Column this clip is in'
        },
        {
          inputType: 'numberInput',
          id: 'layer',
          label: 'Layer',
          required: true,
          placeholder: 'Layer',
          invalidText: 'Please enter a valid Layer Number'
        }
      ]
    },
    {
      id: 'selectDeck',
      label: 'Select Deck',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'deck',
          label: 'Deck',
          required: true,
          placeholder: 'Deck Number',
          invalidText: 'Please enter a valid Deck Number'
        }
      ]
    },
    {
      id: 'selectLayer',
      label: 'Select Layer',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'layer',
          label: 'Layer',
          required: true,
          placeholder: 'Layer',
          invalidText: 'Please enter a valid Layer Number'
        }
      ]
    },
    {
      id: 'selectClip',
      label: 'Select Clip',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'clip',
          label: 'Clip Number',
          required: true,
          placeholder: 'Clip Number',
          invalidText: 'Please enter a valid Clip Number',
          tooltip: 'The Clip number is the Column this clip is in'
        },
        {
          inputType: 'numberInput',
          id: 'layer',
          label: 'Layer',
          required: true,
          placeholder: 'Layer',
          invalidText: 'Please enter a valid Layer Number'
        }
      ]
    },
    {
      id: 'setBPM',
      label: 'Set BPM',
      parameters: [
        {
          inputType: 'numberInput',
          id: 'bpm',
          label: 'BPM',
          required: true,
          placeholder: 'Tempo',
          invalidText: 'Please enter a valid BPM',
          tooltip: 'The Clip number is the Column this clip is in'
        }
      ]
    },
    {
      id: 'decBPM',
      label: 'Decrease Tempo'
    },
    {
      id: 'incBPM',
      label: 'Increase Tempo'
    },
    {
      id: 'pullBPM',
      label: 'Pull Tempo'
    },
    {
      id: 'pushBPM',
      label: 'Push Tempo'
    },
    {
      id: 'divBPM',
      label: 'Divide Tempo by 2'
    },
    {
      id: 'multBPM',
      label: 'Multiply Tempo by 2'
    },
    {
      id: 'tapBPM',
      label: 'Tap Tempo'
    },
    {
      id: 'resyncBPM',
      label: 'Resync Tempo'
    },
    {
      id: 'pauseBPM',
      label: 'Pause Tempo'
    },
    {
      id: 'resumeBPM',
      label: 'Resume Tempo'
    },
    {
      id: 'startMetronome',
      label: 'Start Metronome'
    },
    {
      id: 'stopMetronome',
      label: 'Stop Metronome'
    },
    {
      id: 'startRecord',
      label: 'Start Record'
    },
    {
      id: 'stopRecord',
      label: 'Stop Record'
    }
  ]

  interface = (_action) => {
    switch (_action.providerFunction.id) {
      // Clearing Things
      case 'clearComposition': // Clear Composition
        this.connectionProviderInterface({
          address: '/composition/disconnectall',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'clearLayer': // Clear Layer
        this.connectionProviderInterface({
          address: `/composition/layers/${_action.parameters.layer}/clear`,
          args: [{ type: 'i', value: 1 }]
        })
        break

      // Connecting Things
      case 'connectColumn': // Connect Column
        this.connectionProviderInterface({
          address: `/composition/columns/${_action.parameters.column}/connect`,
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'connectNextColumn': // Connect Column
        this.connectionProviderInterface({
          address: '/composition/connectnextcolumn',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'connectPrevColumn': // Connect Column
        this.connectionProviderInterface({
          address: '/composition/connectprevcolumn',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'connectClip': // Connect Clip
        this.connectionProviderInterface({
          address: `/composition/layers/${_action.parameters.layer}/clips/${_action.parameters.clip}/connect`,
          args: [{ type: 'i', value: 1 }]
        })
        break

      // Selecting Things
      case 'selectDeck': // Select Deck
        this.connectionProviderInterface({
          address: `/composition/decks/${_action.parameters.deck}/select`,
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'selectLayer': // Select Deck
        this.connectionProviderInterface({
          address: `/composition/layers/${_action.parameters.layer}/select`,
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'selectClip': // Select Deck
        this.connectionProviderInterface({
          address: `/composition/layers/${_action.parameters.layer}/clips/${_action.parameters.clip}/select`,
          args: [{ type: 'i', value: 1 }]
        })
        break

      // BPM Things
      case 'setBPM': // Set BPM
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/tempo',
          args: [{ type: 'f', value: _action.parameters.find((p) => (p.id === 'bpm')).value }]
        })
        break
      case 'decBPM': // Decrease BPM
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/tempodec',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'incBPM': // Increase BPM
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/tempoint',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'pullBPM': // Pull BPM
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/tempopull',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'pushBPM': // Push BPM
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/tempopush',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'divBPM': // Divide BPM by 2
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/tempodividetwo',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'multBPM': // Multiply BPM by 2
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/tempomultiplytwo',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'tapBPM': // Tap Tempo
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/tempotap',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'resyncBPM': // Resync BPM
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/resync',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'pauseBPM': // Pause BPM
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/pause',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'resumeBPM': // Resume BPM
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/pause',
          args: [{ type: 'i', value: 0 }]
        })
        break
      case 'startMetronome': // Start Metronome
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/metronome',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'stopMetronome': // Stop Metronome
        this.connectionProviderInterface({
          address: '/composition/tempocontroller/metronome',
          args: [{ type: 'i', value: 0 }]
        })
        break

      // Record
      case 'startRecord': // Start Recorder
        this.connectionProviderInterface({
          address: '/composition/recorder/record',
          args: [{ type: 'i', value: 1 }]
        })
        break
      case 'stopRecord': // Stop Recorder
        this.connectionProviderInterface({
          address: '/composition/recorder/record',
          args: [{ type: 'i', value: 0 }]
        })
        break
    }
  }
}

export default DeviceProviderResolumeArena
