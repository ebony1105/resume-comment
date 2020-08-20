!function () {
    var view = document.querySelector('nav.menu > ul')

    var controller = {
        view:null,
        aTags:null,
        /*initAnimation: function(){   //初始化动画
            function animate(time) {
                requestAnimationFrame(this.animate.bind(this))
                TWEEN.update(time);
            };
            requestAnimationFrame(animate);
        },*/
        scrollToElement:function(){
            let top = element.offsetTop;
            let currentTop = window.scrollY; //当前的页面位置
            let targetTop = top - 60; //目标到达的页面位置
            let s = targetTop - currentTop;
            //let t = Math.abs((s/100) * 300);
            window.scrollTo(0, currentTop + s);
        },
        bindEvents:function (element) {
            let aTags = this.view.querySelectorAll('nav.menu > ul > li > a');
            for (let i = 0; i < aTags.length; i++)
            {
                aTags[i].addEventListener('click',(x) => {
                    x.preventDefault();
                    let a = x.currentTarget;
                    let li = a.parentNode
                    let bro = li.parentNode.children
                    for (let i = 0; i < bro.length; i++) {
                        bro[i].classList.remove('acitive')
                    }
                    li.classList.add('active')
                    let href = a.getAttribute('href');
                    let element = document.querySelector(href);
                    this.scrollToElement(element)
                })
            }
        },
        init:function (view)
        {
            this.view = view;
            //this.aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
            //this.initAnimation()
            this.bindEvents();
        },
    }
    controller.init(view);
}.call()



    /*if(t>500){t=500;}

            const coords = { y: currentTop };
            const tween = new TWEEN.Tween(coords)
                .to({ y: targetTop },t)
                .easing(TWEEN.Easing.Cubic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                    console.log(0,coords.y)
                })
                .start();

            /*let n = 40; //动多少次
            let i = 0;
            let currentTop =  window.scrollY; //当前的页面位置
            let targetTop = top - 80; //目标到达的页面位置
            let distance = (targetTop - currentTop) / n //每次动多少位置
            let duration = 500 / n; //duration time
            let id = setInterval(()=>{
                if(i === n)
                {
                    window.clearInterval(id)
                    return
                }
                else
                {
                    i = i + 1
                    window.scrollTo(0, currentTop + distance * i)
                }
            },duration)*/
