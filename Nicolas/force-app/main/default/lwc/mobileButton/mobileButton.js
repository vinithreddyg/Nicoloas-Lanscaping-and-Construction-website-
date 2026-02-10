import { LightningElement } from 'lwc';

export default class MobileButton extends LightningElement {
    handleClick() {
        // Example behavior: open phone dialer on mobile or navigate to contact section
        // Update the tel: number as needed
        const phone = '+15551234567';
        // Prefer mobile dialer when available
        window.open(`tel:${phone}`, '_self');
    }
}
