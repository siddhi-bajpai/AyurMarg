// // Define the questions with their respective scores
// const questions = [
//     // Kapha
//     { text: "Whether your skin remains oily throughout the year in comparison to others?", yesScore: 120, noScore: 0, dosha: "Kapha" },
//     { text: "Are your body-hairs & skin shiny, even when no oil or moisturizer is used?", yesScore: 120, noScore: 0, dosha: "Kapha" },
//     { text: "Are you considered attractive among your friends?", yesScore: 40, noScore: 0, dosha: "Kapha" },
//     { text: "Do even mild or trivial injuries on your body make you upset?", yesScore: 40, noScore: 0, dosha: "Kapha" },
//     { text: "Among your family members, is your complexion considered fairer?", yesScore: 40, noScore: 0, dosha: "Kapha" },
//     { text: "Do you think you have intense sexual desire?", yesScore: 120, noScore: 0, dosha: "Kapha" },
//     { text: "Have you got well-built muscles?", yesScore: 60, noScore: 0, dosha: "Kapha" },
//     { text: "Do you have a well-nourished & normally developed body?", yesScore: 120, noScore: 0, dosha: "Kapha" },
//     { text: "Are you lazy and disinterested in activities like morning walk/ jogging, swimming, or any type of outdoor games?", yesScore: 40, noScore: 0, dosha: "Kapha" },
//     { text: "Are you slow in consuming the food? (Even after all have left the dining hall, you are still consuming the same amount of food).", yesScore: 40, noScore: 0, dosha: "Kapha" },
//     { text: "When you go to morning walk or college or office, do you walk slowly in comparison to others?", yesScore: 40, noScore: 0, dosha: "Kapha" },
//     { text: "If you are assigned any work, do you take some extra time to start it?", yesScore: 40, noScore: 0, dosha: "Kapha" },
//     { text: "Do you get irritated easily? (For example, when you don’t get breakfast on time in your hostel or when the power goes off while watching a cricket match or your favourite movie on television).", yesScore: 0, noScore: 40, dosha: "Kapha" },
//     { text: "Are you late to develop/suffer from symptoms after exposure to common causative factors? (For example, during seasonal changes, when your friends are easily caught up with flu etc., you are still healthy among them).", yesScore: 40, noScore: 0, dosha: "Kapha" },
//     { text: "Does your gait (style of walking) change with respect to speed or manner frequently?", yesScore: 0, noScore: 120, dosha: "Kapha" },
//     { text: "Do you feel hungry more frequently and do you consume more food in comparison to others?", yesScore: 0, noScore: 30, dosha: "Kapha" },
//     { text: "Do you tolerate heat easily?", yesScore: 30, noScore: 0, dosha: "Kapha" },
//     { text: "Do you consume liquids in more quantity and frequency in comparison to others?", yesScore: 0, noScore: 30, dosha: "Kapha" },
//     { text: "Do you perspire less in comparison to others?", yesScore: 30, noScore: 0, dosha: "Kapha" },
//     { text: "Are sounds produced frequently in your joints on movement?", yesScore: 0, noScore: 120, dosha: "Kapha" },
//     { text: "Have you got a good/ attractive complexion?", yesScore: 60, noScore: 0, dosha: "Kapha" },
//     { text: "Have you got a sweet & pleasant voice?", yesScore: 60, noScore: 0, dosha: "Kapha" },

//     // Pitta
//     { text: "Are you more comfortable in winter than summer?", yesScore: 17, noScore: 0, dosha: "Pitta" },
//     { text: "Among your family members, is your complexion considered fairer?", yesScore: 17, noScore: 0, dosha: "Pitta" },
//     { text: "Does your temperature of oral cavity remain towards the upper limit of the normal range?", yesScore: 17, noScore: 0, dosha: "Pitta" },
//     { text: "Do you have excessive black moles, freckles, etc., on your skin? Or Have you noticed the new appearance of black moles often on your skin?", yesScore: 17, noScore: 0, dosha: "Pitta" },
//     { text: "Do you feel excessive hunger & thirst in comparison to others?", yesScore: 17, noScore: 0, dosha: "Pitta" },
//     { text: "Have you experienced premature graying, wrinkling of the skin & early baldness?", yesScore: 17, noScore: 0, dosha: "Pitta" },
//     { text: "Do you have soft, scanty, brown hair on your face, body & head?", yesScore: 17, noScore: 0, dosha: "Pitta" },
//     { text: "Do you involve yourself in risky & heroic activities requiring physical strength often?", yesScore: 24, noScore: 0, dosha: "Pitta" },
//     { text: "Do you have the ability to digest large quantities of food easily?", yesScore: 24, noScore: 0, dosha: "Pitta" },
//     { text: "Do you take large quantities of food & drink in comparison to others?", yesScore: 24, noScore: 0, dosha: "Pitta" },
//     { text: "Do you get easily irritated for small/negligible problems in day-to-day life?", yesScore: 24, noScore: 0, dosha: "Pitta" },
//     { text: "Do you consume food more frequently than others? (5-6 times/day)", yesScore: 24, noScore: 0, dosha: "Pitta" },
//     { text: "Do you have soft & loose muscle bulk, especially around the joints?", yesScore: 60, noScore: 0, dosha: "Pitta" },
//     { text: "In comparison to others, do you pass urine & stool in large quantities and do you perspire more?", yesScore: 60, noScore: 0, dosha: "Pitta" },
//     { text: "Do your friends complain of a bad smell being emitted from your body & mouth?", yesScore: 120, noScore: 0, dosha: "Pitta" },
//     { text: "Do you think you have intense sexual desire?", yesScore: 0, noScore: 120, dosha: "Pitta" },


