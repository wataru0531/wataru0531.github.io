class Accordion {
    constructor(){
        this.DOM = {};
        this.DOM.triggers = document.querySelectorAll('.js-menu');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType(){
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _addEvent(){
        for(let i = 0; i < this.DOM.triggers.length; i++){
            let trigger = this.DOM.triggers[i];
            let content = trigger.nextElementSibling;
            trigger.addEventListener(this.eventType, function(){
                content.classList.toggle('is-open');
            });
        }
    }

}