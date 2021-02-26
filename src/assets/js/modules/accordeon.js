const accordeon = (parentSelector, contentSelector, triggerSelector, activeClass) => {
    
    const parent = document.querySelector(parentSelector),
          content = parent.querySelectorAll(contentSelector),
          button = parent.querySelectorAll(triggerSelector);

    button.forEach((item, i) => {
        item.addEventListener('click', function()  {
            removeActive();
            if(!this.nextElementSibling.classList.contains(activeClass)) {
                this.nextElementSibling.classList.add(activeClass);
                // this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            }else {
                this.nextElementSibling.classList.remove(activeClass);
                // this.nextElementSibling.style.maxHeight = 0;
            }
        });
    });

    function removeActive() {
        content.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
};
export default accordeon;