//     // Vata
//     { text: "Whether your skin remains dry throughout the year in comparison to others?", yesScore: 30, noScore: 0, dosha: "Vata" },
//     { text: "Is your body undernourished/ emaciated?", yesScore: 30, noScore: 0, dosha: "Vata" },
//     { text: "Have you got rough, low, broken, or obstructed voice?", yesScore: 30, noScore: 0, dosha: "Vata" },
//     { text: "Does your sleep last less than 6 hours per day? Or Can your sleep be disturbed easily?", yesScore: 30, noScore: 0, dosha: "Vata" },
//     { text: "Do you change walking speed & style from time to time?", yesScore: 40, noScore: 0, dosha: "Vata" },
//     { text: "Do you keep changing your food habits from time to time?", yesScore: 40, noScore: 0, dosha: "Vata" },
//     { text: "Do you keep changing your walking/jogging habit from time to time?", yesScore: 40, noScore: 0, dosha: "Vata" },
//     { text: "Do you keep your joints, eyes, eyebrows, jaw, lips, tongue, head, shoulder, hands & feet frequently moving?", yesScore: 120, noScore: 0, dosha: "Vata" },
//     { text: "Are you considered talkative among your friends?", yesScore: 60, noScore: 0, dosha: "Vata" },
//     { text: "Do you have prominent veins & tendons all over the body?", yesScore: 60, noScore: 0, dosha: "Vata" },
//     { text: "Do you generally start the work assigned to you immediately?", yesScore: 15, noScore: 0, dosha: "Vata" },
//     { text: "Do you get irritated easily? (E.g., when you do not get breakfast on time in your hostel or when the power goes off while watching a cricket match or your favorite movie over television)", yesScore: 15, noScore: 0, dosha: "Vata" },
//     { text: "Do you get frightened easily?", yesScore: 15, noScore: 0, dosha: "Vata" },
//     { text: "Do you make friends easily & also lose them easily?", yesScore: 15, noScore: 0, dosha: "Vata" },
//     { text: "Do you generally learn things quickly? Or Do you have good grasping power?", yesScore: 15, noScore: 0, dosha: "Vata" },
//     { text: "Is your long-term memory weak? (E.g., you can remember only a few names of your friends at your primary school).", yesScore: 15, noScore: 0, dosha: "Vata" },
//     { text: "Are you more comfortable in summer? Or Do you prefer hot/warm drinks over cold drinks?", yesScore: 15, noScore: 0, dosha: "Vata" },
//     { text: "Do you generally develop symptoms immediately after exposure to common causative factors? (You are easily caught by diseases like flu, allergy during seasonal changes).", yesScore: 15, noScore: 0, dosha: "Vata" },
//     { text: "Do you shiver in winter season more than your friends?", yesScore: 60, noScore: 0, dosha: "Vata" },
//     { text: "Do you often feel stiffness in your body after exercise, traveling?", yesScore: 60, noScore: 0, dosha: "Vata" },
//     { text: "Are your nails, teeth, hands, feet, and hairs on your body and face rough?", yesScore: 120, noScore: 0, dosha: "Vata" },
//     { text: "Do you have cracks on the body especially on the heels?", yesScore: 60, noScore: 0, dosha: "Vata" },
//     { text: "Are some crackling sounds produced in your joints during movements?", yesScore: 60, noScore: 0, dosha: "Vata" },

// ];

// // Initialize variables to store user responses and calculate total scores
// let userScores = {
//     Kapha: 0,
//     Pitta: 0,
//     Vata: 0
// };

// // Function to dynamically generate questions
// function generateQuestions() {
//     const form = document.getElementById('prakritiForm');

//     questions.forEach((question, index) => {
//         const questionElement = document.createElement('div');
//         questionElement.innerHTML = `
//             <p>${index + 1}. ${question.text}</p>
//             <label>
//                 <input type="radio" name="q${index}" value="yes" data-score="${question.yesScore}" required> Yes
//             </label>
//             <label>
//                 <input type="radio" name="q${index}" value="no" data-score="${question.noScore}" required> No
//             </label>
//             <br><br><br><br>
//         `;
//         form.insertBefore(questionElement, form.lastChild);
//     });
// }

// // Function to calculate the individual prakriti percentage
// function calculatePrakriti() {
//     const form = document.getElementById('prakritiForm');
//     const resultDiv = document.getElementById('result');

//     userScores = {
//         Kapha: 0,
//         Pitta: 0,
//         Vata: 0
//     };

//     questions.forEach((question, index) => {
//         const selectedOption = form.querySelector(`input[name="q${index}"]:checked`);
//         if (selectedOption) {
//             const score = parseInt(selectedOption.getAttribute('data-score'));
//             userScores[question.dosha] += score;
//         }
//     });

//     // Calculate percentages and display the result
//     resultDiv.innerHTML = "";
//     Object.keys(userScores).forEach(dosha => {
//         const totalScore = questions.filter(question => question.dosha === dosha)
//             .reduce((total, question) => total + Math.max(question.yesScore, question.noScore), 0);
//         const percentage = (userScores[dosha] / totalScore) * 100;

//         resultDiv.innerHTML += `<p>${dosha} Percentage: ${percentage.toFixed(2)}%</p>`;

//     });
// }

// // Call the function to generate questions when the page loads
// generateQuestions();
