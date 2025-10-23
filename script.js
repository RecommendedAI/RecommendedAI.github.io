window.onload = function() {
    var hash = window.location.hash.substring(1);
    var key = hash.split(/[\?\-\/]/)[0];
    var rest = hash.slice(key.length);

    var map = {
        "BestAIimageupscalers": "Best-AI-image-upscalers",
        "bBestAIimageGenerators": "The-Best-AI-Image-Generators",

    };

    if (map[key]) {
        window.location.href =  "/" + map[key] + "/" + rest;
    }
};
