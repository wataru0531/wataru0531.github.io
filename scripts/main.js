//JavaScript実装
document.addEventListener('DOMContentLoaded', function(){
    //Mainクラス初期化
    const main = new Main();
    
    // スムーススクロール
    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

    for(let i = 0; i < smoothScrollTrigger.length; i++){
        smoothScrollTrigger[i].addEventListener('click', function(e){
            e.preventDefault(); 

            let href = smoothScrollTrigger[i].getAttribute('href'); 
            let targetElement = document.getElementById(href.replace('#', ''));

            const rect = targetElement.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const headerHeight = 94;
            const target = rect + offset - headerHeight;

            window.scrollTo({
                top: target,
                behavior: 'smooth',
            });
        });
    }

});

class Main{
    constructor(){
        this.header = document.querySelector('.header')
        this._observers = [];
        this._init();
    }

    set observers(val){
        this._observers.push(val);
    }
    get observers(){
        return this._observers();
    }

    _init(){
        new MobileMenu();
        new Accordion();
        this.hero = new HeroSlider('.swiper-container');
        this._scrollInit();
    }

    _navAnimation(el, inview){
        if(inview){
            this.header.classList.remove('triggered');
        }else{
            this.header.classList.add('triggered');
        }
    }

    _inviewAnimation(el, inview){
        if(inview){
            el.classList.add('inview');
        }else{
            el.classList.remove('inview');
        }
    }

    _toggleSlideAnimation(el, inview){
        if(inview){
            this.hero.start();
        }else{
            this.hero.stop();
        }
    }

    _scrollInit(){
        this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false});
        this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once: false});
        this.observers = new ScrollObserver('.appear', this._inviewAnimation, {rootMargin: "-200px 0px"});
    }
}

//jquery実装
//フォーム送信後の処理
$(document).ready(function(){
    $('#form').submit(function(event){
        const formData = $('form').serialize();

        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScjSvHJgBXQTViEai3LqrJe0FDrQ0TJBOk1jABv_oZA3tJGBA/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function(){
                    $('.end-message').slideDown();
                    $('.btn').fadeOut();
                },
                200: function(){
                    $('.false-message').slideDown();
                }
            }
        });

        event.preventDefault();
    });
});