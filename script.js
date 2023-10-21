document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#myList");
  const itemsToAdd = 10; // Number of items to add by default
  const itemsToAddOnScroll = 2; // Number of items to add when scrolling to the end

  // Function to create a new list item
  function createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  // Function to add items to the list
  function addItemsToTheList(count) {
    for (let i = 1; i <= count; i++) {
      const listItem = createListItem(`List Item ${list.childElementCount + i}`);
      list.appendChild(listItem);
    }
  }

  // Add the initial items
  addItemsToTheList(itemsToAdd);

  // Event listener to check for scrolling to the end
  list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addItemsToTheList(itemsToAddOnScroll);
    }
  });
});


