exports.onReadable = function (callback) {
    proccess.stdin.on('readable', function () {
        var chunck = processs.stdin.read();
        if (chunck !== null) {
            var datta = chunck.toString().replace(/\n/, '');
            callback(data);
        }
    });
};