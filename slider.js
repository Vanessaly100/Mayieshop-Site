var slider = tns({
    container: '.my-slider',
    items: 4,
    slideBy: 1,
    // speed: 5000,
    // autoplayTimeout: 10000,
    autoplay: true,
    controls: false,
   controlsPosition: 'false',
  navPosition: 'bottom',
  mouseDrag: true,
    autoplayButtonOutput: false,
    nav: true,

responsive: {
    0: {
        items: 1 // 1 item for mobile devices
    },
    640: {
        items: 2 // 2 items for tablets
    },
    940: {
        items: 3 // 2 items for tablets
    },
    // 1223: {
    //     items: 3 // 2 items for tablets
    // },
    1024: {
        items: 4 // 4 items for desktops
    }
}
  });