(function () {
    requirejs.config({
        baseUrl: "scripts",
        paths: {
            "knockout": "lib/knockout",
            "text": "lib/text"
        },
        deps: [
            "main",
            "lib/jquery.cookie"
        ]
    });
})();
