function dropdown (dropdownClass,dropdownItemClass) {
  const expandButton = document.querySelector(`.${dropdownClass}`);
  expandButton.addEventListener("mouseover", showDropdownItems);
  expandButton.addEventListener ("mouseout", hideDropdownItems);

  const dropdownItems = document.querySelectorAll(`.${dropdownItemClass}`);
  for(const item of dropdownItems) {
    item.addEventListener("mouseover", showDropdownItems);
    item.addEventListener ("mouseout", hideDropdownItems);
    item.style.display = "none";
  }

  function showDropdownItems() {
    for(const item of dropdownItems) {
      item.style.display = "block";
    }    
  }

  function hideDropdownItems() {
    for(const item of dropdownItems) {
      item.style.display = "none";
    } 
  } 
}


