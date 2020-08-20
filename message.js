!function(){
    let view = document.querySelector('section.message')

    let model={
        fetch:function () {
            //获取数据
            var query = new AV.Query('Message');
            return query.find();   //返回一个promise对象
        },
        save:function (name,content) {
            //创建数据
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({'content': content,'name':name}) ////返回一个promise对象
        },
        initAV: function(){
            AV.init({
                appId: "zufcBlS3mzHl1PgiccUJefCK-gzGzoHsz",
                appKey: "cpM3C7146DVEKj2aIURk3HFh",
                serverURL: "https://zufcbls3.lc-cn-n1-shared.com"
            });
        },
    };

    let controller ={
        view: null,
        messageList: null,
        form:null,
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('#postMessage');
            this.model.ininAV();
            this.loadMessage();
            this.bindEvents();

        },
        loadMessage: function () {
            this.model.fetch().then((messages) => {
                // message 就是 objectId 为 582570f38ac247004f39c24b 的 message 实例
                let array = messages.map((item)=>  item.attributes)
                console.log(array);
                array.forEach((item)=>{
                    let li = document.createElement('li')
                    li.innerText = `${item.name}: ${item.content}`
                    let messageList =document.querySelector('#messageList');
                    this.messageList.appendChild(li);   //append 和 appendChild 都可以
                })
            }),function (error) {
                alert('Fail to submit');
            };
        },
        bindEvents:function () {
            this.form.addEventListener('submit', (e)=> {
                e.preventDefault();
                this.saveMessage();
            })
        },
        saveMessage:function () {
            let myForm = this.form;
            let content = myForm.querySelector('input[name=content]').value;
            let name = myForm.querySelector('input[name=name]').value;
            this.model.save(name,content).then(function(object){
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList =document.querySelector('#messageList');
                messageList.appendChild(li);
                myForm.querySelector('input[name=name]').value = ''
                myForm.querySelector('input[name=content]').value = ''
            })
        },
    }
    controller.init(view,model);
}.call()




/*let button = myForm.querySelector('input[type=submit]')
button.addEventListener('click',function(){})
let input = myForm.querySelector('input[name=content]');
input.addEventListener('keypress',function (e) {
    if(e.keyCode === 13) //判断按下的按钮是否是回车
    {

    }
})

const TestObject = AV.Object.extend('TestObject');//创建TestObject表
//const TestObject = AV.Object.extend('Message')
const testObject = new TestObject();
//在表中存放一行数据
testObject.set('words', 'Hello world!');
//数据内容是 words: Hello World!
//如果保存成功那么就打印log
testObject.save().then((testObject) => {
    console.log('保存成功。')
})


testObject.save({words:'hello world'}).then(function(){
    alert('LeanCloud Rocks');
})
*/

