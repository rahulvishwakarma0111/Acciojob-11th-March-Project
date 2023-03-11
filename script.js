function OpeningCeremony(score, callbackFnc){
    setTimeout(() => {
        console.log("Let the games begin");
        score = {red:0, blue:0, green:0, yellow:0};
        callbackFnc(score, LongJump);
    }, 1000);
}

function Race100M(score, callbackFnc){
    setTimeout(() => {
        console.log("Race has been started.");
        console.log("Score before starting the Race: ", score);

        const time = {
            red: Math.floor(Math.random() * 6) + 10,
            blue:  Math.floor(Math.random() * 6) + 10,
            green:  Math.floor(Math.random() * 6) + 10,
            yellow:  Math.floor(Math.random() * 6) + 10
        };

        const sortedArr = Object.keys(time).sort((a, b) => time[a] - time[b]);

        let newObj = {};
        newObj[sortedArr[0]] = 50;
        newObj[sortedArr[1]] = 25;
        
        console.log("Winner of 100M race is: " + sortedArr[0]);

        score[sortedArr[0]] += 50;
        score[sortedArr[1]] += 25;

        console.log("Score after finishing the Race: ", score);


        callbackFnc(score, HighJump);
    }, 3000); 
}

function LongJump(score, callbackFnc){
    setTimeout(() => {
        console.log("Long Jump has been started.");
        console.log("Score before starting the Long Jump: ", score);

        const color = ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)];

        score[color] += 150;

        console.log("Winner of Long Jump: " + color);
        console.log("Score after finishing the Long Jump: ", score);

        callbackFnc(score, AwardCeremony);
    }, 2000);
}

function HighJump(score, callbackFnc){
    console.log("High Jump has been started.");
    console.log("Score before starting the High Jump: ", score);

    let color = prompt("Please enter the Colour: ");

    if (color == null || color == "" || (!(color === "red") && !(color === "green") && !(color === "blue") && !(color === "yellow"))) {
        console.log("Event was cancelled");
        callbackFnc(score);
    } else {
        score[color] += 100;
        console.log("Winner of High Jump: " + color);
        console.log("Score after finishing the High Jump: ", score);

        callbackFnc(score);
    }   
}

function AwardCeremony(score){
    console.log("Award ceremony has been started.");
    
    let sortedArr = Object.keys(score).sort((a, b) => score[a] - score[b]);
    
    let n = sortedArr.length;
    
    console.log(`1st Place: ${sortedArr[n-1]} with ${score[sortedArr[n-1]]} points.`);
    console.log(`2nd Place: ${sortedArr[n-2]} with ${score[sortedArr[n-2]]} points.`);
    console.log(`3rd Place: ${sortedArr[n-3]} with ${score[sortedArr[n-3]]} points.`);

    console.log("Final Scores are: ", score);
}

// Ceremony Start From here
let score = {};
OpeningCeremony(score, Race100M);