// Creates and returns a new dancer object that can step
class Dancer{
  constructor(top, left, timeBetweenSteps){
    console.log(left, top)
    this.$node = $('<img class="dancer" id="bird'+ window.count+'"></img>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.top = top;
    this.left = left;
    //this.step();
    this.setPosition(this.top, this.left)
  }
  // step(){
  //   setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // }
  setPosition(top, left){
      var styleSettings = {
        top: this.top,
        left: this.left
      };   
    this.$node.css(styleSettings);
  }
}
