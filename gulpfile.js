var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.webpack(
        './demo.js',
        './demo.build.js'
    )
    mix.webpack(
        './RetinaBackground.js',
        './RetinaBackground.build.js'
    )
});