"use strict"

var beatInsideBar = 0
var clock =  0
var now = Date.now()
var currentVerse = 0
var beatNumber = -4
var unitsUntilNextBeat = 4
window.setInterval(function() {
  // Time management
  clock += Date.now() - now
  now = Date.now()
  console.log(clock)
  // Check if the current beats length has elapsed
  unitsUntilNextBeat--
  if(unitsUntilNextBeat == 0) {
      // Update to the new beat
      beatNumber += 1
      if(beatNumber >= chords.length) {
          currentVerse++
          beatNumber = 0
      }
      // If in the initial countdown...
      if(beatNumber < 0) {
          unitsUntilNextBeat = 4
          // Chord Indicator
          currentChord.text = ""
          nextChord.text = ""
          // Word readout
          for(var ii = 0 ; ii<4; ii++) {
              wordReadout[ii].text = countIn[ii]
          }
          beatInsideBar = beatNumber + 4
      } else {
      // If in the body of the song...
          unitsUntilNextBeat = beatTimes[beatNumber]
          // Chord Indicator
          currentChord.text = chords[beatNumber]
          if(beatNumber + 1 < chords.length) {
              nextChord.text = chords[beatNumber+1]
          }
          // Readout of current bar of lyrics
          var barNumber = Math.floor(beatNumber/4)
          for(var ii = 0 ; ii<4; ii++) {
            wordReadout[ii].text = words[currentVerse][barNumber*4 + ii]
            chordReadout[ii].text = chords[barNumber*4 + ii]
          }
          beatInsideBar = (beatNumber % 4)
      }
  }
  // Display the moving lyric indicator
  graphics.clear()
  graphics.lineStyle(5, 0x078752);
  graphics.moveTo(0+beatInsideBar*120,45)
  graphics.lineTo(120+beatInsideBar*120,45)
  // Rendering the stage
  renderer.render(stage)
},unitTime)

// Keyboard Listener Loop
var key = null
document.addEventListener("keydown",function(event) {
  // Log time and key
  key = event.keyCode
  console.log(clock,key)
})


// Wrap it up
var mount = document.getElementById("mount")
mount.insertBefore(renderer.view, mount.firstChild)
