let gifts = [
  { idea: "A house", value: "Gift1" },
  { idea: "A vacation", value: "Gift2" },
  { idea: "A rose", value: "Gift3" },
  { idea: "A photoalbum", value: "Gift4" },
];

// Function to initialize the dropdown with gift options
function initializeGiftIdeasDropdown() {
  const dropdown = document.getElementById("giftIdeas");
  dropdown.innerHTML = ""; // Clear existing options
  gifts.forEach((gift) => {
    let option = new Option(gift.idea, gift.value);
    dropdown.appendChild(option);
  });
}

// Function to filter dropdown based on search input
function filterDropdown() {
  const searchInput = document
    .getElementById("mySearchField")
    .value.toLowerCase();
  const dropdown = document.getElementById("giftIdeas");
  dropdown.innerHTML = ""; // Clear existing options
  const filteredGifts = gifts.filter((gift) =>
    gift.idea.toLowerCase().includes(searchInput)
  );
  filteredGifts.forEach((gift) => {
    let option = new Option(gift.idea, gift.value);
    dropdown.appendChild(option);
  });
  if (filteredGifts.length > 0) {
    dropdown.value = filteredGifts[0].value; // Select the first matching option
  }
}

// Function to display the selected gift idea
function displaySelectedGift() {
  const giftList = document.getElementById("giftIdeas");
  const selectedValue = giftList.value;
  document.getElementById("message").innerText =
    "Selected gift idea: " + selectedValue;
}

// Function to clear filters and reset dropdown
function clearFilters() {
  document.getElementById("mySearchField").value = "";
  initializeGiftIdeasDropdown(); // Reset dropdown to all options
}

// Initialize dropdown on page load
window.onload = function () {
  initializeGiftIdeasDropdown();
};
