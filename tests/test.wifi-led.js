'use strict';

var m = require('mraa');                                         
var ledState = true;   
var myLed = new m.Gpio(44); 
 
myLed.dir(m.DIR_OUT);
 
function periodicActivity() {
  myLed.write(ledState ? 1 : 0);
  ledState = !ledState;        
  setTimeout(periodicActivity, 1000);
}                                         
periodicActivity(); 
