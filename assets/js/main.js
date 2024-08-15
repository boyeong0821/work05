// kitchen sequence
let mm = gsap.matchMedia();

mm.add("(min-width: 881px)", () => {
    totalCnt = 90;
    imgEl = ``;

    for (let idx = 0; idx < totalCnt; idx++) {
        firstClass = (idx===0)?"on":"";
        imgEl += `<img class="${firstClass}" src="./assets/images/sequence/${String(idx+1).padStart(5,0)}.png" alt>`;
    };

    $('#imgList').append(imgEl);

    sequence = gsap.timeline({
        scrollTrigger:{
            trigger: ".sc-kitchen .sequence-area",
            start: "0% 100%",
            end: "100% 100%",
            // markers: true,
            scrub: 0,
            onUpdate:function(self){
                idx=Math.floor(self.progress*totalCnt);
                $('#imgList img').eq(idx).addClass('on').siblings().removeClass('on');
                if (idx  >= 20) {
                    gsap.set('.sc-kitchen .sequence-area .sticky .point1 .text',{autoAlpha:1})
                }else{
                    gsap.set('.sc-kitchen .sequence-area .sticky .point1 .text',{autoAlpha:0})
                }

                if (idx  >= 40) {
                    gsap.set('.sc-kitchen .sequence-area .sticky .point2 .text',{autoAlpha:1})
                }else{
                    gsap.set('.sc-kitchen .sequence-area .sticky .point2 .text',{autoAlpha:0})
                }

                if (idx  >= 60) {
                    gsap.set('.sc-kitchen .sequence-area .sticky .point3 .text',{autoAlpha:1})
                }else{
                    gsap.set('.sc-kitchen .sequence-area .sticky .point3 .text',{autoAlpha:0})
                }
            }
        }
    });

    sequence.to('.sc-kitchen .sequence-area .sticky .point1 .text',{y:-300, delay:0.5, ease:'none'},'a');
    sequence.to('.sc-kitchen .sequence-area .sticky .point2 .text',{y:-300, delay:0.5, ease:'none'},'a');
    sequence.to('.sc-kitchen .sequence-area .sticky .point3 .text',{y:-300, delay:0.5, ease:'none'},'a');
});


// product 스와이퍼 슬라이드
const swiperSlide1 = new Swiper('.sc-product .swiper',{
    spaceBetween: 12,
    slidesPerView: "auto",
    freeMode : true,

    navigation:{
        prevEl:".btn-prev",
        nextEl:".btn-next"
    }
});


// review 스와이퍼 슬라이드
const swiperSlide2 = new Swiper('.sc-review .swiper',{
    spaceBetween: 16,
    slidesPerView: "auto",
    freeMode : true,

    navigation:{
        prevEl:".btn-prev",
        nextEl:".btn-next"
    }
});