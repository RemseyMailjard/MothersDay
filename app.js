"use strict";

window.onload = function () {
  //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
  initLoadDropdownGiftIdeas();

  //Default option
  const giftList = document.getElementById("giftIdeas");
  // giftList.value = "Gift4";
  giftList.value = null;
};

function initLoadDropdownGiftIdeas() {
  // load the dropdown list
  //  let states = ["Alabama", "Alaska", "Arizona", ... ];

  // let giftIdeas = ["A house", "A vacation", "A rose", "A photoalbum"];
  //let giftValues = ["Gift1","Gift2","Gift3","Gift4"];

  let gifts = [
    { idea: "A house", value: "Gift1" },
    { idea: "A vacation", value: "Gift2" },
    { idea: "A rose", value: "Gift3" },
    { idea: "A photoalbum", value: "Gift4" },
  ];

  //Grab the list from HTML
  const giftList = document.getElementById("giftIdeas");

  gifts.forEach((gift) => {
    let theOption = new Option(gift.idea, gift.value);
    // ADDing the elements to the list
    giftList.appendChild(theOption);
  });
}

function DisplayItem() {
  //grab the giftlist
  const giftList = document.getElementById("giftIdeas");

  //let selected value
  let selectedValue = giftList.value;
  let selectedIndex = giftList.selectedIndex;
  let selectedText = giftList.options[giftList.selectedIndex].text;
  let message;
  if (selectedValue == null) {
    document.getElementById("message").innerText = "Nothing has been selected";
    return;
  } else if (selectedValue == "Gift3") {
    document.getElementById("message").innerText =
      "That is a wonderfull rose" + selectedText;
  }
}

function ClearFilters() {
  const giftList = document.getElementById("giftIdeas");
  document.getElementById("mySearchField").value = "";
  // giftList.value = "Gift4";
  giftList.value = null;
}
