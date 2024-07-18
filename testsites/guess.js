let maxnum = 100;
let minnum = 0;
let playcount = 5;
let losing = true;

let ans = Math.floor(Math.random() * (maxnum - minnum) + minnum);
let guess;

while (losing && playcount > 0) {
  guess = Number(
    window.prompt(`Give me a number between ${minnum} and ${maxnum}, bitch`)
  );
  if (isNaN(guess)) {
    window.alert("Bruh u dumb? Enter a number!");
  } else if (guess < minnum || guess > maxnum) {
    window.alert("Do you not see the range?");
  } else {
    if (guess > ans) {
      window.alert("Ur guess is too big");
    } else if (guess == ans) {
      window.alert("Fuck! U actually got it right");
      losing = false;
    } else {
      window.alert("Ur guess is too small");
    }
    playcount--;
  }
}

if (losing) window.alert("Haha, fucking loser! The answer is " + ans);
else window.alert("Ok, not bad");
