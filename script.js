// Replace this array with your actual Notion database items
const notionDatabase = [
  "Prize 1",
  "Prize 2",
  "Prize 3",
  "Prize 4",
  "Prize 5",
  "Prize 6",
  // Add more items as needed
];

let spinning = false;
const displayedItem = document.getElementById("displayedItem");

function spinWheel() {
  const randomIndex = Math.floor(Math.random() * notionDatabase.length);
  displayedItem.textContent = notionDatabase[randomIndex];
}

function startSpinning() {
  if (!spinning) {
    spinning = true;
    const spinInterval = 100; // Adjust this value for faster or slower spinning
    const spinDuration = 2000; // Adjust this value for longer or shorter spinning time

    let spinCount = 0;
    const totalSpins = 20; // Adjust this value to control the number of spins

    function spin() {
      spinWheel();
      spinCount++;

      if (spinCount < totalSpins) {
        setTimeout(spin, spinInterval);
      } else {
        spinning = false;
        alert("Congratulations! You won: " + displayedItem.textContent);
      }
    }

    setTimeout(spin, spinDuration);
  }
}
