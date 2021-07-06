function testFunction(){
    console.log("Salut");

    $.ajax({
        url: "http://localhost:4200/meal/random"
    }).then(function(data) {
       console.log(data);
       if (document.getElementById("text1234").innerHTML.length < 25)
            document.getElementById("text1234").append(data.strMeal + " ");
        else {
            document.getElementById("text1234").innerHTML =  " Name of the meal: " + data.strMeal;
        }

        document.getElementById("imagine1").src = data.strMealThumb;
        document.getElementById("imagine1").style.display="block";

        var youtubeURL = "https://www.youtube.com/oembed?url=" + data.strYoutube + "&format=json";
        $.ajax({
            url: youtubeURL
        }).then (function(anotherData){
            console.log(anotherData);
            var newSrc = anotherData.html.split("src=")[1].split("frameborder")[0];
            var finalSrc = newSrc.replace('"', '');
            newSrc = finalSrc.replace('"', '');
            console.log(newSrc);
            document.getElementById("url").src = newSrc;
            setTimeout(function(){
                document.getElementById("url").style.display="block";
            },170)
        })

        var html = document.getElementById("table").outerHTML;
        html = html.split("</table>")[0];
        
        html = populateIngredientsTable(data, html) + "</table>";
        document.getElementById("table").outerHTML = html;
    });

    console.log("muie");
}


function populateIngredientsTable(data, html){
    var tmp = "";
    if(data.strIngredient1.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient1 + "</td><td class=\"tableStyle\">" + data.strMeasure1 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient2.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient2 + "</td><td class=\"tableStyle\">" + data.strMeasure2 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient3.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient3 + "</td><td class=\"tableStyle\">" + data.strMeasure3 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient4.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient4 + "</td><td class=\"tableStyle\">" + data.strMeasure4 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient5.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient5 + "</td><td class=\"tableStyle\">" + data.strMeasure5 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient6.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient6 + "</td><td class=\"tableStyle\">" + data.strMeasure6 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient7.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient7 + "</td><td class=\"tableStyle\">" + data.strMeasure7 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient8.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient8 + "</td><td class=\"tableStyle\">" + data.strMeasure8 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient9.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient9 + "</td><td class=\"tableStyle\">" + data.strMeasure9 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient10.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient10 + "</td><td class=\"tableStyle\">" + data.strMeasure10 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient11.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient11 + "</td><td class=\"tableStyle\">" + data.strMeasure11 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient12.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient12 + "</td><td class=\"tableStyle\">" + data.strMeasure12 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient13.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient13 + "</td><td class=\"tableStyle\">" + data.strMeasure13 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient14.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient14 + "</td><td class=\"tableStyle\">" + data.strMeasure14 + "</td></tr>\n";
        html = html + tmp;
    }
    var tmp = "";
    if(data.strIngredient15.length > 0) {
        tmp = "<tr class=\"tableStyle\"><td class=\"tableStyle\">" + data.strIngredient15 + "</td><td class=\"tableStyle\">" + data.strMeasure15 + "</td></tr>\n";
        html = html + tmp;
    }
    return html;
}