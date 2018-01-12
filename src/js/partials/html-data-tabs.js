(() => {
    "use strict";

    var active_class = "tab-active";

    // Al hacer click sobre una pestanha:
    // Mostrar u ocultar contenedores
    const onclick = ev => {
        let tab = ev.target;
        let tabs = ev.currentTarget;

        // Verificar si se debera trabajar sobre esta pestanha
        if (!tab.hasAttribute('tabs-tab-id')) {
            return;
        } else if (tab.classList.contains(active_class)) {
            return;
        }
        
        hidePrevTab(tabs);

        showTab(tab, tabs);
    };

    // Preparar todas las pestanhas y sus contenedores
    const init = () => {
        // Obtener todos los elementos que
        // utilizaran pestanhas
        let tabs = document.querySelectorAll('[tabs]');

        // Por cada elemento...
        for (let el of tabs) {
            // Escuchar el evento click
            el.addEventListener('click', onclick);

            // Obtener la lista de pestanhas dentro del elemento
            let list = el.querySelectorAll('[tabs-tab-id]');

            // Por cada pestanha dentro del elemento...
            for (let tab of list) {
                // Verificar si tiene la clase active
                if (tab.classList.contains(active_class)) {
                    activeTabs(tab, el); continue;
                }

                // Ocultar contenedor de esta pestanha
                let container_id = tab.getAttribute('tabs-tab-id');
                let container = document.getElementById(container_id);

                container.style.display = "none";
            }
        }
    };
    
    const hidePrevTab = tabs => {
        let tab = tabs.querySelector(`.${active_class}`);
        if (tab === null) {
            return;
        }

        let container_id = tab.getAttribute('tabs-tab-id');
        let container = document.getElementById(container_id);

        activeTabs(tab, tabs, true);

        // Quitar la clase active y ocultar
        tab.classList.remove(active_class);
        container.style.display = "none";
    };

    const showTab = (tab, tabs) => {
        // Elemento que debera mostrarse ahora
        let container_id = tab.getAttribute('tabs-tab-id');
        let container = document.getElementById(container_id);

        activeTabs(tab, tabs);

        tab.classList.add(active_class);
        container.style.display = "block";
    };

    // Estilos para activar o desactivar pestanhas
    const activeTabs = (tab, tabs, remove = false) => {
        if (!tabs.hasAttribute('tabs-tab-active')) {
            return;
        }

        let active_color = tabs.getAttribute('tabs-tab-active').trim();

        if (remove) {
            if (active_color.startsWith('.')) {
                tab.classList.remove(active_color.substring(1));
            } else {
                tab.style['background-color'] = null;
            }
        } else {
            if (active_color.startsWith('.')) {
                tab.classList.add(active_color.substring(1));
            } else {
                tab.style['background-color'] = active_color;
            }
        }
    };

    window.onload = ev => {
        setTimeout(init, 100);
    };
})();
