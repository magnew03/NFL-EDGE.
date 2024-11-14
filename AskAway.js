document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("questionForm");

    form.addEventListener("submit", function (event) {
        const question = document.getElementById("question").value.trim();
        
        // Count words in the question
        const wordCount = question.split(/\s+/).filter(word => word.length > 0).length;
        
        // Basic validation: check if at least 3 words are entered
        if (wordCount < 3) {
            event.preventDefault(); // Prevent form from submitting
            alert("Please enter at least 3 words in your question.");
        }
    });
});

