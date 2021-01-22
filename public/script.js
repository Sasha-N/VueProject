const validFIO = () => {
    let elem = document.querySelector(".input__name");
    return /^[А-Яа-яЁё\x20]{2,}/.test(elem);
};