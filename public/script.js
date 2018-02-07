$(document).ready(function () {
    let inp = $('#inp');
    let btn = $('#btn');
    let clr = $('#clr');
    let result = $('#result');

    let x=1;

    display();

    function input() {
        let value = inp.val();
        inp.val("");
        if(value === '') return;
        $.post({
            'url': '/add',
            'data': {'data': value},
            'success': function (res) {
                add(res[0]);
            }
        });
    }

    btn.click(function () {
        input();
    });

    inp.keypress(function (e) {
        if(e.which === 13) {
            input();
        }
    });

    clr.click(function () {
        if (confirm("Are you sure you want to clear this Todo List?")) {
            $.post({'url': '/clear'});
            result.html("");
        }
        x=1;
        return false;

    });

    function display() {
        result.html("");
        x=1;
        $.get({
            'url': '/display',
            'success': function (res) {
                for(let i=0; i<res.length; i++)
                    add(res[i]);
            }
        });
    }

    function add(res) {
        result.append(`<div id="${res.id}">
                       <a class="collection-item center-align col s1" style="height: 30px">${x}.</a>     
                       <a class="collection-item col s1 switch" style="height: 30px">
                            <label>
                                <input type="checkbox" id="c${res.id}" onclick="fun.done(this.id.slice(1))">
                                <span class="lever"></span>                              
                            </label>
                       </a>             
                       <a href="#!" class="collection-item center-align col s8" id="t${res.id}" style="height: 30px; font-size: 25px">${res.item}</a>
                       <a href="#!" class="collection-item col s1 center-align" id="u${res.id}" onclick="fun.update(this.id.slice(1))" style="height: 30px">
                            <i class="material-icons">create</i>
                       </a>
                       <a href="#!" class="collection-item col s1 center-align" id="d${res.id}" onclick="fun.del(this.id.slice(1))" style="height: 30px">
                            <i class="material-icons">clear</i>
                       </a>
                       </div>`);
        if(res.done === 1) {
            $(`#c${res.id}`).prop('checked', true);
            $(`#t${res.id}`).css({'text-decoration': 'line-through'});
        }
        x++;
    }

    window.display = display;
});