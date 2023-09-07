
{
  class Carousel {
    constructor() {
      this.next = document.getElementById('carousel_next');
      this.prev = document.getElementById('carousel_prev');
      this.ul = document.querySelector('ul.carousel_list');
      this.slides = this.ul.children;
      this.dots = [];
      this.currentIndex = 0;
    }
    updateButtons() {
      this.prev.classList.remove('hidden');
      this.next.classList.remove('hidden');
      if (this.currentIndex === 0) {
        this.prev.classList.add('hidden');
      }
      if (this.currentIndex === this.slides.length - 1) {
        this.next.classList.add('hidden');
      }
    }
    move() {      
      this.ul.style.transform = `translateX(${-100 * this.currentIndex}%)`;
    }    
    setupDots() {
      for (let i = 0; i < this.slides.length; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
          this.currentIndex = i;
          this.updateDots();
          this.updateButtons();
          this.move();
        });
        this.dots.push(button);
        document.querySelector('nav.carousel_button').appendChild(button);
      }
      this.dots[0].classList.add('current');
    }
    updateDots() {
      this.dots.forEach(dot => {
        dot.classList.remove('current');
      });
      this.dots[this.currentIndex].classList.add('current');
    }
    addListeners() {
      this.next.addEventListener('click', () => {
        this.currentIndex++;
        this.updateButtons();
        this.updateDots();
        this.move();
      })
      this.prev.addEventListener('click', () => {
        this.currentIndex--;
        this.updateButtons();
        this.updateDots();
        this.move();
      })
    }
    automove() {
      setTimeout(() => {
        // this.move();
        this.currentIndex++;
        if (this.currentIndex > this.slides.length - 1) {
          this.currentIndex = 0;
        }        
        this.updateButtons();
        this.move();
        this.automove();
      }, 5000);
    }
  }


  const carousel = new Carousel();
  carousel.updateButtons();
  carousel.setupDots();
  carousel.addListeners(); 
  carousel.automove();  
}

{
  
  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        headerSpdelete.classList.add('deletes');
        headerPcdelete.classList.add('deletes');

      } else {
        header.classList.remove('scrolled');
        headerSpdelete.classList.remove('deletes');
        headerPcdelete.classList.remove('deletes');
      }
    });
  }

  const header = document.querySelector('header');
  const headerSpdelete = document.querySelector('.sp_menu > .headerBottom');
  const headerPcdelete = document.querySelector('.pc_menu > .headerBottom');

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
    onScrollObserver.observe(document.getElementById('header_target'));
}