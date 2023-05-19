import config, {SWIPER_CONTAINER_CLASS} from './config'

import './slide.css'

import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';

const swiper = new Swiper(SWIPER_CONTAINER_CLASS,config);
