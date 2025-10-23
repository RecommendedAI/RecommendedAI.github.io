window.onload = function() {
    var hash = window.location.hash.substring(1);
    var key = hash.split(/[\?\-\/]/)[0];
    var rest = hash.slice(key.length);

    var map = {
        "BestAIimageupscalers": "Best-AI-image-upscalers",
        "BestAIimageGenerators": "The-Best-AI-Image-Generators",
        "BestAIChatbotBuilders": "Best-AI-Chatbot-Builders",
        "BestAIWriting": "Best-AI-Writing",

    };

    if (map[key]) {
        window.location.href =  "/" + map[key] + "/" + rest;
    }
};
