let TabsSvo = class {
    constructor(container_el, options_obj) {
        let tab_list = null; // list of tab elements
        let tab_el = null; // tab element

        // this.mainClass = options_obj.mainClass ? options_obj.mainClass : "tabs-svo";
        if (!container_el.classList.contains(this.mainClass)) {
            return new Error("The 'tabs-svo' main container element must have specific mainClass");
        }
    }
}

export default TabsSvo;