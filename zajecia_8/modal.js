(() => {

    console.log('Skrypt sie zaladowal')

    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };



    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }


    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

})();