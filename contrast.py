from functools import cmp_to_key
from pathlib import Path

themes = {"light":"lighter", "dark-contrast":"darker"} #input themes as a dictionary where the key is the theme name and the value is the main background color of the theme
paletteFile = "_variables.scss" #file name for color palette
randomColors = False #use unnamed colors that appear in themes
dir = "" #input directory to place output files inside. Leave blank to use current working directory

if (dir == ""):
    dir = Path.cwd() 
else:
    if not (Path(Path.cwd().joinpath(dir)).exists()):
        dir = Path.cwd().joinpath(dir).mkdir()
    else:
        dir = Path.cwd().joinpath(dir)

#hex digit to int converts hex digit to base 10 int
def hexDigitToInt(digit):
    if digit.isdigit():
        return int(digit)
    if (digit.lower() == 'a'):
        return 10
    if (digit.lower() == 'b'):
        return 11
    if (digit.lower() == 'c'):
        return 12
    if (digit.lower() == 'd'):
        return 13
    if (digit.lower() == 'e'):
        return 14
    if (digit.lower() == 'f'):
        return 15

#converts hex to RGB
def hexToRGB(hex):
    num1 = hexDigitToInt(hex[0])*16+hexDigitToInt(hex[1])
    num2 = hexDigitToInt(hex[2])*16+hexDigitToInt(hex[3])
    num3 = hexDigitToInt(hex[4])*16+hexDigitToInt(hex[5])
    return ([num1,num2,num3])

#converts RGB to luminance
def RGBToLumRGB (n):
    n = n/255
    if n <= 0.03928:
        return n/12.92
    else:
        return ((n+0.055)/1.055)**2.4

#gets relative luminance using formula found online
def contrast (hex1, hex2):

    c1 = hexToRGB(hex1.strip('#'))
    c2 = hexToRGB(hex2.strip('#'))

    #get luminance of RGB 1
    R1=RGBToLumRGB(c1[0])
    G1=RGBToLumRGB(c1[1])
    B1=RGBToLumRGB(c1[2])

    #calculate overall luminance 1
    L1 = 0.2126 * R1 + 0.7152 * G1 + 0.0722 * B1

    #get luminance of RGB 2
    R2=RGBToLumRGB(c2[0])
    G2=RGBToLumRGB(c2[1])
    B2=RGBToLumRGB(c2[2])
    
    #calculate overall luminance 2
    L2 = 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2

    #find lighter and darkrer luminance
    lighter = max(L1,L2)
    darker = min(L1,L2)

    #return ratio between them (the contrast)
    return round((lighter+0.05)/(darker+0.05),1)
    
#comparitor for sorting color items by contrast
def contrastSort(a, b):
    con1 = float(a["contrast"].partition(":")[0])
    con2 = float(b["contrast"].partition(":")[0])
    if con1 > con2:
        return -1
    elif con1 == con2:
        return 0
    else:
        return 1

#takes in a dictionary of colors and a list of background colors. 
# Outputs a dictionary with the name of the colors as the key and information on the colors as the values.
def colorPaletteCheck(colors,bgcolors):
    
    contrasts = {}
    
    colorDict = colors
    
    colors = list(colors.keys())
    
    compare_key = cmp_to_key(contrastSort)
    
    #iterate through bg colors and find contrast with each foreground color
    #add that information to a contrast set object and return those objects in a dictionary
    for color1 in bgcolors:
        smallText = []
        largeTextUI = []
        for color2 in colors:
            con = contrast(color1,color2)
            smallTextDict = {"hex":color2,"name":colorDict[color2],"RGB":str(hexToRGB(color2.strip("#"))),"contrast":(str(con) + ":1")}
            largeTextUIDict = {"hex":color2,"name":colorDict[color2],"RGB":str(hexToRGB(color2.strip("#"))),"contrast":(str(con) + ":1")}
            s = [color2, colorDict[color2],  str(hexToRGB(color2.strip("#"))), (str(con) + ":1")]
            if con>4.5:
                smallText.append(smallTextDict)
            if con>3:
                largeTextUI.append(smallTextDict)
        smallText = sorted(smallText, key=compare_key)
        largeTextUI = sorted(largeTextUI, key=compare_key)
        newContrastSet = ContrastSet(smallText,largeTextUI,colorDict[color1],color1)
        contrasts[newContrastSet.name] = newContrastSet
        
    return contrasts

