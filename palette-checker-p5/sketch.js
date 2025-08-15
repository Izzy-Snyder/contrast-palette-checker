//adjustable variables
let rectSize = 150; //size of squares in output
let rowLength = 4; //squares per row
let textsz = 18; //size of the text
let padding = textsz; //padding around edges
let readyToSave = false; //set to true when you are ready to download everything (could be a lot of files)

//instantiating global variables
let contrasts;
let bg;
let bgName;
let bgHex;
let button;
let buttonName;
let buttonHex;
let buttonContrast;
let sub;
let theme;

//preloads the contrasts file (this will be depreciated as of p5.js version 2)
function preload() {
  contrasts = loadStrings("contrasts.txt");
}


function setup() {
  
  //set variable flags and counters/holders
  palette = false;
  colorArray = [];
  rectCount = 0;
  noStroke();

  //iterate over each line of the contrast file
  for(let i=0; i<contrasts.length; i++){
       
    myStrArr = splitTokens(contrasts[i], "  "); //split file line into an array
    
    if (myStrArr[0] == "end") { //once you get to the end
      palette = false; //stop adding new colors to the palette
      
      if (sub){ //if it is a sub-pallete (valid text on buttons)
        offset = padding; //set an extra offset for the additional line of text
      }
      
      else { //otherwise set these variables so all squares are drawn
        offset = 0;
        skip = 0;
      }
      
      //calculate width and height of the canvas
      h = rectSize*ceil(rectCount/rowLength)+padding*(ceil(rectCount/rowLength))+1+padding*3 + offset;
      w = rectSize*min(rowLength, rectCount)+padding*min(rowLength, rectCount)+padding;
        
      //create canvas for the given color and set text alignment
      createCanvas(w,h);
      background(bg);
      textSize(textsz);
      textAlign(CENTER,CENTER);
      textWrap(WORD);
      textLeading(0.9*textsz);

      //set x and y coordinates to 0,0  
      x = 0;
      y = 0;
      
      //iterate through color array (skipping first one if it's a sub-pallette)
      for (let a = 0; a<colorArray.length; a++){
        
        if (sub){ //if sub-pallete, fill rectangles with the UI element color ("button")
          fill(button);
        }
        
        //otherwise, fill each rectangle with the color that matches the text
        else {
          fill(colorArray[a][2], colorArray[a][3], colorArray[a][4]);
        }
        
        //draw the rectangle
        rect(x*(rectSize+padding) + padding, y*(rectSize+padding) + padding, rectSize);
        
        //remove hyphens from color name
        cList = (splitTokens(colorArray[a][0],"-"));
        cName = '';
        for (j = 0; j<cList.length; j++){
            cName += `${cList[j]} `;
          }
          
        //if sub-palette, fill text with color that matches the text
        if (sub){
          fill(colorArray[a][2], colorArray[a][3], colorArray[a][4]);
        }
        
        //else, fill text with bg color
        else{
          fill(bg);
        }
          
        //write out the color name, the color hex, and the contrast against the button
        text(`${cName}\n\n${colorArray[a][1]}\n\n${colorArray[a][5]}`,x*(rectSize+padding)+padding+0.05*rectSize, y*(rectSize+padding)+padding+rectSize/2,0.9*rectSize);
        x++;
        if (x>= rowLength) {
          x = 0;
          y ++;
        }
      }
      
      //align text left
      textAlign(LEFT,BOTTOM);
      
      //fill with a contrasting color from the background for text
      if(sub) {
        fill(button);
      }
        
      else {
        fill(colorArray[0][2], colorArray[0][3], colorArray[0][4]);
      }
      
      //set new text leading
      textLeading(textsz);
      
      //write out theme, background, UI element color (if applicable)
      if(sub){
        text(`Theme: ${theme}\nBackground: ${bgName}, ${bgHex}\nUI element color: ${buttonName}, ${buttonHex}, ${buttonContrast} contrast with background`,padding, h-0.5*textsz);
      }
      
      else{
        text(`Theme: ${theme}\nBackground: ${bgName}, ${bgHex}`,padding, h-0.5*textsz);
      }
      
      //save canvas with appropriate name
      if(sub && readyToSave){
          saveCanvas(`${theme}-theme-${buttonName}-UI-Elements-text-combinations`)
      }
      
      else{
        if(readyToSave) {
          saveCanvas(`${theme}-theme`)
        }
      }
      
    }
    
    //if current line contains an element of the palette, add the line to the color array and increase number of rectangles
    if (palette){
       colorArray.push(myStrArr);
       rectCount++;
    }
    
    //if current line is the start of the palette,
    if (myStrArr[0] == "start"){
      bg = [myStrArr[4], myStrArr[5], myStrArr[6]]; //set background color
      bgName = myStrArr[2]; //set bg color name
      bgHex = myStrArr[3]; //set bg color hex
      palette = true;  //set palette to true (ready to add new colors)
      colorArray = []; //empty out color array
      rectCount = 0; //reset rect count to 0
      sub = myStrArr[7]; //check if it's a sub-palette
      theme = myStrArr[1]; //get theme form line of file
      themeList = (splitTokens(myStrArr[1],"-"));
        theme = '';
        for (k = 0; k<themeList.length; k++){
            if (k<themeList.length-1)
              theme += `${themeList[k]}/`;
            else{
              theme += `${themeList[k]}`;
            }
          }

      //if it is a sub-palette  
      if (sub){
        //read RGB color, name, hex, and contrast of the UI elements from next line
        subArr = splitTokens(contrasts[i+1], "  ")
        button = [subArr[2], subArr[3], subArr[4]];
        buttonName = subArr[0];
        buttonHex = subArr[1];
        buttonContrast = subArr[5];
        i++;
      }
        
    }
    
      
  }
}
