import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

export default class Parallax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: `parallaxWrapper-${uuid()}`,
            top: 0
        };
    }

    componentDidMount() {
        const offsets = document.getElementById(this.state.id).getBoundingClientRect();
        const top = offsets.top + window.pageYOffset;
        this.setState({
            top
        });
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    checkVisible(elm) {
        const rect = elm.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    handleScroll() {
        let parallaxWrapper = document.getElementById(this.state.id);
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        let yScrollPosition = window.scrollY;
        const relativeScroll = yScrollPosition % viewHeight;
        let parallaxFactor = this.returnMultiplier();
        if (this.checkVisible(parallaxWrapper)) {
            this.setTranslate("0%", relativeScroll * parallaxFactor, parallaxWrapper);
        }
    }

    returnMultiplier() {
        let speed = this.props.speed;
        if (this.props.speed < 0) {
            speed = 0;
        }
        if (this.props.speed > 10) {
            speed = 10;
        }
        speed = Math.round(speed);
        console.log('speed', speed);
        speed = (1 - (10 - speed) / 10) * -1;
        return speed;
    }

    setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this), false);
    }

    render() {
        return (
            <div id={this.state.id}>
                {this.props.children}
            </div>
        );
    }
}

Parallax.defaultProps = {
    speed: 0
};

Parallax.propTypes = {
    speed: PropTypes.number
};