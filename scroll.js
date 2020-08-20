!function()
{
    var specialTags = document.querySelectorAll('[data-x]')
    for(let i =0;i<specialTags.length; i++){
        specialTags[i].classList.add('offset')
    }

    findClosetAndRemoveOffset();

    let liTags = document.querySelectorAll('nav.menu > ul > li')
    for(let i=0; i<liTags.length; i++){

        liTags[i].onmouseenter = function(x){
            x.currentTarget.classList.add('active')

        }
        liTags[i].onmouseleave = function(x){
            x.currentTarget.classList.remove('active')
        }
    }

    window.addEventListener('scroll',function(x){
        findClosetAndRemoveOffset();   //这种形式是可行的 不会互相覆盖了
    })



    function findClosetAndRemoveOffset()
    {
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for(let i =1;i<specialTags.length; i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
                minIndex = i
            }
        }
        // minIndex 就是里窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#'+ id + '"]')
        let li = a.parentNode
        let bro = li.parentNode.children
        for(let i=0; i<bro.length; i++){
            bro[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
}.call()















