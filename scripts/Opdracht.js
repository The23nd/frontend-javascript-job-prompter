// Opdracht 1

console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers");
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description);
console.log("De afdeling Customer Service heeft " + departments['customer-service'].numberOfEmployees + " medewerkers");
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.jobs[1].description);

// Opdracht 2

const deptInput = prompt("Over welke afdeling wil je meer informatie? Kies uit [sales / marketing / customer-service]");

switch (deptInput.toLowerCase()) {
    case "sales":
        console.log("Je koos " + deptInput + ", " + departments.sales.description);
        break;
    case "marketing":
        console.log("Je koos " + deptInput + ", " + departments.marketing.description);
        break;
    case "customer-service":
        console.log("Je koos " + deptInput + ", " + departments.marketing.description);
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}

// Opdacht 3

const jobInput = prompt("Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in. \n" +
    "0. " + departments.marketing.jobs[0].title + ", \n" +
    "1. " + departments.marketing.jobs[1].title + ", \n" +
    "2. " + departments.marketing.jobs[2].title + ", \n" +
    "3. " + departments.marketing.jobs[3].title);

let chosen;
switch (jobInput) {
    case "0":
        chosen = departments.marketing.jobs[0];
        break;
    case "1":
        chosen = departments.marketing.jobs[1];
        break;
    case "2":
        chosen = departments.marketing.jobs[2];
        break;
    case "3":
        chosen = departments.marketing.jobs[3];
        break;
    default:
        console.error("Helaas foute invoer " + jobInput);
}
if (chosen !== undefined) {
    console.log("Je koos " + chosen.title + ", een uitdagende rol! " + chosen.description);
}
