///////////////////////////////////////////////////
// Templates

var tpl = {
    fn: 'function(<%= args %>) {<%= statements %> <%= ret %>}'
};

// convert template strings into lodash template functions
for (var p in tpl) {
    tpl[p] = _.template(tpl[p]);
}

///////////////////////////////////////////////////
// Syntax

var syntax = {
    symbols: function() {
        return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    },
    operators: function() {
        return ['+', '-', '*', '/'];
    },
};


///////////////////////////////////////////////////
// Generators

var gen = {
    fn: function(config) {
        var args = gen.args();
        var ret = gen.ret(args);

        var fnTpl = tpl.fn({
            args: args,
            statements: [],
            ret: ret,
        });

        return js_beautify(fnTpl);
    },

    args: function() {
        var args = [],
            symbols = syntax.symbols(),
            count = _.random(2, 3);

        for (count; count > 0; count -= 1) {
            args.push(rndItem(symbols));
        }

        return args;
    },

    ret: function(args) {
        args = _.clone(args);

        var symbols = _.difference(syntax.symbols(), args),
            operators = syntax.operators();
        
            var statement = 'return ' + rndItem(args);
            for (var i = args.length; i > 0; i -= 1) {
                statement += rndItem(operators, false) + rndItem(args); 
            }

        return statement + ';';
    }
};

///////////////////////////////////////////////////
// Generators

$(document).ready(function() {
    var bodyElm = $('body');
    var resultsElm = $('#results');

    var fn = gen.fn({
        args: ['a', 'b'],
        statements: ['a + b'],
        ret: 'b'
    });

    resultsElm.append('<pre>' + fn + '</pre>');
});
