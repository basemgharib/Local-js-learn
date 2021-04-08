let allSpans = document.querySelectorAll('.buttons span'),
  theInput = document.getElementById('the-input'),
  result = document.querySelector('.results > span');

allSpans.forEach(span => {

  span.addEventListener('click', e => {

    if (e.target.classList.contains('check-item')) {
      checkItem();
    }
    if (e.target.classList.contains('add-item')) {
      addItem();
    }
    if (e.target.classList.contains('delete-item')) {
      deleteItem();
    }
    if (e.target.classList.contains('show-items')) {
      showItems();
    }

  });

});

function show() {
    result.textContent = "The input Can`t be Empty";
}

function checkItem() {

  if (theInput.value !== '') {

    if (localStorage.getItem(theInput.value)) {

      result.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

    } else {

      result.innerHTML = `No  Local Storage Item With The Name <span>${theInput.value}</span>`;

    }

  } else {

    show();

  }

}

function addItem() {

  if (theInput.value !== '') {

    localStorage.setItem(theInput.value, 'test');

    result.innerHTML = `Add <span>${theInput.value}</span> in Local Storage`;

    theInput.value = "";

  } else {

    show();

  }
}

function deleteItem() {
  if (theInput.value !== '') {

    if (localStorage.getItem(theInput.value)) {

      localStorage.removeItem(theInput.value);

      result.innerHTML = `Found Local Storage Item <span>${theInput.value}</span> Deleted`;

      theInput.value = "";

    } else {

      result.innerHTML = `No  Local Storage Item With The Name <span>${theInput.value}</span>`;

    }

  } else {

    show();

  }
}

function showItems() {
  if (localStorage.length) {

    result.innerHTML = ``;

    for (let [key, value] of Object.entries(localStorage)) {

      result.innerHTML += `<span class='keys'>${key}</span>`;

    }

  } else {

    result.innerHTML = `The Local Storage is not have Items`;
    
  }

}