window.onload = function() {
    //alert('Window loaded');
}

$(document).ready(function() {
    //alert('DOM loaded');

    //$('#myContent').html('Hello World');

    //$('div').css('background-color', 'Green');

    //$('div').each(function () {
    //    alert($(this).html());
    //});

    //$('#searchBtn').click(function() {
    //    searchName();
    //});

    $('#name').keyup(function(){
        $('tr:not(:first)').css("visibility","collapse");
        var value= $(this).val();
        $('tr:not(:first):includes("' + value + '")').css("visibility","visible");
     });
});

$.expr[':'].includes = function(array, i, match) {
  return $(array).text().toUpperCase()
      .indexOf(match[3].toUpperCase()) >= 0;
};


// To select all <p> elements: $('p')

// To select multiple tags: $('p,a,span')

// Selecting descendants: $('ancestor descendant')
// Ex:    $('table tr')

// To select elements by ID: $('#id')

// To select by class name: $('.myClass')

// Selecting by tag name and class name:  $('a.myClass')

// Selecting by attribute value:  $('a[title]')
// Specific attribute:  $('a[title="Programming Info"]')

// Selecting input elements: $(':input')
// Selecting  radio input elements: $('input[type="radio"]')

// To select value of a text box:
//  $(':input'). each(function () {
//     var elem = $(this);   -->  This is a wrapped in a jQuery wrapper
//     alert(elem.val());
//  });

// Using contains in selectors:  $('div:contains("pluralsight")')