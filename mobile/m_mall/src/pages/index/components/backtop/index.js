import 'components/backtop'
import './backtop.css'

import BackTop from 'components/backtop'

const el = document.querySelector('.index-backtop-container');
const scrollContainer = document.getElementById('index-page');

const bt = new BackTop(el,scrollContainer,20);
