var contentSections = $('.single_page_post');
jQuery(window).on('scroll', function () {
    updateNavigation();
});
function updateNavigation() {
    contentSections.each(function () {
        $this = $(this);
        var theID = $this.attr("id");
        if ($this.offset().top - $(window).scrollTop() < 0) {
            var s = $(window).scrollTop()-0,
            d = $this.outerWidth(),
            c = $this.offset().top;
            var scrollPercent = ((s-c) / (d)) * 100;
            var progresswidth = 0+scrollPercent;
            $("a[href='#" + theID + "']").prev().css({'width' : progresswidth+"%", 'display' : 'block'});
            $("a[href='#" + theID + "']").parents('.post_page_sidebar').addClass("current");
        } else {
            $("a[href='#" + theID + "']").prev().css({'display' : 'none'});
            $("a[href='#" + theID + "']").parents('.post_page_sidebar').removeClass("current");
        }
    });
} 

//  Menu JS
    
    (function() {

        var dropBtns = document.querySelectorAll('.dropdown');

        function closeOpenItems() {
            openMenus = document.querySelectorAll('.dropdown-menu');
            openMenus.forEach(function(menus) {
                menus.classList.remove('show');
            });
        }

        dropBtns.forEach(function(btn) {

            btn.addEventListener('click', function(e) {
                var
                    dropContent = btn.querySelector('.dropdown-menu'),
                    shouldOpen = !dropContent.classList.contains('show');
                e.preventDefault();

                // First close all open items.
                closeOpenItems();
                // Check if the clicked item should be opened. It is already closed at this point so no further action is required if it should be closed.
                if (shouldOpen) {
                    // Open the clicked item.
                    dropContent.classList.add('show');
                }
                e.stopPropagation();
            });


        });

        //   close menus when clicking outside of them
        window.addEventListener('click', function(event) {
            if (event.target != dropBtns) {
                // Moved the code here to its own function.
                closeOpenItems();
            }
        });

    })();

//  Horizontal Drag

const slider = document.querySelector('.bz-examples-scroll-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});
