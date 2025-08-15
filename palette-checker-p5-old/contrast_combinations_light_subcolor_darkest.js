bgcolor = [251, 251, 251]
rectColor = [0, 0, 0]
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
p5jspink = [237, 34, 93];
p5jspinkopacity = [237, 34, 93];
p5jsactivepink = [241, 0, 70];
middlegray = [116, 116, 116];
middledark = [102, 102, 102];

function setup() {
	createCanvas (560, 362.5);
	background (bgcolor);
	textAlign(CENTER);
	textSize(12.0);
	fill (rectColor);
	rect (10.0, 10.0, 100);
	fill (white);
	text('white', 60.0, 43.333333333333336)
	text('#ffffff', 60.0, 60.0)
	text('21.0:1', 60.0, 76.66666666666667)
	fill (rectColor);
	rect (120.0, 10.0, 100);
	fill (lightest);
	text('lightest', 170.0, 43.333333333333336)
	text('#FFFFFF', 170.0, 60.0)
	text('21.0:1', 170.0, 76.66666666666667)
	fill (rectColor);
	rect (230.0, 10.0, 100);
	fill (lighter);
	text('lighter', 280.0, 43.333333333333336)
	text('#FBFBFB', 280.0, 60.0)
	text('20.3:1', 280.0, 76.66666666666667)
	fill (rectColor);
	rect (340.0, 10.0, 100);
	fill (light);
	text('light', 390.0, 43.333333333333336)
	text('#F0F0F0', 390.0, 60.0)
	text('18.4:1', 390.0, 76.66666666666667)
	fill (rectColor);
	rect (450.0, 10.0, 100);
	fill (yellow);
	text('yellow', 500.0, 43.333333333333336)
	text('#F5DC23', 500.0, 60.0)
	text('15.1:1', 500.0, 76.66666666666667)
	fill (rectColor);
	rect (10.0, 120.0, 100);
	fill (mediumlight);
	text('medium-light', 60.0, 153.33333333333334)
	text('#D9D9D9', 60.0, 170.0)
	text('14.9:1', 60.0, 186.66666666666669)
	fill (rectColor);
	rect (120.0, 120.0, 100);
	fill (p5contrastpink);
	text('p5-contrast-pink', 170.0, 153.33333333333334)
	text('#FFA9D9', 170.0, 170.0)
	text('11.9:1', 170.0, 186.66666666666669)
	fill (rectColor);
	rect (230.0, 120.0, 100);
	fill (middlelight);
	text('middle-light', 280.0, 153.33333333333334)
	text('#A6A6A6', 280.0, 170.0)
	text('8.6:1', 280.0, 186.66666666666669)
	fill (rectColor);
	rect (340.0, 120.0, 100);
	fill (outlinecolor);
	text('outline-color', 390.0, 153.33333333333334)
	text('#0F9DD7', 390.0, 170.0)
	text('6.8:1', 390.0, 186.66666666666669)
	fill (rectColor);
	rect (450.0, 120.0, 100);
	fill (dodgerblue);
	text('dodgerblue', 500.0, 153.33333333333334)
	text('#1E90FF', 500.0, 170.0)
	text('6.5:1', 500.0, 186.66666666666669)
	fill (rectColor);
	rect (10.0, 230.0, 100);
	fill (p5jspink);
	text('p5js-pink', 60.0, 263.3333333333333)
	text('#ed225d', 60.0, 280.0)
	text('5.0:1', 60.0, 296.6666666666667)
	fill (rectColor);
	rect (120.0, 230.0, 100);
	fill (p5jspinkopacity);
	text('p5js-pink-opacity', 170.0, 263.3333333333333)
	text('#ed225d80', 170.0, 280.0)
	text('5.0:1', 170.0, 296.6666666666667)
	fill (rectColor);
	rect (230.0, 230.0, 100);
	fill (p5jsactivepink);
	text('p5js-active-pink', 280.0, 263.3333333333333)
	text('#f10046', 280.0, 280.0)
	text('4.8:1', 280.0, 296.6666666666667)
	fill (rectColor);
	rect (340.0, 230.0, 100);
	fill (middlegray);
	text('middle-gray', 390.0, 263.3333333333333)
	text('#747474', 390.0, 280.0)
	text('4.5:1', 390.0, 296.6666666666667)
	fill (rectColor);
	rect (450.0, 230.0, 100);
	fill (middledark);
	text('middle-dark', 500.0, 263.3333333333333)
	text('#666666', 500.0, 280.0)
	text('3.7:1', 500.0, 296.6666666666667)
	fill (rectColor);
	textAlign(LEFT);
	textSize(10.666666666666666);
	text('background: lighter, #FBFBFB', 10.0, 357.5)
	text('UI element color: darkest, #000000', 10.0, 345.0)
	saveCanvas('contrast_combinations_light_subcolor_darkest')
}

