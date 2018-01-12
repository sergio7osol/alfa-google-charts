const changeMonths = (ctrlNameAttr, cb_fn) => {
    let ctrl_list = document.querySelectorAll(`[name='${ctrlNameAttr}']`);
    Array.prototype.forEach.call(ctrl_list, (v) => {
        v.addEventListener("change", (event) => {
            const ctrl_el = event.target;
            var checked = ctrl_el.checked;
            console.log("checked: ", checked);
            if (checked) {
                cb_fn(ctrl_el);
            } else {
                console.log("NOT checked");
            }
        });
    });
};

export default changeMonths;