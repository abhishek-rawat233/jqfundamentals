class Hint {
  constructor(searchInput, searchLabel, klassName){
    this.searchInput = $(searchInput);
    this.searchLabel = $(searchLabel);
    this.searchText = $(searchLabel).text();
    this.klassName = klassName;
  }

  focusBinder(element, elementClass){
    element.bind('focus', function() {
      element.searchInput.val("").remove(elementClass);
    });
  }

  blurBinder(element, elementValue, elementClass){
    element.bind('blur', function() {
      if (!$.trim(element.val())) {
        element.val(elementValue)
          .addClass(elementClass);
      }
    });
  }

  init(){
    this.searchInput.val(this.searchText);
    this.searchInput.addClass(this.klassName);
    this.searchLabel.remove();
    this.focusBinder(this.searchInput, this.klassName);
    this.blurBinder(this.searchInput, this.searchText, this.klassName);
  }
}

(new Hint('.input_text', 'form label')).init();
