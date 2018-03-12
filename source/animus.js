const animate = (context, styleObj, attr, distance, easing, duration, callback) => {
    const startTime = new Date().getTime();
    const startPos = parseFloat(context.state[styleObj][attr]);
    const unit = attr === 'opacity' ? '' : 'px'

    var animationTimer = setInterval(() => {
        var step = Math.min(1, (new Date().getTime() - startTime) / duration);

        const futureState = {};
        futureState[styleObj] = { ...context.state[styleObj] };
        futureState[styleObj][attr] = `${startPos + (Math.pow(step, easing) * parseFloat(distance))}${unit}`;

        context.setState(futureState);

        if( step == 1) {
            clearInterval(animationTimer);

            if (callback) callback();
        };
    }, 0.001);
};

export default animate;