const populateEls = (obj_arr) => {
    obj_arr.forEach(function(v) {
        document.getElementById(v.id).textContent = v.value;
    });
};

export default populateEls;