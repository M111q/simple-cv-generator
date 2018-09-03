//button
const button = document.querySelector('.btn');
//inputy z formularza
const dateOfEducationForm = document.forms['date-holder'];
const schoolForm = document.forms['school-holder'];

button.addEventListener('click', function(e){
  // zapisuje zawartosc pol z formularza
  const dateOfEducation = dateOfEducationForm.querySelector('input[type="text"]').value;
  const school = schoolForm.querySelector('input[type="text"]').value;
  //tworze diva trzymajace dodane elementy w poziomie
  const educationNewContent = document.createElement('div');
  educationNewContent.classList.add('education-content');
  //tworze p w ktore wstawie tekst z formularza
  const newDate = document.createElement('p');
  const newSchool = document.createElement('p');
  //dodaje tresc z pol formularza
  newDate.textContent = dateOfEducation;
  newSchool.textContent = school;
  //dodaje klase
  newDate.classList.add('left-side');
  newSchool.classList.add('right-side');
  //wstawiam do diva
  educationNewContent.appendChild(newDate);
  educationNewContent.appendChild(newSchool);
  //wstawiam przed formularzem
  document.querySelector('#edukacja').insertBefore(educationNewContent, document.querySelector('#education-wrapper'));
  //wyczyszczenie pol formularza
  dateOfEducationForm.querySelector('input[type="text"]').value = '';
  schoolForm.querySelector('input[type="text"]').value = '';
});
