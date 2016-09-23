console.log('Loaded!');

// change the text of the main-text div

//var element=document.getElementById('main-text');
//element.innerHTML='Hahahaha.... it was a joke..!!';



// move the image


var img=document.getElementById('madi');
var marginLeft=0;
//prompt('WANNA RACE ?');
function moveRight()
{
  marginLeft=marginLeft+100;
  img.style.marginLeft=marginLeft+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight,5);
 // img.style.marginLeft='100px';
    
};