let fun = (function () {
    let func = {};
    function done(id) {
        $.post({
            'url': '/check',
            'data': {'id': id},
            'success': function (res) {
                if(res.done === 1)
                    $(`#t${id}`).css({'text-decoration': 'line-through'});
                else
                    $(`#t${id}`).css({'text-decoration': 'none'});
            }
        });
    }

    function del(id) {
        $.post({
            'url': '/delete',
            'data': {'id': id},
        });
        $(`#${id}`).remove();
    }

    function update(id) {
        $(`#t${id}`).html(`<input class="center-align" id="np" placeholder="Enter data" onkeydown="fun.up(this, ${id})">`);
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

    func.done = done;
    func.up = up;
    func.update = update;
    func.del = del;

    return func;
})();