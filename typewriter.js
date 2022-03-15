const typewriter = (sentence) => {
  let count = 1000;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, count);
    count += 50;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, 3000);
};

typewriter("hello there from lighthouse labs");