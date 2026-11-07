const gorevler = document.querySelector(".gorevClass"); //yeni gorev yazilan formun tamami
const gorevInput = document.querySelector(".gorevInput"); //gorev yazilan input
const listeUl = document.querySelector(".listeUl"); //gorevlerin eklenecegi ul
const ekleBtn = document.querySelector(".ekleBtn"); //gorev ekleme butonu
const search = document.querySelector(".araInput"); //arama inputu

const gorevListeEkleme = (gorev) => {
  const html = `
    <li
          class="list-group-item d-flex justify-content-between align-items-center liGroup"
        >
          <span>${gorev}</span>
          <i class="fa-solid fa-trash-can cursorPointer delete"></i>
        </li>
    `;
  listeUl.innerHTML += html;
};

gorevler.addEventListener("submit", (e) => {
  e.preventDefault();
  const gorev = gorevInput.value.trim();
  console.log(gorev);

  if (gorev.length) {
    gorevListeEkleme(gorev);
    gorevler.reset();
  }
});

ekleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const gorev = gorevInput.value.trim();
  console.log(gorev);

  if (gorev.length) {
    gorevListeEkleme(gorev);
    gorevler.reset();
  }
});

listeUl.addEventListener("click", (e) => {
  const deleteIcon = e.target.closest(".delete");
  if (deleteIcon) {
    deleteIcon.parentElement.remove();
  }
});

aramayiFiltrele = (searchValue) => {
  // console.log(listeUl.children);
  // //html collection olarak geliyor ve foreach ile gezilemiyor.
  // Bu yüzden arraye çevirmemiz gerekiyor.
  Array.from(listeUl.children)
    .filter((listEleman) => {
      return !listEleman.textContent.toLocaleLowerCase("tr-TR").includes(searchValue); //arama ile eşleşmeyenleri filtrele
    })
    .forEach((listEleman) => {
      //eşleşmeyenleri tek tek dolaş ve display none yap
      listEleman.classList.add("d-none");
    });

  Array.from(listeUl.children)
    .filter((listEleman) => {
      return listEleman.textContent.toLocaleLowerCase("tr-TR").includes(searchValue); //arama ile eşleşenleri filtrele
    })
    .forEach((listEleman) => {
      //eşleşenleri tek tek dolaş ve display block yap
      listEleman.classList.remove("d-none");
    });
};

search.addEventListener("keyup", (e) => {
  searchValue = search.value.trim().toLocaleLowerCase("tr-TR");
  aramayiFiltrele(searchValue);
});
