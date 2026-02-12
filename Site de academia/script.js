
const myObeserve = new IntersectionObserver((entries) => {
    entries.forEach((entries) => {
        if (entries.isIntersecting) {
            entries.target.classList.add('show');
        }else{
            entries.target.classList.remove('show')
        }
    })
}, {threshold: 0.3})

const hidden = document.querySelectorAll('.hidden')
hidden.forEach((e) =>{myObeserve.observe(e)})