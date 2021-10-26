const slides = document.querySelectorAll('.gallery__slide');
const containers = document.querySelectorAll('.gallery__container');
const auto_clickable_slides = document.querySelectorAll('.auto_clickable_slides');
class Auto_clicker{
    constructor(slides){
        this.click_time = 1800;
        this.slides = slides;
        console.log(this.slides);
        this.slide_counter = 0;
        this.auto_click_interval_id = setInterval(()=>{
            do_slide_active(this.slides.item(this.slide_counter++));
            if(this.slides.item(this.slide_counter) === null) this.slide_counter = 0;
        }, this.click_time);
    }

    stop_auto_clicker(){
        clearInterval(this.auto_click_interval_id);
    }
}

let auto_clicker = new Auto_clicker(auto_clickable_slides);

for (const slide of slides){
    slide.addEventListener('click', ()=>{
        auto_clicker.stop_auto_clicker();
        do_slide_active(slide);
    });
}

function clear_active_classes(elements){
    elements.forEach((element)=>{
        element.classList.remove('active');
    })
}

function do_slide_active(slide){
    clear_active_classes(containers);
    clear_active_classes(slides);
    slide.classList.add('active');
    slide.parentElement.classList.add('active');
}