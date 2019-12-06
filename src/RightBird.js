class RightBird extends Dancer{
	constructor(top, left, timeBetweenSteps){
	    super(top, left, timeBetweenSteps);
	    this.$node.css({'transform' : 'rotateY(0.5turn)'})
	    this.position = "right";
	}
}