window.addEventListener('click', function(event) {
    let blackBlock = document.querySelector('[data-block]')
    if (event.target.closest('.reg')) {
        let regist = document.querySelector('[data-register]');
        regist.classList.add('inlock');
        blackBlock.classList.add('block-black')
    }
    if (event.target.closest('.input')) {
        let open = document.querySelector('[data-welcome]');
        open.classList.add('inlock');
        blackBlock.classList.add('block-black')
    }
    if (event.target.closest('[data-arrow]')) {
        let registerBlock = event.target.closest('.register');
        registerBlock.classList.remove('inlock')
        blackBlock.classList.remove('block-black')
    }
})