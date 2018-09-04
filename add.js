var buttons = document.querySelectorAll('.btn');


buttons.forEach(function(item){
    item.addEventListener('click', function(e){
        
        parentElement = e.target.parentElement;
        
        var leftValue = parentElement.getElementsByClassName("left-input")[0].querySelector('input[type="text"]').value;
        
        var rightValue = parentElement.getElementsByClassName("right-input")[0].querySelector('input[type="text"]').value;
        
        console.log(leftValue , rightValue);
   
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
        parentElement.getElementsByClassName("left-input")[0].querySelector('input[type="text"]').value = '';
        parentElement.getElementsByClassName("right-input")[0].querySelector('input[type="text"]').value = '';

    });
});
