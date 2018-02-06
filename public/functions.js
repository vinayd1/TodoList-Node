
let fun = (function () {
    let fun = {};
    function done(id) {
        $.post({
            'url': '/check',
            'data': {'id': id}
        });
        $(`#t${id}`).css({'text-decoration': 'line-through'});
    }

    function del(id) {
        $.post({
            'url': '/delete',
            'data': {'id': id}
        });
        $(`#${id}`).remove();
    }

    function update(id) {
        $(`#t${id}`).html(`<input onkeydown="fun.up(this, ${id})">`);
    }

    function up(e, id) {
        if (event.keyCode === 13) {
            $.post({
                'url': '/update',
                'data': {'id': id, 'item': e.value}
            });
            let el = $(`#t${id}`);
            el.html(e.value);
            el.css({'text-decoration': 'none'});
            $(`#c${id}`).prop('checked', false);
        }
    }

    fun.done = done;
    fun.up = up;
    fun.update = update;
    fun.del = del;

    return fun;
})();