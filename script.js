const incrementare = document.querySelector('.count-element');
const save = document.getElementById('save-btn');
const saveEl = document.getElementById('save-el');

let count = 0;

const increment = () => {
    count += 1;
    incrementare.innerText = count;
};

const saver = () => {
    let countStr = count + " - ";
    saveEl.textContent += countStr; 
    incrementare.textContent = 0;
    count = 0;
};

save.addEventListener('click', saver);


















// const mesajT = document.getElementById('welcome-el');

// const nameS = "Andreea Beatrice";
// const greeting = ", bine ai venit!";

// mesajT.innerText = nameS + greeting;

// mesajT.innerText += '👋';



































// // function getGrade (s1, s2, s3) {
// //     const average = (s1 + s2 + s3) / 3;

// //     if (average >= 90 && average <= 100) {
// //         return 'A';
// //     }

// //     if (average >= 80 && average <= 90) {
// //         return 'B';
// //     }

// //     if (average >= 70 && average <= 80) {
// //         return 'C';
// //     }

// //     if (average >= 60 && average <= 70) {
// //         return 'D';
// //     }
// //      return 'F'
    
// //   }

// //   const s1 = 85;
// //   const s2 = 75;
// //   const s3 = 92;

// //   console.log(getGrade(s1,s2,s3))

// const rentalCarCost = (day) => {
//     const dailyRate = 40;
//     let total = day * dailyRate;

//     if (day >= 7) {
//         total -= 50;
//     } else
//     if (day >= 3) {
//         total -= 20;
//     }
//     return total;
//   };

//   const countPositivesSumNegatives = (input) => {
//     if (!input || input.length === 0) {
//         return [];
//     }
//         let positiveCount = 0;
//         let negativeSum = 0;

//         for (let i = 0; i < input.length; i++) {
//             if (input[i] > 0) {
//                 positiveCount++;
//             } else if (input[i] < 0) {
//                 negativeSum += input[i];
//             }
//         }
    
//         return [positiveCount, negativeSum];
//     }
    
