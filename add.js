
const button = document.querySelector('.btn');
const dateOfEducationForm = document.forms['date-holder'];
const schoolForm = document.forms['school-holder'];

const leftSideDiv = document.querySelector('.left-side');
const rightSideDiv = document.querySelector('.right-side');

button.addEventListener('click', function(e){
  // zapisuje zawartosc pola
  const dateOfEducation = dateOfEducationForm.querySelector('input[type="text"]').value;
  const school = schoolForm.querySelector('input[type="text"]').value;
  //tworze element
  const newDate = document.createElement('p');
  const newSchool = document.createElement('p');
  //dodaje tresc z pola
  newDate.textContent = dateOfEducation;
  newSchool.textContent = school;
  //wstawiam przed form
  leftSideDiv.insertBefore(newDate, dateOfEducationForm);
  rightSideDiv.insertBefore(newSchool, schoolForm);
  //console.log("wartosc pola: " , dateOfEducation , " newDate: " , newDate);

});
