function ageIndays(){
    
    
      var datee = document.getElementById("setDate1");
      var date =document.getElementById("setDate2");
      
      var date1 = datee.value;
      var  date2 = date.value;
      console.log(date2);
      console.log(date1); 
      var age = ((Date.parse(date2)-Date.parse(date1))/(1000*3600*24));
      var year = parseInt(age/365);
      var month = parseInt((age%365)/30);
      var day = parseInt(((age%365)%30));
      document.getElementById("myage").innerHTML = age+" days: \n"+year+" Years "+month+" month "+day+"  days ";
    //   var diff = date2-date1;
    //   console.log(diff);
    //   console.log("date1 ="+date1+"\ndate2= "+date2+"\n"+diff/(1000*3600*24)+"  days");
    // console.log(diff);
}
 
var day =new Date();
document.getElementById('toYear').innerHTML = day.getFullYear();
document.getElementById('toDay').innerHTML = day.getDate();
document.getElementById('toMonth').innerHTML = day.getMonth()+ 1;
document.getElementById('Hour').innerHTML = day.getHours();
document.getElementById('Min').innerHTML = day.getMinutes();
document.getElementById('sec').innerHTML = day.getSeconds();
 
function reset(){
    document.getElementById('myage').remove();
}
function gCat(){  
    var image = document.createElement('img');
    var getid = document.getElementById('imgCatch');
    image.src="img/amt.gif";
    getid.append(image); 
  //  document.getElementById('img').src="img/amt.gif";
}
// rock paper scissor start____

function rpsGame(myChoice){
//  console.log(myChoice.id);
 var ran =  Math.floor(Math.random()*3)+1;

if(myChoice.id=='rock' && ran==1){
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var getid1 = document.getElementById('resultSec1');
    var getid2 = document.getElementById('resultSec2');
   image1.src = 'img/th.jpg';
   image2.src = 'img/th.jpg';
   getid1.append(image1);
   getid2.append(image2);

    document.getElementById('result').innerHTML=" Score ====level";
    document.getElementById('vs').innerHTML="VS";
    document.getElementById('imgSec').remove();
}
if(myChoice.id=='rock' && ran==2){
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var getid1 = document.getElementById('resultSec1');
    var getid2 = document.getElementById('resultSec2');
   image1.src = 'img/th.jpg';
   image2.src = 'img/paper.jpg';
   getid1.append(image1);
   getid2.append(image2);

    document.getElementById('result').innerHTML="!!You lose!!";
    document.getElementById('vs').innerHTML="VS";
    document.getElementById('imgSec').remove();


     
}
if(myChoice.id=='rock' && ran==3){
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var getid1 = document.getElementById('resultSec1');
    var getid2 = document.getElementById('resultSec2');
   image1.src = 'img/th.jpg';
   image2.src = 'img/scessors.jpg';
   getid1.append(image1);
   getid2.append(image2);

    document.getElementById('result').innerHTML="!!You WON!!";
    document.getElementById('vs').innerHTML="VS";
    document.getElementById('imgSec').remove();


}
// for paper 
if(myChoice.id=='paper' && ran==1){
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var getid1 = document.getElementById('resultSec1');
    var getid2 = document.getElementById('resultSec2');
   image1.src = 'img/paper.jpg';
   image2.src = 'img/th.jpg';
   getid1.append(image1);
   getid2.append(image2);

    document.getElementById('result').innerHTML="!!You WON!!";
    document.getElementById('vs').innerHTML="VS";
    document.getElementById('imgSec').remove();

}
if(myChoice.id=='paper' && ran==2){
    
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var getid1 = document.getElementById('resultSec1');
    var getid2 = document.getElementById('resultSec2');
   image1.src = 'img/paper.jpg';
   image2.src = 'img/paper.jpg';
   getid1.append(image1);
   getid2.append(image2);

    document.getElementById('result').innerHTML="Score ====level";
    document.getElementById('vs').innerHTML="VS";
    document.getElementById('imgSec').remove();


}
if(myChoice.id=='paper' && ran==3){
     
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var getid1 = document.getElementById('resultSec1');
    var getid2 = document.getElementById('resultSec2');
   image1.src = 'img/paper.jpg';
   image2.src = 'img/scessors.jpg';
   getid1.append(image1);
   getid2.append(image2);

    document.getElementById('result').innerHTML="!!You lose!!";
    document.getElementById('vs').innerHTML="VS";
    document.getElementById('imgSec').remove();
}
// for scissor
if(myChoice.id=='scissor' && ran==1){

      
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var getid1 = document.getElementById('resultSec1');
    var getid2 = document.getElementById('resultSec2');
   image1.src = 'img/scessors.jpg';
   image2.src = 'img/th.jpg';
   getid1.append(image1);
   getid2.append(image2);

    document.getElementById('result').innerHTML="!!You lose!!";
    document.getElementById('vs').innerHTML="VS";
    document.getElementById('imgSec').remove();

}
if(myChoice.id=='scissor' && ran==2){
      
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var getid1 = document.getElementById('resultSec1');
    var getid2 = document.getElementById('resultSec2');
   image1.src = 'img/scessors.jpg';
   image2.src = 'img/paper.jpg';
   getid1.append(image1);
   getid2.append(image2);

    document.getElementById('result').innerHTML="!! You WON!!!";
    document.getElementById('vs').innerHTML="VS";
    document.getElementById('imgSec').remove();
    

}
if(myChoice.id=='scissor' && ran==3){
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var getid1 = document.getElementById('resultSec1');
    var getid2 = document.getElementById('resultSec2');
   image1.src = 'img/scessors.jpg';
   image2.src = 'img/scessors.jpg';
   getid1.append(image1);
   getid2.append(image2);

    document.getElementById('result').innerHTML="Score ====level";
    document.getElementById('vs').innerHTML="VS";
    document.getElementById('imgSec').remove();
    
}


} 
// change button 

