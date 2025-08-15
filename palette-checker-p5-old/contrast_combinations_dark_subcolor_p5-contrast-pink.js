bgcolor = [28, 28, 28]
rectColor = [255, 169, 217]
darkest = [0, 0, 0];
darker = [28, 28, 28];
dark = [51, 51, 51];
mediumdark = [77, 77, 77];
middledark = [102, 102, 102];

function setup() {
	createCanvas (560, 142.5);
	background (bgcolor);
	textAlign(CENTER);
	textSize(12.0);
	fill (rectColor);
	rect (10.0, 10.0, 100);
	fill (darkest);
	text('darkest', 60.0, 43.333333333333336)
	text('#000000', 60.0, 60.0)
	text('11.9:1', 60.0, 76.66666666666667)
	fill (rectColor);
	rect (120.0, 10.0, 100);
	fill (darker);
	text('darker', 170.0, 43.333333333333336)
	text('#1C1C1C', 170.0, 60.0)
	text('9.7:1', 170.0, 76.66666666666667)
	fill (rectColor);
	rect (230.0, 10.0, 100);
	fill (dark);
	text('dark', 280.0, 43.333333333333336)
	text('#333333', 280.0, 60.0)
	text('7.2:1', 280.0, 76.66666666666667)
	fill (rectColor);
	rect (340.0, 10.0, 100);
	fill (mediumdark);
	text('medium-dark', 390.0, 43.333333333333336)
	text('#4D4D4D', 390.0, 60.0)
	text('4.8:1', 390.0, 76.66666666666667)
	fill (rectColor);
	rect (450.0, 10.0, 100);
	fill (middledark);
	text('middle-dark', 500.0, 43.333333333333336)
	text('#666666', 500.0, 60.0)
	text('3.3:1', 500.0, 76.66666666666667)
	fill (rectColor);
	textAlign(LEFT);
	textSize(10.666666666666666);
	text('background: darker, #1C1C1C', 10.0, 137.5)
	text('UI element color: p5-contrast-pink, #FFA9D9', 10.0, 125.0)
	saveCanvas('contrast_combinations_dark_subcolor_p5-contrast-pink')
}

