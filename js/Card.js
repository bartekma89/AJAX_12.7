function Card(id, name) {
    var self = this;
    this.id = id;
    this.name = name || 'No name given';
    this.$element = createCard();

    function createCard() {
        var $card = $('<li>').addClass('card inProgress');
        var $cardDescription = $('<p>').addClass('card-description').text(self.name);
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
        var self = this;
        
        $.ajax({
            method: 'DELETE',
            url: baseURL + '/card/' + self.id
        })
            .done(function() {
            self.$element.remove();
        })
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