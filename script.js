
    document.addEventListener('DOMContentLoaded', function () {
        const scrollSpeed = 0.8; // smooth & subtle
        let scrollActive = true;

        // Function to auto-scroll a given grid
        function autoScroll(grid) {
            function scrollLoop() {
                if (!scrollActive) return;

                grid.scrollLeft += scrollSpeed;

                // When scroll reaches halfway, reset to 0
                if (grid.scrollLeft >= grid.scrollWidth / 2) {
                    grid.scrollLeft = 0;
                }

                requestAnimationFrame(scrollLoop);
            }

            requestAnimationFrame(scrollLoop);
        }

        // Function to duplicate content for infinite scroll illusion
        function duplicateContent(grid) {
            const originalContent = grid.innerHTML;
            grid.innerHTML += originalContent; // duplicate it
        }

        // Apply to all grid containers
        const grids = document.querySelectorAll('.grid, .grida, .gridb, .gridc');

        grids.forEach((grid) => {
            duplicateContent(grid);      // step 1: duplicate items
            autoScroll(grid);            // step 2: start smooth scroll

            // Optional: Pause scroll when hovering buttons
            const buttons = grid.querySelectorAll('.btn1');
            buttons.forEach((btn) => {
                btn.addEventListener('mouseenter', () => {
                    scrollActive = false;
                });
                btn.addEventListener('mouseleave', () => {
                    scrollActive = true;
                    autoScroll(grid);
                });
            });

            // Mobile touch pause/resume
            grid.addEventListener('touchstart', () => {
                scrollActive = false;
            });
            grid.addEventListener('touchend', () => {
                scrollActive = true;
                autoScroll(grid);
            });
        });

        // ========================================
        // Header hide on scroll down, show on scroll up
        // ========================================
        let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('header');

        window.addEventListener('scroll', function () {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Scrolling down - hide header
                header.style.top = '-150px'; // Adjust this value to match header height
            } else {
                // Scrolling up - show header
                header.style.top = '0';
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
        
    });

