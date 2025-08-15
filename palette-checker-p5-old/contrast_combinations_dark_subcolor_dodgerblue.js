bgcolor = [28, 28, 28]
rectColor = [30, 144, 255]
darkest = [0, 0, 0];
darker = [28, 28, 28];
dark = [51, 51, 51];
white = [255, 255, 255];
lightest = [255, 255, 255];
lighter = [251, 251, 251];

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
	text('6.5:1', 60.0, 76.66666666666667)
	fill (rectColor);
	rect (120.0, 10.0, 100);
	fill (darker);
	text('darker', 170.0, 43.333333333333336)
	text('#1C1C1C', 170.0, 60.0)
	text('5.3:1', 170.0, 76.66666666666667)
	fill (rectColor);
	rect (230.0, 10.0, 100);
	fill (dark);
	text('dark', 280.0, 43.333333333333336)
	text('#333333', 280.0, 60.0)
	text('3.9:1', 280.0, 76.66666666666667)
	fill (rectColor);
	rect (340.0, 10.0, 100);
	fill (white);
	text('white', 390.0, 43.333333333333336)
	text('#ffffff', 390.0, 60.0)
	text('3.2:1', 390.0, 76.66666666666667)
	fill (rectColor);
	rect (450.0, 10.0, 100);
	fill (lightest);
	text('lightest', 500.0, 43.333333333333336)
	text('#FFFFFF', 500.0, 60.0)
	text('3.2:1', 500.0, 76.66666666666667)
	fill (rectColor);
	rect (10.0, 120.0, 100);
	fill (lighter);
	text('lighter', 60.0, 153.33333333333334)
	text('#FBFBFB', 60.0, 170.0)
	text('3.1:1', 60.0, 186.66666666666669)
	fill (rectColor);
	textAlign(LEFT);
	textSize(10.666666666666666);
	text('background: darker, #1C1C1C', 10.0, 247.5)
	text('UI element color: dodgerblue, #1E90FF', 10.0, 235.0)
	saveCanvas('contrast_combinations_dark_subcolor_dodgerblue')
}

