var help = require('./help');
var keyboard = require('./keyboard');

keyboard.onReadable(function (option) {
    switch (option) {
        case 'a':
            console.log('pid: ' + process.pid)
            break;
        case 'b':
            console.log('title: ' + process.title)
            break;
        case 'c':
            console.log('arch: ' + process.arch)
            break;
        case 'd':
            console.log('platform: ' + process.platform)
            break;
        case 'e':
            console.log(process.env);
            break;
        case 'm':
            console.log(process.memoryUsage());
            break;
        case 'u':
            console.log('uptime: ' + process.uptime());
            break;
        case 'v':
            console.dir(process.versions);
            break;
        case 'q':
            process.exit();
        default:
            help.showOptions();
    }
});