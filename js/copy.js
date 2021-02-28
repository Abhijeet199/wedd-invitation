var copybutton = document.querySelector('.copybutton');

copybutton.addEventListener('click', () => {
    console.log('1')
    /* Get the text field */
    var copyText = document.getElementById("copyurl");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    copybutton.textContent = 'Copied'

    setTimeout(() => {
        copybutton.textContent = 'Copy'
    }, 20000);
})