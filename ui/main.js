console.log('Loaded!');

// change the text of the main-text div

//var element=document.getElementById('main-text');
//element.innerHTML='Hahahaha.... it was a joke..!!';



// move the image


var img=document.getElementById('madi');
var marginLeft=0;  var marginRight=0;
//prompt('WANNA RACE ?');

function moveRight()
{
  marginLeft=marginLeft+1;
  img.style.marginLeft=marginLeft+'px';
}

function moveLeftt()
{
  marginRight=marginRight+1;
  img.style.marginRight=marginRight+'px';
}



img.onclick=function()
{
    
    for(var i=1;i<10;i++)
{
    var interval=setInterval(moveRight,50);
    var interval1=setInterval(moveLeft,50);
    
}
    
 // img.style.marginLeft='100px';
    
};