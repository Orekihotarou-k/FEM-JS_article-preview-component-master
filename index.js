const shareBtn = document.querySelector('.share')
const share = document.querySelector('.share-container')


shareBtn.addEventListener('click', function() {
    share.style.display = 'flex';
})

window.addEventListener('click', function(e){

    if (e.target === share ){
        share.style.display = 'none';
    }
})