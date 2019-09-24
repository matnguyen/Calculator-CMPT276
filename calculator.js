// This function dynamically updates the "Percent" field in the table
// If an invalid calculation is performed, "N/A" is shown 
function updatePercentage (cell) {
    var input_cell = (cell).closest('tr').cells[3];
    var numerator = input_cell.children[0].value
    var denominator = input_cell.children[1].value
    var percent = (numerator / denominator) * 100

    // Update "Percent" with grade percentage
    var percent_cell = (cell).closest('tr').cells[4]
    if (numerator.length == 0 && denominator.length == 0) {
        percent_cell.innerHTML = ""
    }
    else if (numerator.length == 0 || denominator.length == 0 || denominator == 0) {
        percent_cell.innerHTML = "N/A"
    }
    else {
        percent_cell.innerHTML = percent.toFixed(2) + "%"
    }
}