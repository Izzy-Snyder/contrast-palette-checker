bgcolor = [28, 28, 28]
white = [255, 255, 255];
lightest = [255, 255, 255];
lighter = [251, 251, 251];
light = [240, 240, 240];
yellow = [245, 220, 35];
mediumlight = [217, 217, 217];
p5contrastpink = [255, 169, 217];
middlelight = [166, 166, 166];
outlinecolor = [15, 157, 215];
dodgerblue = [30, 144, 255];

function setup() {
	createCanvas (560, 240.0);
	background (bgcolor);
	textAlign(CENTER);
	textSize(12.0);
	fill (white);
	rect (10.0, 10.0, 100);
	fill (bgcolor);
	text('white', 60.0, 43.333333333333336)
	text('#ffffff', 60.0, 60.0)
	text('17.0:1', 60.0, 76.66666666666667)
	fill (lightest);
	rect (120.0, 10.0, 100);
	fill (bgcolor);
	text('lightest', 170.0, 43.333333333333336)
	text('#FFFFFF', 170.0, 60.0)
	text('17.0:1', 170.0, 76.66666666666667)
	fill (lighter);
	rect (230.0, 10.0, 100);
	fill (bgcolor);
	text('lighter', 280.0, 43.333333333333336)
	text('#FBFBFB', 280.0, 60.0)
	text('16.5:1', 280.0, 76.66666666666667)
	fill (light);
	rect (340.0, 10.0, 100);
	fill (bgcolor);
	text('light', 390.0, 43.333333333333336)
	text('#F0F0F0', 390.0, 60.0)
	text('15.0:1', 390.0, 76.66666666666667)
	fill (yellow);
	rect (450.0, 10.0, 100);
	fill (bgcolor);
	text('yellow', 500.0, 43.333333333333336)
	text('#F5DC23', 500.0, 60.0)
	text('12.3:1', 500.0, 76.66666666666667)
	fill (mediumlight);
	rect (10.0, 120.0, 100);
	fill (bgcolor);
	text('medium-light', 60.0, 153.33333333333334)
	text('#D9D9D9', 60.0, 170.0)
	text('12.1:1', 60.0, 186.66666666666669)
	fill (p5contrastpink);
	rect (120.0, 120.0, 100);
	fill (bgcolor);
	text('p5-contrast-pink', 170.0, 153.33333333333334)
	text('#FFA9D9', 170.0, 170.0)
	text('9.7:1', 170.0, 186.66666666666669)
	fill (middlelight);
	rect (230.0, 120.0, 100);
	fill (bgcolor);
	text('middle-light', 280.0, 153.33333333333334)
	text('#A6A6A6', 280.0, 170.0)
	text('7.0:1', 280.0, 186.66666666666669)
	fill (outlinecolor);
	rect (340.0, 120.0, 100);
	fill (bgcolor);
	text('outline-color', 390.0, 153.33333333333334)
	text('#0F9DD7', 390.0, 170.0)
	text('5.5:1', 390.0, 186.66666666666669)
	fill (dodgerblue);
	rect (450.0, 120.0, 100);
	fill (bgcolor);
	text('dodgerblue', 500.0, 153.33333333333334)
	text('#1E90FF', 500.0, 170.0)
	text('5.3:1', 500.0, 186.66666666666669)
	fill (white);
	textAlign(LEFT);
	textSize(10.666666666666666);
	text('background: darker, #1C1C1C', 10.0, 235.0)
	saveCanvas('contrast_combinations_dark_large_UI')
}

