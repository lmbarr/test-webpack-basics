import image from './imgs/image.png';
import image1s from './imgs/image1s.png';
import images from './imgs/images.png';
import image3 from './imgs/images3.png';
import images12 from './imgs/images12.png';
import index from './imgs/index.png'

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');

img1.src = image;
img2.src = image1s;
img3.src = image3;
img4.src = images12;
img5.src = index;
img6.src = images;

// Show depency graph online tooling
// https://medium.com/@joeclever/three-simple-ways-to-inspect-a-webpack-bundle-7f6a8fe7195d