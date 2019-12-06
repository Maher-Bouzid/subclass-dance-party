const birds = ['black','electric','grey','light-blue','linear-blue','rasta','white','yellow']
const bird = [LeftBird, RightBird];
var count = 0;
$(document).ready(function() {
  window.dancers = [];

  function generateBirds(event, postionTop = event.originalEvent.pageY, positionLeft = event.originalEvent.pageX) {
    console.log(event)
    count++
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var startingPosition = Math.round(Math.random());
    var dancer = new bird[Math.round(Math.random())](postionTop, positionLeft,
      Math.random() * 1000 // Speed of the bird
    );
    dancer.$node.attr("src", "assets/gifs/" + birds[Math.floor(Math.random()* birds.length)] + ".gif");
    dancer.$node.attr("height", Math.floor(Math.random() * 150)+ 50 + "px");
    $('body').append(dancer.$node);
    if(dancer.position){
      $('#bird' + count).animate({left: '-50%',top: (Math.floor(Math.random() * 600) - 300) + 'px'}, (Math.random() * 5000 )+ 5000)
    }else {
      $('#bird' + count).animate({left: '100%',top: (Math.floor(Math.random() * 600) - 300) + 'px'}, (Math.random() * 5000 )+ 5000)
    }
  }

  $('body').on('click',generateBirds);
  $('body').keypress(function(event){
    generateBirds(event, Math.floor($('body').innerHeight()* Math.random()), Math.floor($('body').innerWidth() * Math.random()))
  })
});
