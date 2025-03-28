document.addEventListener('DOMContentLoaded', function() {
    var grid,grid = document.querySelector('.grid');  // Target your grid container
    var scrollSpeed = 1 ;  // Adjust speed as needed, higher value means slower scroll
    var scrollInterval = 10;  // Interval time in milliseconds (lower value means faster)

    function autoScroll() {
        grid.scrollLeft += scrollSpeed;  // Scroll horizontally
        if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth) {
            grid.scrollLeft = 0;  // Reset scroll to the start when it reaches the end
        }
    }

    setInterval(autoScroll, scrollInterval);
});
