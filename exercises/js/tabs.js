//1. Hide all of the modules.
$('.module').hide();

//2. Create an unordered list element before the first module.
$('<ul></ul>').addClass('newList').insertBefore($('.module').first());

//3. Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to the unordered list element.
//4. Bind a click event to the list item that:
//   >>  Shows the related module, and hides any other modules
//   >>  Adds a class of "current" to the clicked list item
//   >>  Removes the class "current" from the other list item
$('.module').each(function() {
  var $module = $(this);
  var $li = $('<li>' + $(this).find('h2').text() + '</li>').appendTo('.newList');

  $li.click(function() {
    $module.show().siblings('.module').hide();
    $li.addClass('current').siblings().removeClass('current');
    });
  });

//5. Finally, show the first tab.
$('.module').first().show();
