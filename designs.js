
// Select size input
// Select color input
let inputHigh, inputBreadth, colorPalette;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (e) {
    e.preventDefault(); //This method prevents default behavior of the form submission
        
    inputHigh = $("#inputHeight").val();
    inputBreadth= $("#inputWeight").val();
        
    makeGrid(inputHigh, inputBreadth);
});

function makeGrid(rows, col) {
    $("tr").remove(); //This removes any table previously created when the submit button is clicked

    // Your code goes here!

    for (let x = 1; x <= rows; x++) {
        $("#pixelCanvas").append('<tr id=tableau' + x +'></tr>'); //Each table created gets an id of tableau that increments
        for (let y = 1; y <= col; y++) {
            $("#tableau" + x).append("<td></td>"); //This append method finds the table by its id and appends a cell
        }
    }

    //For adding color to each cell
    $("td").click(function colorAdd (){
        const colorPalette = $("#colorPicker").val();

        if ($(this).attr("style")) { //This adds the attribute "style" to the current cell, if it does, its removed with removeAttr()
            $(this).removeAttr("style");
        }else{   //If it doesn't have a style, we add it with attr()
            $(this).attr("style", "background-color:" + colorPalette);
        }
    });

}

