    /*父类*/
    class Praise {
        constructor(num, element) {
            this.num = num;
            this.element = element;
        }
        clickBtn() {
            this.element.click(() => {
                if (this.num < 10) {
                    this.num = add(this.num);
                    this.element.removeClass('banned-click');
                    $('.love').addClass('love-show');
                    setTimeout(()=>{
                        $('.love').removeClass('love-show');
                    },500);
                } else {
                    this.num = 0;
                    this.element.addClass('banned-click')
                }
                console.log(this.num);
            });
        }
    }
    /*子类*/
    class Thumb extends Praise {
        constructor(num, element) {
            super(num, element);
        }
    }

    export default {Thumb}