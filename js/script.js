var cities = ["Kochi", "Delhi", "Mumbai", "Chennai", "Bangalore"];

$("#city").autocomplete({
  source: cities,
  minLength: 1,
});

var subjects = [
  "Enquiry",
  "Suggestion",
  "Appreciation",
  "Complaint",
  "Note",
  "Report Fruad",
];

$("#subject").autocomplete({
  source: subjects,
  minLength: 1,
});
const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxChars = 1000;
textarea.addEventListener("input", () => {
  charCount.textContent = `${textarea.value.length}/${maxChars}`;
});
