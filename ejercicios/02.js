let nombre = prompt(" hola, ingresa tu nombre ");
let glosario = prompt( nombre +  " que palabra deseas traducir ");


switch (glosario) {
    case "casa":
        alert("house");
        break;

        case "mesa":
            alert("table");
            break;

            case "perro":
                alert ("dog");
                break;

                 case "gato":
                 alert ("cat");
                 break;


    default:
        alert("lo sentimos vuelve a intentarlo.")
        break;
}