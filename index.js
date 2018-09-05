var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians, instruments){
  var Beatles = []
  for (var n = 0; n< musicians.length; n++)
   {Beatles.push(musicians[n] + " plays " +  instruments[n])}
return Beatles
} 
console.log(theBeatlesPlay(musicians,instruments))
// 
//
//
var facts = ["He was the last Beatle to learn to drive","He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]
var f= 0
var lennonFacts = []
function johnLennonFacts(facts)
{while (f< facts.length) {lennonFacts.push(facts[f] + "!!!"); f++; }
  return lennonFacts
} 
var facts = ["foo","bar"]
console.log(johnLennonFacts(facts));


