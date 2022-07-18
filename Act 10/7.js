/* ### Problema 7
​
**Objetos-Recursividad:**
​
Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad `id`
​
```
const root2 = {
  id: '123',
  child: [{
    id: '234',
    child: [{
      test: {
        id: 2
      }
    }]
  }],
  child2: [{
    id: '345',
    child3: {
      id: '534'
    }
  }]
};
``` */

const root2 = {
    id: '123',
    child: [{
      id: '234',
      child: [{
        test: {
          id: 2
        }
      }]
    }],
    child2: [{
      id: '345',
      child3: {
        id: '534'
      }
    }]
  };

function encontrar(datos){
    let en_string = datos.toString()
    if(en_string.includes("id") == true){
        console.log("existe")
    }
    console.log(en_string)
}
encontrar(root2)