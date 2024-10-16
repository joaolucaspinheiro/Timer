function timer() {
    function getTimeFromSecond(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }


    const relogio = document.querySelector('.relogio')
    let seconds = 0;
    let timer;

    function startTimer() {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = getTimeFromSecond(seconds)
        }, 1000)
    };

    document.addEventListener('click', function (e) {
        const click = e.target;
        if (click.classList.contains('iniciar')) {

            relogio.classList.remove('pausado')
            clearInterval(timer);
            startTimer();
        }

        if (click.classList.contains('pausar')) {

            relogio.classList.add('pausado')
            clearInterval(timer);
        }

        if (click.classList.contains('zerar')) {

            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            seconds = 0;



        }

    });
}
timer();

