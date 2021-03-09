class Smooth{
    constructor(){
        this.DOM = {};
        this.DOM.smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }
    _addEvent(){
        for(let i = 0; i < this.DOM.smoothScrollTrigger.length; i++){
            this.DOM.smoothScrollTrigger[i].addEventListener(this.eventType, function(e){
                e.preventDefault();
    
                let href = this.getAttribute('href'); 
                let targetElement = document.getElementById(href.replace('#', '')); 
    
                const rect = targetElement.getBoundingClientRect().top;
                const offset = window.pageYOffset;
                const headerHeight = 94; 
                const target = rect + offset - headerHeight;//
    
                window.scrollTo({
                    top: target,
                    behavior: 'smooth',
                });
            });
        }
    }
}