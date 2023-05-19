import './header.css'

import Header from 'components/header'


const scrollContainer = document.getElementById('index-page');
const headerEl = document.querySelector('.header');

const header = new Header(headerEl,scrollContainer,10);
