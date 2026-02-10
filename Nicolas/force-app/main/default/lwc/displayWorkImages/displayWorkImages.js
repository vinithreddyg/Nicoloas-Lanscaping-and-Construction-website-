import { LightningElement } from 'lwc';
//import WORK_IMAGES from '@salesforce/resourceUrl/imagesSite';
import WORK_IMAGES from '@salesforce/resourceUrl/imagesSite';
import Demo from '@salesforce/resourceUrl/demo1';

export default class DisplayWorkImages extends LightningElement {
    // Assuming the static resource 'work_images' is a ZIP and images are at the root with .jpg extensions
    img1 = `${WORK_IMAGES}/images/img1`;
    img2 = `${WORK_IMAGES}/images/img2`;
    img3 = `${WORK_IMAGES}/images/img3.jpeg`;
    img4 = `${WORK_IMAGES}/images/img4.jpeg`;
    demo = Demo;
}
