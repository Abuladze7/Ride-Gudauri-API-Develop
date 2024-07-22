const faqQuestions = require("./ridegudauri.contactpagefaqquestions.json");

const filteredQuestions = faqQuestions.filter(
  (e) => e.titleId.$oid === "669df9a00e83df735878f929"
);

console.log(filteredQuestions);
