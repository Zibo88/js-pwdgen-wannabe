// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Richiesta Nome utente
const userName = prompt ('Dimmi il tuo nome');
// console.log (userName);

// Richiesta Cognome Utente
const userLastName = prompt ('Dimmi il tuo cognome');
// console.log (userLastName);

// Richiesta colore Preferito
const favoriteColor = prompt ('Dimmi il tuo colore preferito');
// console.log (favoriteColor);

// Password
const randomPassword = userName + userLastName + favoriteColor + 21;
console.log (randomPassword);

// Messaggio per l'utente
document.getElementById(`password`).innerHTML= 'la tua password è ' + randomPassword;
console.log(password);