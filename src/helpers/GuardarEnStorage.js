export const GuardarEnStorage = (clave, elemento) => { 
  // Conseguir los elementos que ya tenemos en el localstorage:
  let elementos = JSON.parse(localStorage.getItem(clave));
  console.log(elementos);
  // Comprobar si es un array
  if (Array.isArray(elementos)) {
    //Añadir dentro del Array un elemento nuevo
    elementos.push(elemento)
  } else {
    elementos = [elemento];
  }
  // Guardar en el localStorage
  localStorage.setItem(clave, JSON.stringify(elementos));
  // Devolver el objeto guardado
  return elemento;
};
