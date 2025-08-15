bgcolor = [251, 251, 251]
rectColor = [237, 34, 93]
darkest = [0, 0, 0];
white = [255, 255, 255];
lightest = [255, 255, 255];
lighter = [251, 251, 251];
darker = [28, 28, 28];
light = [240, 240, 240];

function setup() {
	createCanvas (560, 252.5);
	background (bgcolor);
	textAlign(CENTER);
	textSize(12.0);
	fill (rectColor);
	rect (10.0, 10.0, 100);
	fill (darkest);
	text('darkest', 60.0, 43.333333333333336)
	text('#000000', 60.0, 60.0)
	text('5.0:1', 60.0, 76.66666666666667)
	fill (rectColor);
	rect (120.0, 10.0, 100);
	fill (white);
	text('white', 170.0, 43.333333333333336)
	text('#ffffff', 170.0, 60.0)
	text('4.2:1', 170.0, 76.66666666666667)
	fill (rectColor);
	rect (230.0, 10.0, 100);
	fill (lightest);
	text('lightest', 280.0, 43.333333333333336)
	text('#FFFFFF', 280.0, 60.0)
	text('4.2:1', 280.0, 76.66666666666667)
	fill (rectColor);
	rect (340.0, 10.0, 100);
	fill (lighter);
	text('lighter', 390.0, 43.333333333333336)
	text('#FBFBFB', 390.0, 60.0)
	text('4.1:1', 390.0, 76.66666666666667)
	fill (rectColor);
	rect (450.0, 10.0, 100);
	fill (darker);
	text('darker', 500.0, 43.333333333333336)
	text('#1C1C1C', 500.0, 60.0)
	text('4.0:1', 500.0, 76.66666666666667)
	fill (rectColor);
	rect (10.0, 120.0, 100);
	fill (light);
	text('light', 60.0, 153.33333333333334)
	text('#F0F0F0', 60.0, 170.0)
	text('3.7:1', 60.0, 186.66666666666669)
	fill (rectColor);
	textAlign(LEFT);
	textSize(10.666666666666666);
	text('background: lighter, #FBFBFB', 10.0, 247.5)
	text('UI element color: p5js-pink, #ed225d', 10.0, 235.0)
	saveCanvas('contrast_combinations_light_subcolor_p5js-pink')
}

