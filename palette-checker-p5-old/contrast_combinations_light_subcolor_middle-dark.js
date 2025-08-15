bgcolor = [251, 251, 251]
rectColor = [102, 102, 102]
white = [255, 255, 255];
lightest = [255, 255, 255];
lighter = [251, 251, 251];
light = [240, 240, 240];
yellow = [245, 220, 35];
mediumlight = [217, 217, 217];
darkest = [0, 0, 0];
p5contrastpink = [255, 169, 217];

function setup() {
	createCanvas (560, 252.5);
	background (bgcolor);
	textAlign(CENTER);
	textSize(12.0);
	fill (rectColor);
	rect (10.0, 10.0, 100);
	fill (white);
	text('white', 60.0, 43.333333333333336)
	text('#ffffff', 60.0, 60.0)
	text('5.7:1', 60.0, 76.66666666666667)
	fill (rectColor);
	rect (120.0, 10.0, 100);
	fill (lightest);
	text('lightest', 170.0, 43.333333333333336)
	text('#FFFFFF', 170.0, 60.0)
	text('5.7:1', 170.0, 76.66666666666667)
	fill (rectColor);
	rect (230.0, 10.0, 100);
	fill (lighter);
	text('lighter', 280.0, 43.333333333333336)
	text('#FBFBFB', 280.0, 60.0)
	text('5.5:1', 280.0, 76.66666666666667)
	fill (rectColor);
	rect (340.0, 10.0, 100);
	fill (light);
	text('light', 390.0, 43.333333333333336)
	text('#F0F0F0', 390.0, 60.0)
	text('5.0:1', 390.0, 76.66666666666667)
	fill (rectColor);
	rect (450.0, 10.0, 100);
	fill (yellow);
	text('yellow', 500.0, 43.333333333333336)
	text('#F5DC23', 500.0, 60.0)
	text('4.1:1', 500.0, 76.66666666666667)
	fill (rectColor);
	rect (10.0, 120.0, 100);
	fill (mediumlight);
	text('medium-light', 60.0, 153.33333333333334)
	text('#D9D9D9', 60.0, 170.0)
	text('4.1:1', 60.0, 186.66666666666669)
	fill (rectColor);
	rect (120.0, 120.0, 100);
	fill (darkest);
	text('darkest', 170.0, 153.33333333333334)
	text('#000000', 170.0, 170.0)
	text('3.7:1', 170.0, 186.66666666666669)
	fill (rectColor);
	rect (230.0, 120.0, 100);
	fill (p5contrastpink);
	text('p5-contrast-pink', 280.0, 153.33333333333334)
	text('#FFA9D9', 280.0, 170.0)
	text('3.3:1', 280.0, 186.66666666666669)
	fill (rectColor);
	textAlign(LEFT);
	textSize(10.666666666666666);
	text('background: lighter, #FBFBFB', 10.0, 247.5)
	text('UI element color: middle-dark, #666666', 10.0, 235.0)
	saveCanvas('contrast_combinations_light_subcolor_middle-dark')
}

