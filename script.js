window.onload = function() {
    var hash = window.location.hash.substring(1);
    var key = hash.split(/[\?\-\/]/)[0];
    var rest = hash.slice(key.length);

    var map = {
        "a": "Best-AI-image-upscalers",
        "b": "bbbb",

    };

    if (map[key]) {
        window.location.href =  "/" + map[key] + "/" + rest;
    }
};
