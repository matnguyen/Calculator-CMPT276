// This function dynamically updates the "Percent" field in the table
// If an invalid calculation is performed, "N/A" is shown 
function updatePercentage(cell) {
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

// This function computes the mean of all grades
function mean(table, result) {
    var sum = 0
    var numGrades = 0
    for (var i = 1, row; row = table.rows[i]; i++) {
        var cell = row.cells[3]
        var numerator = cell.children[0].value
        var denominator = cell.children[1].value

        // Check if input fields are empty
        if (numerator.length != 0 && denominator.length != 0) {
            sum += (numerator / denominator)
            numGrades++
        }
    }
    // If no grades have been entered
    if (numGrades == 0) {
        result.innerHTML = ""
    }
    else {
        result.innerHTML = "Mean of grades: " + (sum / numGrades).toFixed(2)
    }
}

// This function computes the weighted mean of all grades
function weighted() {

}