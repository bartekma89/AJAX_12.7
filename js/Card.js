function Card(id, description) {
    var self = this;
    this.id = id;
    this.description = description;
    this.$element = createCard();

    function createCard() {
        var $card = $('<li>').addClass('card inProgress');
        var $cardDescription = $('<p>').addClass('card-description').text(self.description);
        var $cardDelete = $('<button>').addClass('btn-delete').text('X');

        $cardDelete.click(function () {
            self.removeCard();
            checkList();
        });

        $card.click(function () {
            self.changeStatus();
        });

        $card.mouseover(function () {
            checkList();
        });

        $card.append($cardDelete)
            .append($cardDescription);

        return $card;
    }
}

Card.prototype = {
    removeCard: function () {
        this.$element.remove();
    },

    changeStatus: function () {
        var self = this;

        function changeCardStatus(currentStatus, nextStatus) {
            self.$element.removeClass(currentStatus);
            self.$element.addClass(nextStatus);
        }

        if (this.$element.hasClass('inProgress')) {
            changeCardStatus('inProgress', 'completed');
        } else if (this.$element.hasClass('completed')) {
            changeCardStatus('completed', 'stopped');
        } else if (this.$element.hasClass('stopped')) {
            changeCardStatus('stopped', 'inProgress');

        }

    }
};