const formatToDayValArray = (obj_arr) => {
    const result_arr = obj_arr.map(function(v) {
        return [v.Day, v.Value];
    });
    return result_arr;
};

export default formatToDayValArray;