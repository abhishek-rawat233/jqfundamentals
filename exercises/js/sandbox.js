//SELECTING
//1. div with class: module
$('div.module')

//2. three selectors to get myList third item
$('#myList myItemList')//using id
$('#myItemList')//best
$('ul li').filter('#myListItem')//selecting all unordered lists then list items
$('li[id="myListItem"]')//selecting list item having id=myListItem
$('#myList li')[2]//using myList id to access its third element

//3. select label for search input
$('label[for="q"]')[0]

//4. total hidden elements
$(':hidden').length

//5. total images with alt
$('img[alt]').length

//6. odd table rows
$('tr').filter(':odd')


//TRAVERSING
//1. select img elements and logging their alt
$('img').each(function(i){
    console.log(this.alt);});

//2. select search input text box's form and add class to interval
$('input[name="q"]').parent('form').addClass('klass');

//3. Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
$('#myList').find('li.current').removeClass().next().addClass('current');

//4. Select the select element inside #specials; traverse your way to the submit button.
$('#specials select').parent().nextUntil('input_submit')

//5. Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
$('#slideshow li:first').addClass('current').siblings().addClass('disabled')


//MANIPULATING
//1. Add five new list items to the end of the unordered list #myList.
for(var i =0; i< 5; i++){
    $('#myList').append('<li>new list item ' + (i+1) + '</li>')};

//2. Remove the odd list items
$('ul li:odd').remove();

//3. Add another h2 and another paragraph to the last div.module
$('div.module').last().append('<h2>new H2</h2>','<p>New Paragraph</p>');

//4. Add another option to the select element; give the option the value "Wednesday"
$('form select').append("<option value='wednesday'>Wednesday</option>");

//5. Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
$('img:first').clone().insertAfter($('div.module:last'));
