class TouchRocksLink {
    constructor(item) {
        this.link = item;
        this.linkSibling = this.link.nextElementSibling;
        this.linkData = !!this.link.getAttribute('data');
        this.handleThouchies = this.handleThouchies.bind(this);
        this.link.addEventListener('click', this.handleThouchies);
    }

    handleThouchies(e) {
        if (this.linkData) {
            this.link.style.color = '#fff';
            this.link.classList.add('pseudoclass')
            this.linkSibling.style.display = 'block';
            this.linkData = !this.linkData
        } else {
            this.link.style.color = '';
            this.link.classList.remove('pseudoclass')
            this.linkData = !this.linkData
            this.linkSibling.style.display = 'none';
        }
    }

}
{
    const underwater_rocks_ul = document.getElementById('nav_list');
    const underwater_rocks_links = underwater_rocks_ul.querySelectorAll('a');
    for (let i = 0; i < underwater_rocks_links.length; i++) {
        new TouchRocksLink(underwater_rocks_links[i])
    }
}




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


