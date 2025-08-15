bgcolor = [251, 251, 251]
darkest = [0, 0, 0];
darker = [28, 28, 28];
dark = [51, 51, 51];
mediumdark = [77, 77, 77];
middledark = [102, 102, 102];

function setup() {
	createCanvas (560, 130.0);
	background (bgcolor);
	textAlign(CENTER);
	textSize(12.0);
	fill (darkest);
	rect (10.0, 10.0, 100);
	fill (bgcolor);
	text('darkest', 60.0, 43.333333333333336)
	text('#000000', 60.0, 60.0)
	text('20.3:1', 60.0, 76.66666666666667)
	fill (darker);
	rect (120.0, 10.0, 100);
	fill (bgcolor);
	text('darker', 170.0, 43.333333333333336)
	text('#1C1C1C', 170.0, 60.0)
	text('16.5:1', 170.0, 76.66666666666667)
	fill (dark);
	rect (230.0, 10.0, 100);
	fill (bgcolor);
	text('dark', 280.0, 43.333333333333336)
	text('#333333', 280.0, 60.0)
	text('12.2:1', 280.0, 76.66666666666667)
	fill (mediumdark);
	rect (340.0, 10.0, 100);
	fill (bgcolor);
	text('medium-dark', 390.0, 43.333333333333336)
	text('#4D4D4D', 390.0, 60.0)
	text('8.2:1', 390.0, 76.66666666666667)
	fill (middledark);
	rect (450.0, 10.0, 100);
	fill (bgcolor);
	text('middle-dark', 500.0, 43.333333333333336)
	text('#666666', 500.0, 60.0)
	text('5.5:1', 500.0, 76.66666666666667)
	fill (darkest);
	textAlign(LEFT);
	textSize(10.666666666666666);
	text('background: lighter, #FBFBFB', 10.0, 125.0)
	saveCanvas('contrast_combinations_light_large_UI')
}

