
var btnSuccess = document.querySelector('.success')
var btnWarning = document.querySelector('.waring')
var btnError = document.querySelector('.error')
var toasts = document.querySelector('.toasts')


btnSuccess.addEventListener('click', function(e) {
    loadToast('success');
})

btnWarning.addEventListener('click', function(e) {
    loadToast('waring');
})

btnError.addEventListener('click', function(e) {
    loadToast('error');
})

function loadToast(staude) {
    var icon = '';
    switch (staude){
        case 'success':
            icon ='<i class="fa-solid fa-circle-check"></i>';
            break;
        case 'waring':
            icon = ' <i class="fa-solid fa-circle-exclamation"></i>'
            break;
        case 'error':
            icon = '<i class="fa-solid fa-triangle-exclamation"></i>'
            break;
    }
    var toast = document.createElement('div')
    toast.className = `toast ${staude}`;
    toast.innerHTML =`
                    ${icon}
                    <span>This a ${staude} message</span>
                    <div class="line"></div>
                    `
    toasts.appendChild(toast);

    setTimeout(function() {
        toast.style.animation='hide 1s linear forwards';
    },2000);
    setTimeout(function() {
        toast.remove();
    },3000);
}