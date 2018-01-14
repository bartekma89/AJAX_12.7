var baseURL = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': "2385",
    'X-Auth-Token': '4cd85f8035f9d4ba11ed06a25d897ee4'
}

$.ajaxSetup({
    headers: myHeaders
})


$.ajax({
        method: 'GET',
        url: baseURL + '/board'
    })
    .done(function (response) {
        setupBoard(response)
    })

function setupBoard(board) {
    var newBoard = new Board(board.name, board.id);
    $('.container').append(newBoard.$element);
    var columns = board.columns;
    setupColumn(columns, newBoard);
}

function setupColumn(columns, board) {
    columns.forEach(function (column) {
        var newColumn = new Column(column.id, column.name);
        board.addColumn(newColumn);
        var cards = column.cards;
        setupCard(newColumn, cards);
    })
}

function setupCard(column, cards) {
    cards.forEach(function (card) {
        var newCard = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        column.addCard(newCard);
    })
}
