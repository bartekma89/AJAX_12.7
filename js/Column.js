function Column(id, name) {
    var self = this;
    this.id = id;
    this.name = name || "New Column";
    this.$element = createColumn();

    function createColumn() {
        var $column = $('<div>').addClass('column');
        var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
        var $columnCardList = $('<ul>').addClass('column-card-list');
        var $columDelete = $('<button>').addClass('btn-delete').text('X');
        var $columnAddCard = $('<button>').addClass('add-card').text('Add Card');
        var $fakeCard = $('<li>').addClass('fake-placeholder');
        self.listLength = $('li').length;

        $columDelete.click(function () {
            self.removeColumn();
        });

        $columnAddCard.click(function () {
            var cardDescription = prompt('Description');
            self.addCard(new Card(cardDescription));
            checkList();
        });

        $column.append($columnTitle)
            .append($columnAddCard)
            .append($columDelete)
            .append($columnCardList);

        $columnCardList.append($fakeCard.text('Push card here'));

        return $column;
    }
}

Column.prototype = {
    addCard: function (card) {
        this.$element.children('ul').prepend(card.$element);
        checkList();
    },

    removeColumn: function () {
        var self = this;
        $.ajax({
            method: 'DELETE',
            url: baseURL + "/column/" + self.id
        })
            .done(function() {
            self.$element.remove();
        })    
    }
};