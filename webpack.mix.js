// webpack.mix.js

let mix = require('laravel-mix');

mix.less('style/style.less', 'style/style.css')
    .browserSync({
        files : ["style/*.css", "js/*.js"],
        server : './'
    })
    .disableNotifications();
