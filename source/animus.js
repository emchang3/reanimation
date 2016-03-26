module.exports.hMove = function(context, hDistance, easing, time) {
  var startTime = new Date().getTime();
  var startPos = [parseFloat(context.state.inline.left), parseFloat(context.state.inline.top)];

  var horizontalTimer = setInterval(function () {
    var step = Math.min(1, (new Date().getTime() - startTime) / time);
    context.setState({
      inline: {
        left: startPos[0] + (Math.pow(step, easing) * parseFloat(hDistance)) + "px",
        top: context.state.inline.top,
        opacity: context.state.inline.opacity
      }
    });
    if( step == 1) { clearInterval(horizontalTimer); };
  }, 0.0001);
};

module.exports.vMove = function(context, vDistance, easing, time) {
  var startTime = new Date().getTime();
  var startPos = [parseFloat(context.state.inline.left), parseFloat(context.state.inline.top)];

  var verticalTimer = setInterval(function () {
    var step = Math.min(1, (new Date().getTime() - startTime) / time);
    context.setState({
      inline: {
        left: context.state.inline.left,
        top: startPos[1] + (Math.pow(step, easing) * parseFloat(vDistance)) + "px",
        opacity: context.state.inline.opacity
      }
    });
    if( step == 1) { clearInterval(verticalTimer); };
  }, 0.0001);
};

module.exports.fade = function(context, opChange, easing, time) {
  var startTime = new Date().getTime();
  var startOp = parseFloat(context.state.inline.opacity);

  var fadeTimer = setInterval(function () {
    var step = Math.min(1, (new Date().getTime() - startTime) / time);
    context.setState({
      inline: {
        left: context.state.inline.left,
        top: context.state.inline.top,
        opacity: startOp + (Math.pow(step, easing) * opChange)
      }
    });
    if( step == 1) { clearInterval(fadeTimer); };
  }, 0.0001);
};
