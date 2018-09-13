var buttons = document.querySelectorAll('.btn');


buttons.forEach(function(item){
    item.addEventListener('click', function(e){
        
        parentElement = e.target.parentElement;
        
        var inputRadio = e.target.parentElement.querySelectorAll('input[type="radio"]');
        
        //zapisanie w zmiennej wartosci lewego inputa
        var leftValue = parentElement.getElementsByClassName("left-input")[0].querySelector('input').value; //[type="text"]').value;
        
        //zastapienie zawartosci zmiennej wartoscia input radio jesli wystepuje
        inputRadio.forEach(function(item){
            if (item.checked) {
                leftValue = item.value;
            }
        });
        //zapisanie w zmiennej wartosci prawego inputa        
        var rightValue = parentElement.getElementsByClassName("right-input")[0].querySelector('input').value;//[type="text"]').value;
        
        //console.log(leftValue , rightValue);
   
        //tworze diva trzymajace dodane elementy w poziomie
        const NewContentDiv = document.createElement('div');
        NewContentDiv.classList.add('section-content');
        //tworze p w ktore wstawie tekst z formularza
        const leftP = document.createElement('p');
        const rightP = document.createElement('p');
        //dodaje tresc z pol formularza
        leftP.textContent = leftValue;
        rightP.textContent = rightValue;
        //dodaje klase
        leftP.classList.add('left-side');
        rightP.classList.add('right-side');
        //wstawiam do diva
        NewContentDiv.appendChild(leftP);
        NewContentDiv.appendChild(rightP);
        //wstawiam przed formularzem
        parentElement.insertBefore(NewContentDiv, parentElement.querySelector('.section-wrapper'));
        //wyczyszczenie pol formularza
        try {
            //czysci text lewego inputa
            parentElement.getElementsByClassName("left-input")[0].querySelector('input[type="text"]').value = '';
        }
        catch(err) {
            //czysci input radio
            inputRadio.forEach(function(item){
            item.checked = false;
        })}
            //czysci text prawego inputa
        parentElement.getElementsByClassName("right-input")[0].querySelector('input[type="text"]').value = '';
 
    });
});

// delete content
var mainContent = document.querySelector('#main-content');

mainContent.addEventListener('dblclick', (e) => {
    if(e.target.className == 'left-side' && e.target.tagName == 'P' || e.target.className == 'right-side' && e.target.tagName == 'P')
        {   
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
        }
});
// edit content
mainContent.addEventListener('click', (e)=>{
    if(e.target.tagName == 'P')
        {   
            //create edit window
            var editWindow = document.createElement('div');
            var editBtn = document.createElement('button');
            editBtn.className = 'btn';
            editBtn.textContent = 'Zmień';
            editWindow.style.position = 'fixed';
            editWindow.style.width = '300px';
            editWindow.style.height = '200px';
            editWindow.style.backgroundColor = '#333';
            
            let clonedImputs = e.target.parentElement.parentElement.querySelector('.section-wrapper').cloneNode(true);
            console.log(clonedImputs);
            var inputValue = e.target.textContent;
            var input = '';
            var x = clonedImputs.children;
            Array.from(x).forEach(function(item){
               if (item.className == e.target.className){
                   input = item;
               }// radio else if (item.className == e.target.className &&){}
            });
            //radio problem
            input.querySelector('input[type="text"]').value = inputValue;
            //input.querySelector('input[type="text"]').style.height = '100px';
            editWindow.appendChild(input);
            e.target.appendChild(editWindow);
            
            var editElement = e.target;
            
            //edit button event
            editBtn.addEventListener('click',(e)=>{
                editElement.textContent = input.querySelector('input[type="text"]').value;
                editWindow.style.display = 'none';
            });
            
            editWindow.appendChild(editBtn);

        } 
});