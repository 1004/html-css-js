import './header.css'

const TRANSTION_CLASS_NAME = 'header-transition';
const INIT = 'init';
const CHANGE = 'change';


class Header {
    constructor(el, scrollContainer, distance, eventEl = scrollContainer) {
        this.el = el;
        this.scrollContainer = scrollContainer;
        this.eventEl = eventEl;
        this.distance = distance;
        this.setState(INIT);
        this.bindEvent();
    }

    setState(state) {
        this.state = state;
    }

    bindEvent() {
        this.eventEl.addEventListener('scroll', () => {
            if (this.state !== CHANGE && this.scrollContainer.scrollTop > this.distance) {
                this.change()
            } else if (this.state !== INIT && this.scrollContainer.scrollTop <= this.distance) {
                this.reset();
            }
        }, false);
    }

    change() {
        this.setState(CHANGE);
        this.el.classList.add(TRANSTION_CLASS_NAME);
    }

    reset() {
        this.setState(INIT)
        this.el.classList.remove(TRANSTION_CLASS_NAME);
    }

}

export default Header;
