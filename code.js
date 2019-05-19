/*const small_width = 320;
const init_height_grid_elem = 701;
const height_grid_elem = document.getElementById('grid_container');
const ellipse_top = height_grid_elem.nextElementSibling; 
const ellipse_left = ellipse_top.getElementsByTagName('svg');
const spaces = ellipse_top.getElementsByTagName('circle');
const ellipse_path = ellipse_top.querySelector('#svg_ellipse');

const space_mars = document
const move_space = [2505, 2773.7];


const upd_view = () => {
    if (window.innerWidth > small_width) {
        let new_height_position = parseInt(getComputedStyle(height_grid_elem).height) - init_height_grid_elem;
        let new_left_position = window.innerWidth - small_width;
        //upd_svg_elem(new_left_position);
        if (new_left_position >=850) {
            ellipse_left[0].style.transform = 'translateX(' + 850 + 'px)';
            ellipse_top.style.transform = 'translateY(' + new_height_position + 'px)';
        } else {
            ellipse_left[0].style.transform = 'translateX(' + new_left_position + 'px)';
            ellipse_top.style.transform = 'translateY(' + new_height_position + 'px)';
        }
    }

    function upd_svg_elem(size) {
        if (size >= move_space[1] - move_space[0]) {
            let sizes = ellipse_path.getPointAtLength(move_space[1]);
            spaces[0].style.cx = sizes.x;
            spaces[0].style.cy = sizes.y;
        } else {
            let x_size = move_space[0] + size;
            let sizes = ellipse_path.getPointAtLength(x_size);
            spaces[0].style.cx = sizes.x;
            spaces[0].style.cy = sizes.y;
        }
    }
}
upd_view();
window.addEventListener('resize', upd_view);*/

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