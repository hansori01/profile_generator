const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question("Fav meal of the day? ", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.question("What is your fav thing to eat? ", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question("Last meal if you were on death row ", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.question("Do you think I'm asking too much about food? Y/N ", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);

              rl.question("What is your favourite cuisine ", (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});