var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');

var app={
    questions:[
        {
            q:'Java is a ?', 
            options:['high-level programming language','object-oriented(class-based) programming language','functional,imperative and reflective programming language','All the above'],
            answer:4,
        },
        {
            q:'What is the size of boolean variable?', 
            options:['8 bit','16 bit','32 bit','not precisely defined'],
            answer:2,
        },
        {
            q:'What is the default value of long variable?', 
            options:['0','0.0','0L','not defined'],
            answer:3,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
    ],

    index:0,

    load:function(){
        if(this.index<=this.questions.length-1){
                    quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                    op1.innerHTML=this.questions[this.index].options[0];
                    op2.innerHTML=this.questions[this.index].options[1];
                    op3.innerHTML=this.questions[this.index].options[2];
                    op4.innerHTML=this.questions[this.index].options[3];
                
                       this.scoreCard();
                    }
                    else{

                    quizBox.innerHTML="Quiz is Over!!!"      
                    op1.style.display="none";
                    op2.style.display="none";
                    op3.style.display="none";
                    op4.style.display="none";
                    btn.style.display="none";
                    }
     },

        next:function(){
        this.index++;
        this.load();
     },

     check:function(ele){
           
        var id=ele.id.split('');
        
        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            ele.className="correct";
            ele.innerHTML="Correct";
            this.scoreCard();
        }
        else{
            ele.className="Incorrect";
            ele.innerHTML="Incorrect";
        }

},

notClickAble:function(){
    for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
    }
},

clickAble:function(){
    for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''

    }
},

score:0,
scoreCard:function(){
 scoreCard.innerHTML=this.score+"/"+this.questions.length;
}

}

window.onload=app.load();

    function button(ele){
            app.check(ele);
            app.notClickAble();
   }

    function  next(){
      app.next();
      app.clickAble();
} 
