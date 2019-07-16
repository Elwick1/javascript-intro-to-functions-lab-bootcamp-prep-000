
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function iloveyougrandma(string) {
  return string.iloveyou,too
}


function logShout(string) {
  console.log('HELLO') 
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
 	if (string.toLowerCase() === string) {
      return "I can't hear you!" 
      } else if (string.toUpperCase() === string) {
        return "YES INDEED!"
      } else if (string.iloveyougrandma() === string) {
        return "I love you, too."
      }
}