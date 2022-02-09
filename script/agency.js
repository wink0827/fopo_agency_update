(($, window, document, undefined) => {

    class Agency {
        init (){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
        }

        
        header(){

          // 스크롤 탑 값이 0이면 높이 72 기본
          // -추가된 클래스 모두 삭제
          // 헤더.removeClass('addH60');

          // 스크롤 탑 값이 0이 아니면 높이 60
          // -추가 클래스 addH60
          // 헤더.addClass('addH60');

          // 스크롤 이벤트 발생하면

          let newTop = $ (window).scrollTop();
          let  oldTop = newTop;
          let x = '';

          $(window).scroll(function(){
            if($(window).scrollTop() == 0){
              $('#header').removeClass('addH60');
              $('#header').removeClass('addShow');
              $('#header').removeClass('addHide');

            }
            
            else{
              $('#header').addClass('addH60');

              // 위 아래 방향 설정
              newTop = $ (window).scrollTop();

              x = oldTop-newTop > 0 ? "UP" : "DOWN";

              if (x=='UP'){
                $('#header').addClass('addShow');
                $('#header').removeClass('addHide');
              }

              if (x=='DOWN'){
                $('#header').addClass('addHide');
                $('#header').removeClass('addShow');
              }

              oldTop = newTop;
            }
          });













            const mainBtn = $('.main-btn');
            const sub = $('.sub');
            const nav = $('#nav');
            const subBtn = $('.sub-btn');
            const subSub = $('.sub-sub');
      
                 
                  mainBtn.on({
                    mouseenter(e){
                      const $this = $(this);
                            sub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                    },

                    focusin(e){
                      const $this = $(this);
                            sub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                    }
                  });
      
                  nav.on({
                    mouseleave(){
                      sub.stop().fadeOut(300);
                      subSub.stop().fadeOut(300);
                    }
                  });
      
      
                 
                  subBtn.on({
                    mouseenter(){
                      const $this = $(this);
                            subSub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                    },
                    
                    focusin(){
                      const $this = $(this);
                            subSub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                    }
                  });

        }

        section1(){
          const slideWrap = $('.slide-wrap');
          const slideView = $('.slide-view');
          let cnt = 0;

          function mainSlide(){
            slideWrap.stop().animate({left: -1903*cnt}, 600, 'easeInOutExpo', function(){
              if(cnt>2) {cnt=0}
              if(cnt<0) {cnt=2}
              slideWrap.stop().animate({left: -1903*cnt}, 0);
            });
          }

          function nextCount(){
            cnt++;
            mainSlide();
          }

          function prevCount(){
            cnt--;
            mainSlide();
          }

          // setInterval(prevCount, 3000);

          let s = null;
          let e = null; 
          let dS = null
          let dE = null;
          let mD = null;
    
          slideView.on({  
            mousedown: function(event){
              s = event.clientX;
              dS = event.clientX - slideWrap.offset().left-1903;
              mD = true;
            },

            mouseup: function(event){
              e = event.clientX;
              mD = false;
              
              if( (s-e) > 0 ){ 
              nextCount();
              }

              if( (s-e) < 0 ){  
              prevCount();
              }
            },

            mousemove(e){  
             
              if( mD !== true ){return} 
              dE = e.clientX;
              slideWrap.css({left: dE - dS });
            }

          });
        }
        
        section2(){}
        section3(){}
        section4(){}
        section5(){}
        section6(){}
        section7(){}
        section8(){}
        section9(){}
        section10(){}
        footer(){}

    }

    const newAgency = new Agency ();
    newAgency.init();

})(jQuery, window, document);