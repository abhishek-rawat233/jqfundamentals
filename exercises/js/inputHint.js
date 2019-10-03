var $input = $('.input_text');
var $hintVal = $('form label').text();
// Set the value of the search input to the text of the label element
$input.val($hintVal);

// Add a class of "hint" to the search input
$input.addClass('hint');

// Remove the label element
$('label[for="q"]').remove();

// Bind a focus event to the search input that removes the hint text and the "hint" class
$input.bind('focus', function() {
  $input.val("").remove('hint');
});

// Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
$input.bind('blur', function() {
  if (!$.trim($input.val())) {
    $input.val($hintVal)
      .addClass('hint');
  }
});
