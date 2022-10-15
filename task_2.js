let uan;
let usd;
let value = 27;
let message;

for (usd = 10; usd <= 100; usd = usd + 10) {
    uan = usd * value;
    message = usd + ' USD - ';
    if (usd === 100) {
        document.write(message + uan + " UAN<br>");
    } else {
        document.write(message + uan + " UAN<br>");
    }  
}