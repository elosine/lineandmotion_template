var socket = io();
//When Start Piece button is pressed
document.getElementById("createEventsForm").onsubmit = function(event) {
  event.preventDefault();
  createEvents();
};

function createEvents() {
  var uiStartTime = document.getElementById("startingTimeFF").value;
  socket.emit('createEvents', {
    eventdata: eventSet,
    startTime: uiStartTime
  });
}

document.getElementById("gobutton").onclick = function(event) {
  event.preventDefault();
  startpiece();
};

function startpiece() {
  var uiStartTime = document.getElementById("startingTimeFF").value;
  socket.emit('startpiece', {});
}
