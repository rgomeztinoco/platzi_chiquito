function videoPlay(id){
  const urlSecreta = "http://platzisecreta" + id
  console.log("Reproduciendo " + urlSecreta)
}
function videoStop(id){
  const urlSecreta = "http://platzisecreta" + id
  console.log("Pausado " + urlSecreta)
}

export default class PlatziClass {
  constructor({name, videoID}){
    this.name = name
    this.videoID = videoID
  }

  reproducir(){
    videoPlay(this.videoID)
  }

  pausar(){
    videoStop(this.videoID)
  }
}