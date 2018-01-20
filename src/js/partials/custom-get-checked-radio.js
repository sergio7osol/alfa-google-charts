const getCheckedRadioEl = (nameAttr_str, cb_fn) => {
    const checkedRadio = document.querySelector(`[name='${nameAttr_str}']:checked`);
    if (!checkedRadio) {
        throw new Error("function's getCheckedRadioEl selector attribute returned null");
    }
    return cb_fn(checkedRadio);
}

export default getCheckedRadioEl;