module.exports.move = function(context, hDistance, vDistance, easing, time) {

  var startTime = new Date().getTime();
  var startPos = [parseFloat(context.state.inline.left), parseFloat(context.state.inline.top)];

  var horizontalTimer = setInterval(function () {
    var step = Math.min(1, (new Date().getTime() - startTime) / time);
    context.setState({
      inline: {
        left: startPos[0] + (Math.pow(step, easing) * parseFloat(hDistance)) + "px",
        top: startPos[1] + (Math.pow(step, easing) * parseFloat(vDistance)) + "px"
      }
    });
    if( step == 1) { clearInterval(horizontalTimer); };
  }, 0.0001);
};

module.exports.fade = function(context, opChange, easing, time) {

  var startTime = new Date().getTime();
  var startOp = parseFloat(context.state.inline.opacity);

  var fadeTimer = setInterval(function () {
    var step = Math.min(1, (new Date().getTime() - startTime) / time);
    context.setState({
      inline: {
        opacity: startOp + (Math.pow(step, easing) * opChange)
      }
    });
    if( step == 1) { clearInterval(fadeTimer); };
  }, 0.0001);

};
