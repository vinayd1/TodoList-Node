$(document).ready(function () {
    let inp = $('#inp');
    let btn = $('#btn');
    let clr = $('#clr');
    let result = $('#result');

    display();

    btn.click(function () {
        let value = inp.val();
        inp.val("");
        $.post({
            'url': '/add',
            'data': {'data': value},
            'success': function (res) {
                add(res[0]);
            }
        });
    });

    clr.click(function () {
        if (confirm("Are you sure you want to clear this Todo List?")) {
            $.post({'url': '/clear'});
            result.html("");
        }
        return false;

    });

    function display() {
        $.get({
            'url': '/display',
            'success': function (res) {
                for(let i=0; i<res.length; i++)
                    add(res[i]);
            }
        });
    }

    function add(res) {
        result.append(`<li id="${res.id}">
                            <input type="checkbox" id="c${res.id}" onclick="fun.done(this.id.slice(1))"><span id="t${res.id}">${res.item}</span>&nbsp
                            <button id="u${res.id}" onclick="fun.update(this.id.slice(1))"><i class="material-icons">edit</i></button>&nbsp
                            <button id="d${res.id}" onclick="fun.del(this.id.slice(1))"><i class="material-icons">delete</i></button>
                       <br></li>`);
        if(res.done === 1) {
            $(`#c${res.id}`).prop('checked', true);
            $(`#t${res.id}`).css({'text-decoration': 'line-through'});
        }
    }

});