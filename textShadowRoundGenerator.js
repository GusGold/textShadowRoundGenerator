function generateTextShadow(radius, points, blur, colour, offsetX, offsetY, decimalPlaces){
    
    function addPxSuffix(value){
        if(value === 0){
            value += " ";
        } else {
            value += "px ";
        }

        return value;
    }

    blur = blur || 0;
    colour = colour || "orangered";
    offsetX = offsetX || 0;
    offsetY = offsetY || 0;
    decimalPlaces = decimalPlaces || 2;
    
    var angleIncrement = 2 / points;

    blur = addPxSuffix(blur);

    colour += ",";

    var textShadow = "text-shadow:";

    var xVal = 0;
    var yVal = 0;

    for (var angle = 0; angle < 2; angle += angleIncrement){
        xVal = addPxSuffix(+(offsetX + radius * Math.cos(angle * Math.PI)).toFixed(decimalPlaces));
        yVal = addPxSuffix(+(offsetY + radius * Math.sin(angle * Math.PI)).toFixed(decimalPlaces));

        textShadow += xVal + yVal + blur + colour;
    }

    return textShadow.slice(0, -1) + ";";
}