const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question('Введите ваше имя: ', name => {
    readline.question('Введите ваш возраст: ', age => {
        console.log(`Привет, ${name}. Тебе ${age} лет.`);
        readline.close();
    });
});