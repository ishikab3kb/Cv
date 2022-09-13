

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var audio = document.getElementById('my-audio')
audio.play();
  });
}

/*function handleclick() {
  alert("I have been clicked");
}*/
