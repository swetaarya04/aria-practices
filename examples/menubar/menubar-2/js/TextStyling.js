/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   File:   TextStyling.js
*
*   Desc:   Styling functions for changing the style of an item
*
*   Author: Jon Gunderson and Ku Ja Eun
*/

/*
*   @eventHandler setFontFamily
*   @desc
*       Sets the CSS font-family property of the text content
*       identified by the id and updates the menuitemradio
*       group in the menu to indicate which font is selected
*   @param event
*       Event object of menuitemradio in the radio group
*   @param id
*       id property of the element to apply the styling
*   @param value
*       value for the CSS font-family property
*
*/
function setFontFamily (event, id) {
  var currentTarget = event.currentTarget;

  var value = event.target.innerHTML;

  if (value) {
    document.getElementById(id).style.fontFamily = value;
  }

  var childElement = currentTarget.firstElementChild;

  while (childElement) {
    if (childElement.innerHTML === value) {
      childElement.setAttribute('aria-checked', 'true');
    }
    else {
      childElement.setAttribute('aria-checked', 'false');
    }
    childElement = childElement.nextElementSibling;
  }
};

/*
*   @eventHandler setTextDecoration
*
*   @desc
*       Sets the CSS font-family property of the text content
*       identified by the id and updates the menuitemradio
*       group in the menu to indicate which decoration is selected
*
*   @param event
*       Event object of menuitemradio in the radio group
*
*   @param id
*       id property of the element to apply the styling
*
*/
function setTextDecoration (event, id) {

  var currentTarget = event.currentTarget;

  var value = event.target.innerHTML;

  if (value) {
    document.getElementById(id).style.textDecoration = value;
  }

  var childElement = currentTarget.firstElementChild;

  while (childElement) {
    if (childElement.innerHTML === value) {
      childElement.setAttribute('aria-checked', 'true');
    }
    else {
      childElement.setAttribute('aria-checked', 'false');
    }
    childElement = childElement.nextElementSibling;
  }
};

/*
*   @eventHandler setTextAlign
*
*   @desc
*       Sets the CSS text-align property of the text content
*       identified by the id and updates the menuitemradio
*       group in the menu to indicate which alignment is selected
*
*   @param event
*       Event object of menuitemradio in the radio group
*
*   @param id
*       id property of the element to apply the styling
*/
function setTextAlign (event, id) {

  var currentTarget = event.currentTarget;

  var value = event.target.innerHTML;

  if (value) {
    document.getElementById(id).style.textAlign = value;
  }

  var childElement = currentTarget.firstElementChild;

  while (childElement) {
    if (childElement.innerHTML === value) {
      childElement.setAttribute('aria-checked', 'true');
    }
    else {
      childElement.setAttribute('aria-checked', 'false');
    }
    childElement = childElement.nextElementSibling;
  }
};

