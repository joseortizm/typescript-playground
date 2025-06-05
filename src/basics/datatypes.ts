const userName: string = "José";             
const temperature: number = 22.5; // JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number             
let lastLogin: null = null;                   
let hasAcceptedTerms: boolean = false;        
hasAcceptedTerms = true;                      

let nextAppointment: undefined = undefined;   
let randomInput; // Variable 'randomInput' implicitly has an 'any' type, but a better type may be inferred from usage.                            

console.log(`Usuario: ${userName}`);
console.log(`Temperatura: ${temperature} °C`);
console.log(`Último inicio de sesión: ${lastLogin}`);
console.log(`¿Aceptó los términos?: ${hasAcceptedTerms}`);
console.log(`Próxima cita: ${nextAppointment}`);
console.log(`Entrada sin tipo definido (any): ${randomInput}`);

