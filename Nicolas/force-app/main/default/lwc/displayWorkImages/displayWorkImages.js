import { LightningElement } from 'lwc';
import WORK_IMAGES from '@salesforce/resourceUrl/work_images';

export default class DisplayWorkImages extends LightningElement {
    img1 = WORK_IMAGES + '/img1.png';
    img2 = `${WORK_IMAGES}/img2.jpg`;
    img3 = `${WORK_IMAGES}/img3.jpg`;
    img4 = `${WORK_IMAGES}/img4.jpg`;
}