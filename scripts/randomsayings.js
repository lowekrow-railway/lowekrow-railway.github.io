// Add as many sayings as desired in quotation marks
const randomsayings =
    [
        "98462",
        "dude i miss my wife",
        "staff bbq tomorrow",
        "Long before time had a name, the First Spinjitzu Master created Ninjago using four elemental weapons.",
        "This is a paragraph.",
        "this is my first time properly making a site, ain't that neat?",
        "the roster page has been a nightmare to code and store properly, dont ask me to redo it, please, i want to live",
        "dude, a little privacy please???",
        "i always come back",
    ];

    // Random number is generated, limit changes automatically depending on sayings length
    const randomIndex = Math.floor(Math.random() * randomsayings.length);

    // Place the respective selected saying into the random_saying section
    document.getElementById("random_saying").innerText = randomsayings[randomIndex];