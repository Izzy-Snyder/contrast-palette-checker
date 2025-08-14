#todo
#eventually: move everything to p5.js OR use a python drawing module OR output a file that p5 can use as input(probably easies)
#add in labels for the pages
#make directory with file path
#account for opacity

import math
from functools import cmp_to_key

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

def hexToRGB(hex):
    num1 = hexDigitToInt(hex[0])*16+hexDigitToInt(hex[1])
    num2 = hexDigitToInt(hex[2])*16+hexDigitToInt(hex[3])
    num3 = hexDigitToInt(hex[4])*16+hexDigitToInt(hex[5])
    return ([num1,num2,num3])


def RGBToLumRGB (n):
    n = n/255
    if n <= 0.03928:
        return n/12.92
    else:
        return ((n+0.055)/1.055)**2.4

def contrast (hex1, hex2):

    c1 = hexToRGB(hex1.strip('#'))
    c2 = hexToRGB(hex2.strip('#'))

    R1=RGBToLumRGB(c1[0])
    G1=RGBToLumRGB(c1[1])
    B1=RGBToLumRGB(c1[2])

    L1 = 0.2126 * R1 + 0.7152 * G1 + 0.0722 * B1

    R2=RGBToLumRGB(c2[0])
    G2=RGBToLumRGB(c2[1])
    B2=RGBToLumRGB(c2[2])

    L2 = 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2

    lighter = max(L1,L2)
    darker = min(L1,L2)

    return round((lighter+0.05)/(darker+0.05),1)
    

def contrastSort(a, b):
    con1 = float(a[3].partition(":")[0])
    con2 = float(b[3].partition(":")[0])
    if con1 > con2:
        return -1
    elif con1 == con2:
        return 0
    else:
        return 1

def colorPaletteCheck(colors,bgcolors):
    
    contrasts = {}
    
    colorDict = colors
    colors = list(colors.keys())
    compare_key = cmp_to_key(contrastSort)
    for color1 in bgcolors:
        smallText = []
        largeTextUI = []
        '''
        print("background: " + colorDict[color1] + " (" + color1 + ")")
        print()
        '''
        for color2 in colors:
            con = contrast(color1,color2)
            s = [color2, colorDict[color2],  str(hexToRGB(color2.strip("#"))), (str(con) + ":1")]
            if con>4.5:
                smallText.append(s)
            if con>3:
                largeTextUI.append(s)
        smallText = sorted(smallText, key=compare_key)
        largeTextUI = sorted(largeTextUI, key=compare_key)
        newContrastSet = ContrastSet(smallText,largeTextUI,colorDict[color1],color1)
        contrasts[newContrastSet.name] = newContrastSet
        '''
        print("Small text:")
        for item in smallText:
            print(item)
        print()
        print("Large Text or UI:")
        for item in largeTextUI:
            print(item)
        
        print()
        print()
        '''
    return contrasts

def makeTextFile(contrasts, bg1, bg2, theme, outFile,small, sub=False):
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
        outFile.write( "* " + s[1] + " (" + str(s[0]) + ")" + str(s[2]) +  " contrast: " + str(s[3])+ "\n")

    outFile.write("\n")
    

def makeP5(contrasts, bg1,bg2,rectSize,rowLength,padding,outFile,small, sub=False):
    c = contrasts[bg1]
    w = round(rectSize*rowLength+padding*(rowLength+1))

    
    
    backgroundRGB = str(contrasts[bg2].RGB)
    rectRGB = str(contrasts[bg1].RGB)
    

    outFile.write("bgcolor = "  + backgroundRGB + "\n")
    if sub:
        outFile.write("rectColor = "  + rectRGB + "\n")

    if small:
        colorList = c.small
    else:
        colorList = c.large

    for s in colorList:
        outFile.write( s[1].replace("-","") + " = " + str(s[2]) + ";\n")
    
    h = round(rectSize*(math.ceil(len(colorList)/rowLength))+padding*((math.ceil(len(colorList)/rowLength))+1))+padding
    if sub:
        h+=padding*1.25

    outFile.write("\nfunction setup() {")
    outFile.write("\n\tcreateCanvas ("+str(w)+", "+str(h)+");")
    outFile.write("\n\tbackground (bgcolor);")
    outFile.write("\n\ttextAlign(CENTER);")
    outFile.write("\n\ttextSize("+str(12*rectSize/100)+");")
   
    x = 0
    y = 0
    for s in (colorList):
        n = (s[1].replace("-",""))
        if sub:
            outFile.write("\n\tfill (rectColor);")
        else:
            outFile.write("\n\tfill ("+n+");")
        outFile.write("\n\trect "+ str((x*(rectSize+padding)+padding, y*(rectSize+padding)+padding, rectSize))+";")
        if sub:
            outFile.write("\n\tfill ("+n+");")
        else:
            outFile.write("\n\tfill (bgcolor);")
        outFile.write("\n\ttext"+str((str(s[1]),x*(rectSize+padding)+padding+rectSize/2, y*(rectSize+padding)+padding+rectSize/3))+"")
        outFile.write("\n\ttext"+str(((s[0]),x*(rectSize+padding)+padding+rectSize/2, y*(rectSize+padding)+padding+rectSize/2))+"")
        outFile.write("\n\ttext"+str((s[3],x*(rectSize+padding)+padding+rectSize/2, y*(rectSize+padding)+padding+2*rectSize/3))+"")

        x+=1
        if (x >= rowLength):
            y+=1
            x = 0

    if sub:
        outFile.write("\n\tfill (rectColor);") 
    else:
        outFile.write("\n\tfill (" + colorList[0][1].replace("-","")+ ");") 


        
    outFile.write("\n\ttextAlign(LEFT);")
    outFile.write("\n\ttextSize("+str(16*rectSize/150)+");")
    if sub:
        outFile.write("\n\ttext"+str(("background: "+ bg2 + ", " + str(contrasts[bg2].hex), padding, h-padding/2))+"") #find way to add hex later
        outFile.write("\n\ttext"+str(("UI element color: "+ str(c.name) + ", " + str(c.hex),padding, h-1.75*padding))+"")
    else:
        outFile.write("\n\ttext"+str(("background: "+ str(c.name) + ", " + str(c.hex),padding, h-padding/2))+"")
    outFile.write("\n\tsaveCanvas('" + outFile.name[:-3]+"')")
    outFile.write("\n}\n\n")


