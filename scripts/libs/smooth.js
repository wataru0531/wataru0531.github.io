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
                e.preventDefault(); //デフォルトのaタグの動作をキャンセル。これを書かないとスムーススクロール無しでジャンプする。
    
                let href = this.getAttribute('href'); //hrefの値を取得する。例：#features
                let targetElement = document.getElementById(href.replace('#', '')); //replaceで#を除く。例：features
    
                const rect = targetElement.getBoundingClientRect().top;  //プラウザの上からtargetElement上までの高さを取得
                const offset = window.pageYOffset;  //現在のスクロール量を取得
                const headerHeight = 94;  //ヘッダーの高さを取得。fixedを指定している場合やheaderを浮かしている場合のみ必要。
                const target = rect + offset - headerHeight;//
    
                window.scrollTo({
                    top: target,
                    behavior: 'smooth',
                });
            });
        }
    }
}