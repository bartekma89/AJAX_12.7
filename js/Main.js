    function generateId() {
        var chars = '0123456789abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ';
        var id = '';
        for (var i = 0; i < 10; i++) {
            id += chars[Math.floor(Math.random() * chars.length)];
        }
        return id;
    }

    var board1 = createBoard('My Board');

    var toDo = new Column('ToDo');
    var doing = new Column('Doing');
    var done = new Column('Done');

    var card1 = new Card('New task');
    var card2 = new Card('New Kanban Board');


    board1.addColumn(toDo);
    board1.addColumn(doing);
    board1.addColumn(done);

    toDo.addCard(card1);
    done.addCard(card2);

    checkList();
