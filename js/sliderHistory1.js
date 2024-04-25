(function()
{
    const sliders = [...document.querySelectorAll('.testimony__body4A')];
    const buttonNext = document.querySelector('#next4')
    const buttonBefore = document.querySelector('#before4')
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    })

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show4A').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show4A');
        if (value === sliders.length +1 || value === 0)
        {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('testimony__body--show4A');
        
    }

    
})();