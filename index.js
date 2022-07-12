
var numberOfDrums=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){

var buttonInnerHtml=this.innerHTML;


switch (buttonInnerHtml) {
  case "D1":
  var tom1=new Audio("sounds/tom-1.mp3");
  tom1.play();
    break;

    case "D2":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
      break;

    case "D3":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
      break;

    case "D4":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
      break;

      case "SN":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
        break;

        case "CY":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
          break;

          case "KB":
          var kick=new Audio("sounds/kick-bass.mp3");
          kick.play();
            break;

  default:
    console.log(buttonInnerHtml);
}

  });
}


