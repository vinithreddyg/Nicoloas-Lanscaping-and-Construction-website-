import { LightningElement } from 'lwc';
import LANDSCAPE from '@salesforce/resourceUrl/landscape_bg';

export default class HeroSection extends LightningElement {
    get backgroundStyle() {
        return `background-image: url('${LANDSCAPE}'); background-size: cover; background-position: center; background-repeat: no-repeat;`;
    }
}
