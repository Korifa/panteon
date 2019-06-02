function upd_view() {
    const init_size = 1447;
    const wind_width = window.innerWidth
    if (wind_width > 320) {
        const now_size = wind_width * 4.52;
        const ellipse_container = document.getElementById('ellipse_container');
        const svg_stroke_width = ellipse_container.querySelector('#svg_rememberall');
        if (now_size < 2717) {
            const transl_size = - (now_size - init_size)/2.3;
            ellipse_container.style.transform = 'translateX(' + transl_size + 'px)';
            const new_str_size = 5/(now_size/init_size);
            svg_stroke_width.style.strokeWidth = new_str_size;
        } if (now_size >= 2717 && wind_width <= 750.5) {
            ellipse_container.style.transform = 'translateX(' + -632.5 + 'px)';
            svg_stroke_width.style.strokeWidth = 5/(2717/init_size);
        } if (wind_width > 750.5) {
            let transl_size = wind_width - 750.5 - 632.5;
            if (transl_size > 0) transl_size = 160;
            ellipse_container.style.transform = 'translateX(' + transl_size + 'px)';
            svg_stroke_width.style.strokeWidth = 5/(2717/init_size);
        }
    }
}

upd_view()
window.addEventListener('resize', upd_view);


