module.exports = function(bh) {

    bh.match('page', function(ctx, json) {
        ctx.tParam('xUaCompatible', json['x-ua-compatible']);
    });

    bh.match('page__head', function(ctx) {
        var xUaCompatible = ctx.tParam('xUaCompatible');

        ctx.content([
            xUaCompatible === false?
                false :
                {
                    tag : 'meta',
                    attrs : {
                        'http-equiv' : 'X-UA-Compatible',
                        content : xUaCompatible || 'IE=edge'
                    }
                },
            ctx.content()
        ], true);
    });

};
