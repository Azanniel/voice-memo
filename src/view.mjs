export class View {
  constructor() {
    this.buttonStart = document.getElementById('btnStart')
    this.buttonStop = document.getElementById('btnStop')
    this.audioElement = document.getElementById('audio')
  }

  onRecordingClick(command) {
    return () => {
      command()
      this.toggleAudioElement({ visible: false })
    }
  }

  onStopRecordingClick(command) {
    return () => {
      command()
    }
  }

  configureStartRecordingButton(command) {
    this.buttonStart.addEventListener('click', this.onRecordingClick(command))
  }

  configureStopRecordingButton(command) {
    this.buttonStop.addEventListener('click', this.onStopRecordingClick(command))
  }

  toggleAudioElement({ visible }) {
    const classList = this.audioElement.classList
    visible ? classList.remove('hidden') : classList.add('hidden')
  }

  playAudio(url) {
    const audio = this.audioElement
    audio.src = url
    audio.muted = false

    this.toggleAudioElement({ visible: true })

    audio.addEventListener("loadedmetadata", () => {
      audio.play()
    })
  }
}