//initial data from 2021 season
let playerStats = [
    { Name: 'Mikko Rantanen', Goals: 30, Assists: 36, Points: 66 },
    { Name: 'Nathan Mackinnon', Goals: 20, Assists: 45, Points: 65 },
    { Name: 'Gabriel Landeskog', Goals: 20, Assists: 32, Points: 52 },
    { Name: 'Andre Burakovsky', Goals: 19, Assists: 25, Points: 44 },
    { Name: 'Cale Makar', Goals: 8, Assists: 36, Points: 44 },
    { Name: 'Nazem Kadri', Goals: 11, Assists: 21, Points: 32 },
    { Name: 'Sam Girard', Goals: 5, Assists: 27, Points: 32 },
    { Name: 'Joonas Donskoi', Goals: 17, Assists: 14, Points: 31 },
    { Name: 'Devon Toews', Goals: 9, Assists: 22, Points: 31 },
    { Name: 'Brandon Saad', Goals: 15, Assists: 9, Points: 24 },
    { Name: 'Valeri Nichushkin', Goals: 10, Assists: 11, Points: 21 },
    { Name: 'J.T. Compher', Goals: 10, Assists: 8, Points: 18 },
    { Name: 'Tyson Jost', Goals: 7, Assists: 10, Points: 17 },
    { Name: 'Ryan Graves', Goals: 2, Assists: 13, Points: 15 },
    { Name: 'P.E. Bellemare', Goals: 9, Assists: 2, Points: 11 },
    { Name: 'Jacob Macdonald', Goals: 1, Assists: 8, Points: 9 },
    { Name: 'Connor Timmins', Goals: 0, Assists: 7, Points: 7 },
];

//this activates after user enters new player data
document.getElementById('add').addEventListener('click', () => {
    //creates variables for each input, also calculates total points
    let playerName = document.getElementById('player-name').value;
    let playerGoals = parseInt(document.getElementById('player-goals').value);
    let playerAssists = parseInt(document.getElementById('player-assists').value);
    let playerPoints = playerGoals + playerAssists;
    //pushes the object into the array
    playerStats.push({
        Name: playerName,
        Goals: playerGoals,
        Assists: playerAssists,
        Points: playerPoints
    });
    //changes the fields back to empty
    document.getElementById('player-name').value = '';
    document.getElementById('player-goals').value = '';
    document.getElementById('player-assists').value = '';
    //creates new table
    removeRows(table);
    generateTable(table, playerStats);
});

//creates new table, data is array
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

//deletes the old table
function removeRows(table) {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}

//keeps track of ascending or descending
let sortDirection = false;

//this function is exectued after the heading is clicked
function sortNumbers(columnName) {
    const dataType = typeof playerStats[0][columnName];
    sortDirection = !sortDirection;
    //checks datatype for sorting
    switch (dataType) {
        case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
    }
    //generates new table
    removeRows(table);
    generateTable(table, playerStats);
}

//ascending or descending
function sortNumberColumn(sort, columnName) {
    playerStats = playerStats.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName];
    });
}

//initial table
let table = document.querySelector("table");
let data = Object.keys(playerStats[0]);
generateTable(table, playerStats);