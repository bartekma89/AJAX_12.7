function Board(name) {
    var self = this;
    this.name = name || 'Kanban Board';
    this.$element = createBoard();

    function createBoard() {
        var $board = $('<div>').addClass('board');
        var $boardTitle = $('<h1>').addClass('board-title').text(self.name);
        var $createColumn = $('<button>').addClass('create-column').text('Add column');
        var $boardDelete = $('<button>').addClass('btn-delete').text('X');
        var $columnContainer = $('<div>').addClass('column-container');

        $boardDelete.click(function () {
            self.removeBoard();
        })

        $createColumn.click(function () {
            var nameColumn = prompt('Name column');
            self.addColumn(new Column(nameColumn));
        });

        $board.append($boardTitle)
            .append($boardDelete)
            .append($createColumn)
            .append($columnContainer);

        return $board;
    }
}

Board.prototype = {
    removeBoard: function () {
        var sure = confirm('Do you want delete a board');
        if (sure) {
            this.$element.remove();
        }
    },
    addColumn: function (column) {
        this.$element.find('.column-container').append(column.$element);
        initSortable();
    }
}

$('.create-board').click(function () {
    var nameBoard = prompt('Enter a board name');
    var board = new Board(nameBoard);
    $('.create-board').after(board.$element);
});


function initSortable() {
    $('.column-card-list').sortable({
        connectWith: '.column-card-list',
        placeholder: 'card-placeholder'
    }).disableSelection();
}

function createBoard(name) {
    var board = new Board(name);
    $('.create-board').after(board.$element);

    return board;
}

function checkList() {
    $('.column-card-list').each(function () {
        if ($(this).find('li').length > 1) {
            $(this).find('.fake-placeholder').hide();
        } else {
            $(this).find('.fake-placeholder').show();
        }
    });
}