var allButtons=document.getElementsByTagName('button');
// console.log(allButtons);
var copybutton = [];
for(var i=0;i<allButtons.length;i++){
    copybutton.push(allButtons[i].classList[1]);
}

function changeButton(btnColor){
    // console.log(btnColor.value);
    if(btnColor.value=='red'){
        btnred('btn-danger');
    }
    else if(btnColor.value=='blue'){
        btnred('btn-primary');
    }
    else if(btnColor.value=='green'){
        btnred('btn-success');
    }
    else if(btnColor.value=='random'){
        btnrandom();
    }
    else if(btnColor.value=='reset'){
        btnreset();
    }
}
function btnred(color){
    for(var i =0;i<allButtons.length;i++){
    allButtons[i].classList.remove(allButtons[i].classList[1]);
   allButtons[i].classList.add(color);
    
    }

}
function btnreset(){
    for(var i =0;i<allButtons.length;i++){
    allButtons[i].classList.remove(allButtons[i].classList[1]);
   allButtons[i].classList.add(copybutton[i]);
    }
}
 function btnrandom(){
var color =['btn-primay','btn-success','btn-info','btn-danger','btn-warning'];
for(var i =0; i<allButtons.length; i++){
var randomNum = Math.floor(Math.random()*5)
    allButtons[i].classList.remove(allButtons[i].classList[1]);
   allButtons[i].classList.add(color[randomNum]);
    
    }

} 

// Card_game_start
 var count1 = 0;
var bitCount =0;
function showImg(){
bitCount++;
    var allImage = ['img1.png','img2.png','img3.jpeg','img4.png'];
    var imageGet = document.createElement('img');
     var GetId = document.getElementById('selfSec');
    // for(let i= 0;i<allImage.length; i++){
        var ran=Math.floor(Math.random()*4)
        imageGet.src='img/'+allImage[ran];
    // }
    GetId.append(imageGet);
    // console.log(allImage[ran]);
 if(ran == 0){
     count1+=10;
 }
 else if(ran == 1){
    count1+=11;
    }

    else if(ran == 2){
        count1+=5;
    }
    else if(ran == 3){
        count1+=9;
    }
    // console.log(count1);  
    document.getElementById('Your_score').innerHTML=count1; 
}


//Self_Section_END

// Bot section start

var count2 = 0;
// var GetId =  document.getElementById('botSec')
function showImg2(){
    var allImage = ['img1.png','img2.png','img3.jpeg','img4.png'];
for(let i= 0;i<bitCount; i++){
            var imageGet = document.createElement('img');

     var GetId1 =  document.getElementById('botSec');
            var ran=Math.floor(Math.random()*4)
            imageGet.src='img/'+allImage[ran];
            GetId1.append(imageGet);
        // console.log(allImage[ran]);
        if(ran == 0){
            count2+=10;
        }
        else if(ran == 1){
        count2+=11;
        }
    
        else if(ran == 2){
           count2+=5;
       }
       else if(ran == 3){
           count2+=9;
       }
       //console.log(count2); 
       document.getElementById('Bot_score').innerHTML=count2; 
    }
   if(count1 > count2){
    document.getElementById('cardResult').innerHTML="!!Your win!!"
}
else if(count1 < count2){
    document.getElementById('cardResult').innerHTML="You lose"
}
else{
    document.getElementById('cardResult').innerHTML="Draw"
}
   
}
function refresh(){
    count1 = count2 = bitCount= 0;
    document.getElementById('Your_score').innerHTML=count1; 
    document.getElementById('Bot_score').innerHTML=count2; 
    
}
 


