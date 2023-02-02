function generateQuote() {
    var quotes = [
        "Why was the math book sad? Because it had too many problems.",
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
        "Why don't scientists trust atoms? Because they make up everything.",
        "Why was the computer cold? Because it left its Windows open.",
        "Why did the cookie go to the doctor? Because it felt crumbly.",
        "Why don't oysters give to charity? Because they're shellfish.",
        "Why did the bicycle fall over? Because it was two-tired.",
        "Why did the tomato turn red? Because it saw the salad dressing.",
        "Why did the monkey put a piece of paper over its head? To avoid a brain freeze.",
        "Why did the man put his money in the freezer? He wanted cold hard cash.",
        "Why did the chicken cross the playground? To get to the other slide.",
        "Why did the frog call his insurance company? He had a jump in his car.",
        "Why did the man put his clock in the oven? He wanted to have hot time.",
        "Why did the boy bring string to the store? He wanted to tie up the loose ends.",
        "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
        "Why did the man put his money in the blender? He wanted to make liquid assets.",
        "Why did the duck go to the doctor? He had a bill in his throat.",
        "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
        "Why did the man put his pants on backwards? He wanted to back into the future.",
        "Why did the man put his money in the blender? He wanted to make liquid assets.",
        "Why did the belt go to jail? Because it held up a pair of pants.",
        "Why did the man sleep with a ruler? He wanted to have a measuring good night.",
        "Why did the man put his money in the toaster? He wanted to have warm bread.",
        "Why did the man cross the road? To get to the stupid joke.",
        "Why did the man put his money in the blender? He wanted to make liquid assets.",
        "Why did the man put his money in the oven? He wanted to have hot pockets.",
        "Why did the man put his money in the blender? He wanted to make liquid assets.",
        "Why did the man put his money in the fridge? He wanted to keep his cool.",
        "Why did the man put his money in the freezer? He wanted to have a cold wallet.",
        "Why did the man put his money in the blender? He wanted to make liquid assets."

    ];
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];

    var quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = quote;
};