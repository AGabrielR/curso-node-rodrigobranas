var options = [
    'a) pid',
    'b) title',
    'c) arch',
    'd) platform'
];

module.exports.showOptions = function () {
    options.forEach(function (option) {
        console.log(option);
    });
};