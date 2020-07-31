const inputs = document.querySelectorAll('form .camp input');
//console.log(inputs);

inputs.forEach(input =>{
    input.addEventListener('blur', validateInput);
});

inputs.forEach(input =>{
    input.addEventListener('input', validateInput);
});

function validateInput(e){
  //  console.log(e.target.value);
  const state= ['validate', 'no-validate'];

  let clase;
  if(e.target.value.length === 0){
      clase= state[1];
  }else {
      clase= state [0];
  }

  e.target.classList.remove(...state);
  e.target.nextElementSibling.classList.remove(...state);
  e.target.classList.add(clase)
  e.target.nextElementSibling.classList.add(clase);

  //console.log(clase);
//inyectar dinamicamente el div con el error
  if(clase==='no-validate'){
    
    if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta'){
            // construir un mensaje de error
    const errorDiv = document.createElement('div');

    errorDiv.appendChild( document.createTextNode('Este campo es obligatorio'));
    errorDiv.classList.add('alerta');
    //insertar el error

    e.target.parentElement.parentElement.insertBefore(errorDiv,
      e.target.parentElement.nextElementSibling);
    }

  }else{
    if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta'){
    e.target.parentElement.nextElementSibling.remove();
    }

  }

}

// Mostrar y ocultar password

const seePasswordBtn= document.querySelector('form .camp span');

seePasswordBtn.addEventListener('click', e =>{
    const passwordInput = document.querySelector('#password');

    if(e.target.classList.contains('show')){
        // mostrar el texto
        e.target.classList.remove('show');
       
        e.target.textContent= 'Ocultar';

        passwordInput.type = 'text';
    }else {
        e.target.classList.add('show');
        //cambiar el texto
        e.target.textContent= 'Mostrar';
        //Cambiamos el password
        passwordInput.type = 'password';

    }
})
