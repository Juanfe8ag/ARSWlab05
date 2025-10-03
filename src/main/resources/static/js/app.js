var app = (function () {
    var authorName = "";

    var setAuthorName = function (name) {
        authorName = name;
        $("#authorName").text("Autor: " + authorName);
    };

    var updateBlueprints = function (author) {
        apimock.getBlueprintsByAuthor(author, function (blueprints) {
            $("#table-body").empty();

            var transformed = blueprints.map(function (bp) {
                return { name: bp.name, points: bp.points.length };
            });

            transformed.map(function (bp) {
                $("#table-body").append(
                    "<tr><td>" + bp.name + "</td><td>" + bp.points + "</td></tr>"
                );
            });

            var totalPoints = transformed.reduce(function (acc, bp) {
                return acc + bp.points;
            }, 0);

            $("#totalPoints").text("Total de puntos: " + totalPoints);
        });
    };

    return {
        setAuthorName: setAuthorName,
        updateBlueprints: updateBlueprints
    };
})();