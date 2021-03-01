import carousel from "./modules/carousel";
import accordeon from "./modules/accordeon";
import carouselTeam from './modules/carousel_team';
import form from './modules/form';
import video from './modules/video';

window.addEventListener('DOMContentLoaded', () => {
    accordeon(
        '.services__inner_accordeon', 
        '.services__inner_accordeon-item-content', 
        '.services__inner_accordeon-item-title', 'services__inner_accordeon-item-content_active'
        );

    carousel(
        '.testimonials__content_carousel',
        '.testimonials__content_carousel-wrapper-track',
        '.testimonials__content_carousel-wrapper-track-item',
        '.testimonials__content_carousel-wrapper-arrow_up',
        '.testimonials__content_carousel-wrapper-arrow_down'
        );
    carouselTeam(
        '.ourteam__inner_carousel-wrapper',
        '.ourteam__inner_carousel-wrapper-photo-track',
        '.ourteam__inner_carousel-wrapper-content-track',
        '.ourteam__inner_carousel-wrapper-photo',
        '.ourteam__inner_carousel-wrapper-content',
        '.ourteam__inner_carousel-wrapper-photo-track-item',
        '.ourteam__inner_carousel-wrapper-content-track-text',
        '.ourteam__inner_carousel-wrapper-arrow_left',
        '.ourteam__inner_carousel-wrapper-arrow_right',
        'active',
        'active_block'
    );

    form(
        '.contactus__inner_content-form',
        '.contactus'
    );

    video('player', '.intro__content_video-wrapper-play');
});