#writes to a text file to be used as input in the p5.js program
#contrasts: dictionary of contrasts, 
# bg1/2: color of the main and secondary bg color, 
# Theme: name of theme, 
# outfile: name of output file. 
#small: boolean for whether to use large text or small text contrast sets
#sub: boolean for whether it's a sub-palette or not (text on button colors)
def makeTextFile(contrasts, bg1, bg2, theme, outFile,small, sub=False):
    c = contrasts[bg1]
    
    #get contrast of the UI element with the background
    buttonContrast = ""
    for l in contrasts[bg2].large:
        if(l["name"]) == bg1:
            buttonContrast = (l["contrast"])

    #write starting line for the given foreground/background
    if sub:
        outFile.write("start "  + theme + " " + contrasts[bg2].name + " " + contrasts[bg2].hex + " " + contrasts[bg2].RGBstr + " sub" + "\n")
        outFile.write(contrasts[bg1].name + " " + contrasts[bg1].hex + " "  + contrasts[bg1].RGBstr + " " + buttonContrast +"\n")
    else:
        outFile.write("start "  + theme + " " +  contrasts[bg2].name + " " + contrasts[bg2].hex  + " " + contrasts[bg2].RGBstr + " " + "\n")

    #determine whether to use small or large text contrast set
    if small:
        colorList = c.small
    else:
        colorList = c.large

    #write out the information on each color
    for s in colorList:
        outFile.write(s["name"] + " " + str(s["hex"]) + " " +  str(s["RGB"]).translate({ord(i): None for i in '[],'}) + " " + str(s["contrast"])+ "\n")
    
    #write final line
    outFile.write("end\n\n")

#writes to a markdown file that lists out the color information in text form
def makeMDFile(contrasts, bg1, bg2, theme, outFile,small, sub=False):
    c = contrasts[bg1]

    
    if sub:
        outFile.write("## UI component color: "  + contrasts[bg1].name + " (" + contrasts[bg1].hex + ")\n")
    else:
        outFile.write("# Theme: "  + theme + "\n\n")
        outFile.write("## UI or large text colors: \n")

    if small:
        colorList = c.small
    else:
        colorList = c.large

    for s in colorList:
        outFile.write( "* " + s["name"] + " (" + str(s["hex"]) + ")" + str(s["RGB"]) +  " contrast: " + str(s["contrast"])+ "\n")

    outFile.write("\n")

#main function reads in palette file, creates data structure of contrasts, outputs to a file
#assumes an input file of scss variables where hex codes are indicated with a # and variables are indicated with a $
def main():
    
    #open the file, initialize a dictonary to store the variable names and hex values
    f = open(paletteFile,"r")
    file = (f.readlines())
    palette = {}

    #iterate through file and add characters to color names and color hex values
    for line in file:
        colorName = ""
        colorHex = ""
        #always check if line contains hex. 
        # If random colors is set to true, no need for line to start with a $ for a variable
        if "#" in line and (line[0] == "$" or (randomColors)):
            name = True
            color = False
            #add things to either the color name or the color hex depending on surrounding characters
            for char in line:
                if (char != ":" and name):
                    colorName += char
                if (char == ";"):
                    color = False
                if (color):
                    colorHex +=char
                if (char == ":"):
                    name = False
                    color = True
            #if it's a color like '#313' then that actually means '#313313', so add on a copy of the start
            if (len(colorHex)<7):
                colorHex = colorHex + colorHex[2:] 
            #take out extra characters from the name and hex
            colorName = colorName.strip("$  / ")
            colorHex = colorHex.strip(",\n ").upper()
            
            #this excludes opacity colors (I have not implemented alpha compositing)
            if (len(colorHex)<=7):  
                palette [colorHex] = colorName

    #generate a reference dictionary of every color's contrast with every other color
    contrasts = colorPaletteCheck(palette,palette)
    print(contrasts)
    

    #opens an output file
    outFileText = open(Path(dir).joinpath("contrasts.txt"), "w")
    outFileMDDict = {}
    
    #makes a dictionary for the contrasts of each theme
    allThemeContrasts = {}
    for themeName in themes.keys():
        bg = themes[themeName]
        allThemeContrasts[themeName] = contrasts[bg].large
        fileThemeName = themeName.replace("/","_")
        s = Path(dir).joinpath("palette-contrasts-" + fileThemeName + ".md")
        f = open(s, "w")
        outFileMDDict[themeName] = f

    #add all theme contrasts to the output files
    for theme in allThemeContrasts:
        makeTextFile(contrasts,themes[theme], themes[theme], theme, outFileText, False, False) 
        makeMDFile(contrasts,themes[theme], themes[theme], theme, outFileMDDict[theme], False, False)
        for subColor in allThemeContrasts[theme]:
            makeTextFile(contrasts,subColor["name"], themes[theme], theme, outFileText, False, True) 
            makeMDFile(contrasts,subColor["name"], themes[theme], theme, outFileMDDict[theme], False, True)


#define a contrast set class   
class ContrastSet():
    def __init__(self, small, large, name, hex):
        self.small = small
        self.large = large
        self.name = name
        self.hex = hex
        self.RGB = str(hexToRGB(hex.strip("#")))
        self.RGBstr = self.RGB.translate({ord(i): None for i in '[],'})


#run main
main()
    