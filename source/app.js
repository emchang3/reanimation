import React from 'react';
import ReactDOM from 'react-dom';

import animate from './animus';

class Inside extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {}
        };
    }

    componentDidMount = () => {
        const pos = ReactDOM.findDOMNode(this).getBoundingClientRect();
        
        this.setState({
            style: {
                left: pos.left,
                top: pos.top,
                width: pos.width,
                height: pos.height,
                opacity: window.getComputedStyle(ReactDOM.findDOMNode(this)).opacity
            }
        });
    }

    transform = (attr, distance) => {
        const so = 'style';
        // context, styleObj, attr, distance, easing, duration, callback
        animate(this, so, attr, distance, 2, 500, () => {
            animate(this, so, attr, distance * -1, 0.5, 500);
        });
    }

    render() {
        return (
            <div style={this.state.style} id="inside">
                <button onClick={() => this.transform('top', 200)}>Sh->V</button><br />
                <button onClick={() => this.transform('left', 200)}>Sh->H</button><br />
                <button onClick={() => this.transform('height', 200)}>Ex->V</button><br />
                <button onClick={() => this.transform('width', 200)}>Ex->H</button><br />
                <button onClick={() => this.transform('opacity', -1)}>Fade</button>
            </div>
        );
    }
}

ReactDOM.render(
  <Inside />,
  document.getElementById("test-container")
);
