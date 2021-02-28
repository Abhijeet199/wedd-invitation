const gettimeinsec = () => {
    let d = new Date();
    hour = d.getHours() * 3600;
    min = d.getMinutes() * 60;
    sec = d.getSeconds();
    total_sec = hour + min + sec;

    return (total_sec);
}

before = gettimeinsec();

window.addEventListener('load', () => {
    after = gettimeinsec();
    if (after - before > 2) {
        document.querySelector('.loading').className += 'hidden';
        document.querySelector('.ganesh').style.display = 'none';
        document.querySelector('body').classList.remove('stop-scrolling');
    }
    else {
        setTimeout(() => {
            document.querySelector('.loading').className += 'hidden';
            document.querySelector('.ganesh').style.display = 'none';
            document.querySelector('body').classList.remove('stop-scrolling');
        }, 750);
    }

})