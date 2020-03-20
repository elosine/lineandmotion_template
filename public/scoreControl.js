var socket = io();
//When Start Piece button is pressed
document.getElementById("startpieceForm").onsubmit = function(event) {
  event.preventDefault();
  startpiece();
};

function startpiece() {
var uiStartTime = document.getElementById("startingTimeFF").value;
  socket.emit('startpiece', {
    eventdata: eventSet,
    startTime: uiStartTime
  });
}