def main():
    #print(contrast("F0F0F0","F0F0F0"))
    #print(contrast("#ED225D","#F5DC22"))
    lightbg = "lighter"
    darkbg = "darker"
    rectSize = 100
    rowLength = 5
    padding = rectSize/10


    f = open("palette.txt","r")
    file = (f.readlines())
    palette = {}
    paletteInv = {}
    for line in file:
        colorName = ""
        colorHex = ""
        if line[0] == "$":
            name = True
            color = False
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
            if (len(colorHex)<7):
                colorHex = colorHex + colorHex[2:]   
            #print(colorHex)
            palette [colorHex.strip()] = colorName.strip("$")
            paletteInv [colorName.strip("$")] = colorHex.strip()


    contrasts = colorPaletteCheck(palette,palette)
    #print(contrasts)


    outFileTextLight = open("pallete_contrasts_light.md", "w")
    outFileTextDark = open("pallete_contrasts_dark.md", "w")


    outFileLight = open("contrast_combinations_light_large_UI.js", "w")

    makeP5(contrasts,lightbg,lightbg,rectSize,rowLength,padding, outFileLight,True)

    outFileDark = open("contrast_combinations_dark_large_UI.js", "w")

    makeP5(contrasts,darkbg,darkbg,rectSize,rowLength,padding, outFileDark,True)


    #print(contrasts['p5js-pink'].large)
    lightContrasts = []
    for c in contrasts[lightbg].large:
        lightContrasts.append(c[1])

    darkContrasts = []
    for c in contrasts[darkbg].large:
        darkContrasts.append(c[1])

    outPutList = [outFileDark.name,outFileLight.name]
    
    makeTextFile(contrasts,lightbg, lightbg, "light", outFileTextLight, False, False)     
    makeTextFile(contrasts,darkbg, darkbg, "dark", outFileTextDark, False, False)     
    
    for subColor in contrasts.keys():
        if subColor in lightContrasts:
            outFileSubLight = open("contrast_combinations_light_subcolor_" + subColor + ".js", "w")
            outPutList.append(outFileSubLight.name)
            makeP5(contrasts,subColor, lightbg,rectSize,rowLength,padding, outFileSubLight,False, True)
            makeTextFile(contrasts,subColor,lightbg, "light", outFileTextLight, False, True)     

        if subColor in darkContrasts:
            outFileSubDark = open("contrast_combinations_dark_subcolor_" + subColor + ".js", "w")
            outPutList.append(outFileSubDark.name)
            makeP5(contrasts,subColor, darkbg,rectSize,rowLength,padding, outFileSubDark,False, True)
            makeTextFile(contrasts,subColor,darkbg, "dark/contrast", outFileTextDark, False, True)     


    indexOld = open("index-reference.html","r")
    indexNew = open("index.html", "w")

    script = False
    for line in indexOld:
        
        if ('<script src="sketch.js"></script>' in line):
            script = True
        else:
            indexNew.write(line)
        if script:
           for o in outPutList:
            indexNew.write('\t\t<script src="'+o+'"></script>\n') 
            script = False
    

    '''
    for key in contrasts:
        c = contrasts[key]
        outFile.write("Background: ")
        outFile.write(c.name + "\n")
        outFile.write("Small Text: ")
        outFile.write(str(c.small))
    '''
    #colorPaletteCheck(["000000","FFFFFF","F0F0F0"])
class ContrastSet():
    def __init__(self, small, large, name, hex):
        self.small = small
        self.large = large
        self.name = name
        self.hex = hex
        self.RGB = str(hexToRGB(hex.strip("#")))



main()
    
