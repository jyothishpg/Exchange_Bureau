var cities = [
  "Deira",
  "Bur Dubai",
  "Karama",
  "Satwa",
  "Jumeirah",
  "Al Barsha",
  "Dubai Marina",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Business Bay",
  "Al Qusais",
  "Al Nahda",
  "Al Quoz",
  "Jebel Ali",
  "Mirdif",
  "International City",
  "Discovery Gardens",
  "Dubai Silicon Oasis",
  "Arabian Ranches",
  "Dubailand"
];

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
