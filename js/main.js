const informationTittlePersonal = document.querySelector(".information-tittle");
informationTittlePersonal.addEventListener('click', function(){
  const targetElement = document.querySelector(this.getAttribute('data-target'));
  targetElement.classList.toggle('visible');
}
);

const informationTittleTechnical = document.querySelector("#tittle-information-technical");
informationTittleTechnical.addEventListener('click', function(){
  const targetElement = document.querySelector(this.getAttribute('data-target'));
  targetElement.classList.toggle('visible');
}
);