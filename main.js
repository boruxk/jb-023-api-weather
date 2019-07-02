(function () {


    var divId = ['1', '2'];
    for (var i = 0; i < divId.length; i++) {
        var selector = '#d' + divId[i] + ' .img-container img';
        console.log(selector);
    }

    var e = document.querySelectorAll(selector);
    console.log(e);

    console.log('main js scope');
}())