import './backtop.css'

const INIT = 'init';
const CHANGE = 'change';

class BackTop {
    constructor(el, scrollContainer, distance, eventEl = scrollContainer) {
        this.el = el;
        this.scrollContainer = scrollContainer;
        this.distance = distance;
        this.eventEl = eventEl;
        this.setState(INIT);
        this.bindEvent();
        this.reset();

    }

    setState(state) {
        this.state = state;
    }

    bindEvent() {
        this.eventEl.addEventListener('scroll', () => {
            if (this.state !== CHANGE && this.scrollContainer.scrollTop > this.distance) {
                this.chagne()
            } else if (this.state !== INIT && this.scrollContainer.scrollTop <= this.distance) {
                this.reset();
            }
        });
        this.el.addEventListener('click',()=>{
           this.scrollTop();
        });
    }


    reset(){
        this.setState(INIT);
        //隐藏
        this.el.classList.add('backtop-hide')
    }

    chagne(){
        this.setState(CHANGE)
        //显示
        this.el.classList.remove('backtop-hide')
    }

    scrollTop() {
        this.scrollContainer.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    }
}

export default BackTop;
