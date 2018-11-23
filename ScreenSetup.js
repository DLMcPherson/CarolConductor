// Setup the renderer
var renderer = PIXI.autoDetectRenderer(800, 800)
renderer.backgroundColor = 0xffffff
renderer.roundPixels = true

// Standard Screen
var stage = new PIXI.Container()
  // Graphics object for lines and squares and such...
var graphics = new PIXI.Graphics();
  // Sheet Music Scan
class Dots extends PIXI.Sprite {
  constructor(){
    super(PIXI.Texture.fromImage(filename))
    this.x = 10 ; this.y = 110
    this.pivot.x = 0 ; this.pivot.y = 0
    this.width = 480 ; this.height = 640
  }
  update(){
  }
}
stage.addChild(new Dots())
stage.addChild(graphics)

  // Current Chord Indicator
var currentChord = new PIXI.Text('',{font : '48px Gill Sans', fill : 0x000000});
currentChord.x = 500
currentChord.y = 30
stage.addChild(currentChord)
  // Upcoming Chord Indicator
var nextChord = new PIXI.Text('',{font : '36px Gill Sans', fill : 0x000000});
nextChord.x = 600
nextChord.y = 30
stage.addChild(nextChord)
  // Chord Readout
var chordReadout = []
for(var ii = 0 ; ii<4; ii++) {
    chordReadout[ii] = new PIXI.Text('',{font : '36px Gill Sans', fill : 0x077f4d, align: 'left'});
    chordReadout[ii].x = 120*ii
    chordReadout[ii].y = 50
    stage.addChild(chordReadout[ii])
}
  // Words
var wordReadout = []
for(var ii = 0 ; ii<4; ii++) {
    wordReadout[ii] = new PIXI.Text('1',{font : '36px Gill Sans', fill : 0x077f4d, align: 'left'});
    wordReadout[ii].x = 120*ii
    wordReadout[ii].y = 0
    stage.addChild(wordReadout[ii])
}
