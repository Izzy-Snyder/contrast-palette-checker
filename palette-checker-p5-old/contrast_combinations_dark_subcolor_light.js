bgcolor = [28, 28, 28]
rectColor = [240, 240, 240]
darkest = [0, 0, 0];
darker = [28, 28, 28];
dark = [51, 51, 51];
mediumdark = [77, 77, 77];
middledark = [102, 102, 102];
middlegray = [116, 116, 116];
p5jsactivepink = [241, 0, 70];
p5jspink = [237, 34, 93];
p5jspinkopacity = [237, 34, 93];

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
	text('18.4:1', 60.0, 76.66666666666667)
	fill (rectColor);
	rect (120.0, 10.0, 100);
	fill (darker);
	text('darker', 170.0, 43.333333333333336)
	text('#1C1C1C', 170.0, 60.0)
	text('15.0:1', 170.0, 76.66666666666667)
	fill (rectColor);
	rect (230.0, 10.0, 100);
	fill (dark);
	text('dark', 280.0, 43.333333333333336)
	text('#333333', 280.0, 60.0)
	text('11.1:1', 280.0, 76.66666666666667)
	fill (rectColor);
	rect (340.0, 10.0, 100);
	fill (mediumdark);
	text('medium-dark', 390.0, 43.333333333333336)
	text('#4D4D4D', 390.0, 60.0)
	text('7.4:1', 390.0, 76.66666666666667)
	fill (rectColor);
	rect (450.0, 10.0, 100);
	fill (middledark);
	text('middle-dark', 500.0, 43.333333333333336)
	text('#666666', 500.0, 60.0)
	text('5.0:1', 500.0, 76.66666666666667)
	fill (rectColor);
	rect (10.0, 120.0, 100);
	fill (middlegray);
	text('middle-gray', 60.0, 153.33333333333334)
	text('#747474', 60.0, 170.0)
	text('4.1:1', 60.0, 186.66666666666669)
	fill (rectColor);
	rect (120.0, 120.0, 100);
	fill (p5jsactivepink);
	text('p5js-active-pink', 170.0, 153.33333333333334)
	text('#f10046', 170.0, 170.0)
	text('3.8:1', 170.0, 186.66666666666669)
	fill (rectColor);
	rect (230.0, 120.0, 100);
	fill (p5jspink);
	text('p5js-pink', 280.0, 153.33333333333334)
	text('#ed225d', 280.0, 170.0)
	text('3.7:1', 280.0, 186.66666666666669)
	fill (rectColor);
	rect (340.0, 120.0, 100);
	fill (p5jspinkopacity);
	text('p5js-pink-opacity', 390.0, 153.33333333333334)
	text('#ed225d80', 390.0, 170.0)
	text('3.7:1', 390.0, 186.66666666666669)
	fill (rectColor);
	textAlign(LEFT);
	textSize(10.666666666666666);
	text('background: darker, #1C1C1C', 10.0, 247.5)
	text('UI element color: light, #F0F0F0', 10.0, 235.0)
	saveCanvas('contrast_combinations_dark_subcolor_light')
}