/*
*   @eventHandler setFontSize
*
*   @desc
*       Sets the CSS font-size property of the text content
*       identified by the id and updates the menuitemradio
*       group in the menu to indicate which size is selected
*
*   @param event
*       Event object of menuitemradio in the radio group
*
*   @param id
*       id property of the element to apply the styling
*
*   @param value
*       value for the CSS font-size property
*
*/
function setFontSize (event, id) {

  var target = event.target;
  var currentTarget = event.currentTarget;
  var radioGroup = currentTarget.querySelectorAll('[role=\'group\']')[0];
  var value = false;
  var childElement;
  var flag;
  var i;
  var disableSmaller;
  var disableLarger;

  value = target.innerHTML;

  if (value.toLowerCase() === 'larger') {

    childElement = radioGroup.firstElementChild;

    while (childElement) {
      flag = childElement.getAttribute('aria-checked');
      childElement = childElement.nextElementSibling;
      if (flag === 'true') {
        break;
      }
    }

    if (childElement) {
      value = childElement.innerHTML;
    }
    else {
      value = false;
    }

  }
  else {
    if (value.toLowerCase() === 'smaller') {

      var childElement = radioGroup.lastElementChild;

      while (childElement) {
        var flag = childElement.getAttribute('aria-checked');
        childElement = childElement.previousElementSibling;
        if (flag === 'true') {
          break;
        }
      }

      if (childElement) {
        value = childElement.innerHTML;
      }
      else {
        value = false;
      }
    }
  }

  console.log('VALUE: ' + value);

  if (value) {
    document.getElementById(id).style.fontSize = value;

    childElement = radioGroup.firstElementChild;

    while (childElement) {
      if (childElement.innerHTML === value) {
        childElement.setAttribute('aria-checked', 'true');
      }
      else {
        childElement.setAttribute('aria-checked', 'false');
      }
      childElement = childElement.nextElementSibling;

    }

    if (value === 'X-Small') {
      disableSmaller = 'true';
    }
    else {
      disableSmaller = 'false';
    }

    if (value === 'X-Large') {
      disableLarger = 'true';
    }
    else {
      disableLarger = 'false';
    }

    childElement = currentTarget.firstElementChild;

    while (childElement) {

      if (childElement.innerHTML === 'Smaller') {
        childElement.setAttribute('aria-disabled', disableSmaller);
      }
      if (childElement.innerHTML === 'Larger') {
        childElement.setAttribute('aria-disabled', disableLarger);
      }

      childElement = childElement.nextElementSibling;
    }
  }

};

/*
*   @eventHandler setColor
*
*   @desc
*       Sets the CSS color property of the text content
*       identified by the id and updates the menuitemradio
*       group in the menu to indicate which color is selected
*
*   @param event
*       Event object of menuitemradio in the radio group
*
*   @param id
*       id property of the element to apply the styling
*
*   @param value
*       value for the CSS color property
*
*/
function setColor (event, id, value) {

  var currentTarget = event.currentTarget;

  var value = event.target.innerHTML;

  if (value) {
    document.getElementById(id).style.color = value;
  }

  var childElement = currentTarget.firstElementChild;

  while (childElement) {
    if (childElement.innerHTML === value) {
      childElement.setAttribute('aria-checked', 'true');
    }
    else {
      childElement.setAttribute('aria-checked', 'false');
    }
    childElement = childElement.nextElementSibling;
  }
};

/*
*   @eventHandler toggleBold
*
*   @desc
*       Sets the CSS font-size property of the text content
*       identified by the id and updates the menuitemradio
*       group in the menu to indicate which size is selected
*       by using the aria-checked property
*
*   @param event
*       Event object of menuitemradio in the radio group
*
*   @param id
*       id property of the element to apply the styling
*
*/
function toggleBold (event, id) {
  var target = event.currentTarget;
  var flag = target.getAttribute('aria-checked');

  if (flag === 'true') {
    document.getElementById(id).style.fontWeight = 'normal';
    target.setAttribute('aria-checked', 'false');
  }
  else {
    document.getElementById(id).style.fontWeight = 'bold';
    target.setAttribute('aria-checked', 'true');
  }
};

/*
*   @eventHandler toggleItalic
*
*   @desc
*       Sets the CSS font-size property of the text content
*       identified by the id and updates the menuitemradio
*       group in the menu to indicate which size is selected
*       by using the aria-checked property
*
*   @param event
*       Event object of menuitemradio in the radio group
*
*   @param id
*       id property of the element to apply the styling
*
*/

function toggleItalic (event, id) {
  var target = event.currentTarget;
  var flag = target.getAttribute('aria-checked');

  if (flag === 'true') {
    document.getElementById(id).style.fontStyle = 'normal';
    target.setAttribute('aria-checked', 'false');
  }
  else {
    document.getElementById(id).style.fontStyle = 'italic';
    target.setAttribute('aria-checked', 'true');
  }
};

