/**Hacer una función que acomode pares de botas
 * donde es tipo I y D, y tamaños
 */

function organizeShoes(shoes) {
    //Primero separe en dos arreglos las botas que nos dan en el
    //arreglo 
    const izquierda = shoes.filter(b => b.type === "I");
    const derecha = shoes.filter(b => b.type === "R");
    //Creo un arreglo donde voy a guardar las tallas que si tienen par
    const pares = []

    //Hice un for para que tomara el par izquierdo y lo compare con el par derecho para saber si son iguales
    for (let i = 0; i < izquierda.length; i++) {
        //Este segundo for nos ayuda a dar vueltas en las botasc R para comparar las tallas 
        //con las botas I
        for (let j = 0; j < derecha.length; j++) {

            if (izquierda[i].size === derecha[j].size) {
                pares.push(izquierda[i].size); //guardamos la talla
                derecha.splice(j,1); //eliminamos la bota derecha porque ya la registramos
                break; //Nos pasamos a la siguiente bota izquierda con el break
            }
        }
    }
    //Y ya por ultimo imprimimos los pares
    console.log("Pares encontraodos")
    console.log(pares);

}

const shoes = [
{ type: 'I', size: 38 },
{ type: 'R', size: 38 },
{ type: 'R', size: 42 },
{ type: 'I', size: 41 },
{ type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

organizeShoes(shoes2)
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []