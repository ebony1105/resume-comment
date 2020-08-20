/*!function(){
    var view = document.querySelector('#TopNavBar')
    view.style.border='1px solid red'
    var controller = {
        view: view;
        init: function(){
            var view = this.view;
            window.addEventListener('scroll',function(x){
                if (window.scrollY > 0)
                {
                    topNavBar.classList.add('sticky')
                }
                else
                {
                    topNavBar.classList.remove('sticky')
                }
            })
        }
    }
    controller.init(view);
}.call()
*/


!function()
{
    var view = document.querySelector('#topNavBar')
    var controller = {
        view:null,
        init: function () {
            this.view = view
            this.bindEvents()
        },
        bindEvents:function()
        {
            var view= this.view
            window.addEventListener('scroll',(x) => {
                if (window.scrollY > 0)
                {
                    //如果用this的话，这里的this指的是用户触发的元素
                    this.active();
                }
                else
                {
                    this.deactive();
                }
            })   //箭头函数可以废除this  箭头函数this内外不变
            //如果不改成箭头函数的话，可以bind（this）
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }

    }
    controller.init(view)
}.call()



