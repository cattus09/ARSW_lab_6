var apiclient = (function(){
    return {
        getBlueprintsByAuthor: function(author, callback){
        callback(
            JSON.parse($.ajax({type: 'GET', url: 'blueprints/' + author, async: false}).responseText)
        )},

        getBlueprintByAuthorAndName: function(author, bpname, callback){
        var link = author + "/" + bpname;
        callback(
            JSON.parse($.ajax({type: 'GET', url: 'blueprints/' + link, async: false}).responseText)
        )}
    }
})();