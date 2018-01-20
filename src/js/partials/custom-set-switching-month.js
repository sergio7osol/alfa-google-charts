import loadMonthPagePartOnCtrl from './custom-load-month-page-part-on-ctrl';

const setSwitchingMonth = (nameAttr) => {
    const ctrt_list = document.querySelectorAll(`[name='${nameAttr}']`);
    for (let i = 0; i < ctrt_list.length; i++) {
        ctrt_list[i].addEventListener("change", (e) => {
            loadMonthPagePartOnCtrl(e.target);
        });
    }
};

export default setSwitchingMonth;