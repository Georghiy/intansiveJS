document.addEventListener('DOMContentLoaded', () => {
    const formsNList = document.querySelectorAll('form');
    console.log(formsNList)
    formsNList.forEach(form => {
        form.addEventListener('submit', (event) =>{
            event.preventDefault()
            const data = new FormData(form)
            data.append('form', form.classList)
            console.table([...data.entries()])

        })
    }) 

});