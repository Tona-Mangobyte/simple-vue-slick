<template>
    <div class="p-event__list" data-js="event-page-slider">
        <slot></slot>
    </div>
</template>

<script>
import 'dist/simple-vue-slick.min.js';
import 'dist/styles.css';
export default {
    name: 'Carousel',
    mounted() {
        $('[data-js="event-page-slider"]').not('.slick-initialized').slick({
            autoplay: false,
            infinite: true,
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            responsive: [{
                breakpoint: 768,
                settings: "unslick"
            }]
        });
    }
}
</script>

