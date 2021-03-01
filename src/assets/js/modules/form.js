const form = (formSelector, parentSelector) => {
    const form = document.querySelector(formSelector),
          parent = document.querySelector(parentSelector),
          body = document.querySelector('body');

    async function sendReq(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    }

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let message = {
            loading: 'Идет загрузка',
            success: 'Спасибо, скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так'
        };

        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.style.cssText = `
            width: 100%;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .7);
        `;
        body.append(overlay);
        let modal = document.createElement('div');
        modal.style.cssText = `
            width: 300px;
            padding: 40px;
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: 'Raleway', sans-serif;
            font-size: 24px;
            text-align: center;
            color: green;
        `;
        overlay.append(modal);
        body.style.overflow = 'hidden';
        overlay.addEventListener('click', () => {
            overlay.remove();
        });

        let formData = new FormData(this);
        modal.textContent = message.loading;
        sendReq('./assets/server.php', formData)
            .then(res => {
                console.log(res);
                modal.textContent = message.success;
            })
            .catch(() => modal.textContent = message.failure)
            .finally(() => {
                form.reset();
                let timerId = setTimeout(() => {
                    overlay.remove();
                }, 3000);
            });
    });
};

export default form;
