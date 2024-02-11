function createSlider(sliderId, images) {
    const slider = document.getElementById(sliderId);
    const sliderImages = slider.querySelectorAll('.slider__project-img');
    const controlls = slider.querySelectorAll('.controlls');
    let imageIndex = 0;

    function show(index) {
        sliderImages[imageIndex].classList.remove('active');
        sliderImages[index].classList.add('active');
        imageIndex = index;
    }

    controlls.forEach((e) => {
        e.addEventListener('click', (event) => {
            if (event.target.classList.contains('prev')) {
                let index = imageIndex - 1;

                if (index < 0) {
                    index = sliderImages.length - 1;
                }

                show(index);
            } else if (event.target.classList.contains('next')) {
                let index = imageIndex + 1;
                if (index >= sliderImages.length) {
                    index = 0;
                }
                show(index);
            }
        });
    });

    show(imageIndex);
}



createSlider('slider1');
createSlider('slider2');
createSlider('slider3');
createSlider('slider4');
createSlider('slider5');
createSlider('slider6');
createSlider('slider7');
createSlider('slider8');
