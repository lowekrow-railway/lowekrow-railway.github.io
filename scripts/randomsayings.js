const randomsayings =
    [
        "98462",
        "dude i miss my wife",
        "staff bbq tomorrow",
        "Long before time had a name, the First Spinjitzu Master created Ninjago using four elemental weapons.",
        "This is a paragraph.",
    ];

    // random number is generated, limit changes automatically depending on sayings length
    const randomIndex = Math.floor(Math.random() * randomsayings.length);

    // place the respective selected saying into the random_saying section
    document.getElementById("random_saying").innerText = randomsayings[randomIndex];