//system import ES6 module
// import { log, UneConstanteGlobaleMaisPasVraiment } from './utils.js';

// log(UneConstanteGlobaleMaisPasVraiment);

const $main = document.querySelector('main');
const $form = document.querySelector('form');
const $username = document.querySelector('input[name="username"]');
const $password = document.querySelector('input[name="password"]');
const $modalBody = document.querySelector('.modal-body');
const $modalTitle = document.querySelector('.modal-title');

let dataOffetch2;
let dataOffetch1;
let nbOfbnt = 0;
const vicking = false;
let cpt = 0;


$form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // Récupérer les valeurs du formulaire
  const data = {
    username: $username.value,
    password: $password.value
  };

  //system de multifetch pour pouvoir avoir les donnée de connection et les donnée a affiché
const multifetch =[
  fetch('http://localhost/php-start12/api/login.php', {
    method: "POST",
    body: JSON.stringify(data)
  }),
  fetch('http://localhost/php-start12/api/posts.php')
].map(req => req.then(res => res.json()))


  //traitement des datas
  Promise.all(multifetch)
    .then(([data1, data2]) => {
      if(data1 && data1.success){
        dataOffetch1 = data1;
        dataOffetch2 = data2;
        console.log(dataOffetch1)
        console.log(dataOffetch2)
        mainhtml()
      ;
      }else{
        // Mauvais login
        alert("Bad login");
        $username.value = ""
        $password.value = ""
      }
    })
  })
  // Problématique lorsque btn est créé dynamiquement
  // $btn.addEventListener('click', (e) => {
  //   alert("c'est un bouton");
  // });

  // A la place, on écoute le doc, et on réagit en filtrant
  document.addEventListener('click', (e) => {
    const $target = e.target;
    const $nbtarget = Number($target.getAttribute('nb'))
    if($target.classList.contains('btn')){
        mainhtml($nbtarget)
    }else {
        mainhtml()
    }
  });

  function mainhtml($nbtarget) {
    if(typeof $nbtarget === "number"){
      $main.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex flex-column">
            <h1>${dataOffetch2[$nbtarget].title}</h1>
            <p>${dataOffetch2[$nbtarget].body}</p>
            <img src="${dataOffetch2[$nbtarget].image}" class="m-auto">
            <button type="button" class="btn btn-danger">Retour</button>
          <div>
        <div>
      <div>
        `
        $nbtarget = 'NaN';
    }else{
      $main.innerHTML = `
        <h1>Bonjour ${dataOffetch1.username}, Voici quelque escuse pour vous !!!</h1>
        ${
          dataOffetch2.map((data2, idx) => `
            <div class="container">
              <h2>${data2.title}</h2>
              <p>${data2.body}</p>
              <button type="button" class="btn btn-info" nb="${idx}">
              En savoir plus
              </button>
            </div>
          `).join('')
        } 
      `
    }
  }