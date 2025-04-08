

// document.addEventListener('DOMContentLoaded', function() {
//     var scrollSpeed = 1;  // Adjust speed as needed, higher value means slower scroll
//     var scrollInterval = 15;  // Interval time in milliseconds (lower value means faster)
    
//     var intervalIds = []; // Store interval IDs for each grid

//     function autoScroll(grid) {
//         grid.scrollLeft += scrollSpeed;  // Scroll horizontally
//         if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth) {
//             grid.scrollLeft = 0;  // Reset scroll to the start when it reaches the end
//         }
//     }

//     // Function to start auto-scrolling for a specific grid
//     function startAutoScroll(grid) {
//         var intervalId = setInterval(function() {
//             autoScroll(grid);
//         }, scrollInterval);
//         return intervalId;
//     }

//     // Function to stop auto-scrolling for a specific grid
//     function stopAutoScroll(intervalId) {
//         clearInterval(intervalId);
//     }

//     // Apply auto-scroll to all grids
//     var grids = document.querySelectorAll('.grid, .grida, .gridb, .gridc');  // Select all grids
//     grids.forEach(function(grid) {
//         var intervalId = startAutoScroll(grid);  // Start auto-scrolling for each grid

//         // Pause scrolling when mouse enters any button inside the grid
//         var buttons = grid.querySelectorAll('.btn1');  // Select buttons within the current grid
//         buttons.forEach(function(button) {
//             button.addEventListener('mouseenter', function() {
//                 stopAutoScroll(intervalId);  // Stop auto-scrolling when mouse enters a button
//             });

//             button.addEventListener('mouseleave', function() {
//                 intervalId = startAutoScroll(grid);  // Restart auto-scrolling when mouse leaves the button
//             });
//         });

//         // Store the interval ID in an array to handle multiple grids
//         intervalIds.push(intervalId);
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    var scrollSpeed = 2;  // Adjust speed as needed
    var scrollInterval = 15;  // Interval time in milliseconds (lower value means faster)
    var scrollActive = true;  // Flag to control scrolling

    // Function to handle auto-scrolling
    function autoScroll(grid) {
        if (!scrollActive) return;  // If scrolling is paused, stop the function

        var currentScrollLeft = grid.scrollLeft;
        var maxScroll = grid.scrollWidth - grid.clientWidth;

        // Calculate the new scroll position
        var newScrollLeft = currentScrollLeft + scrollSpeed;

        if (newScrollLeft >= maxScroll) {
            // If we've reached the end, reset to start
            newScrollLeft = 0;
        }

        // Update the scroll position smoothly
        grid.scrollLeft = newScrollLeft;

        // Continue the scroll animation
        requestAnimationFrame(function() {
            autoScroll(grid);
        });
    }

    // Function to start auto-scrolling for a specific grid
    function startAutoScroll(grid) {
        autoScroll(grid);  // Start the smooth auto-scrolling
    }

    // Apply auto-scroll to all grids
    var grids = document.querySelectorAll('.grid, .grida, .gridb, .gridc');  // Select all grids
    grids.forEach(function(grid) {
        startAutoScroll(grid);  // Start auto-scrolling for each grid

        // Pause scrolling when mouse enters any button inside the grid
        var buttons = grid.querySelectorAll('.btn1');  // Select buttons within the current grid
        buttons.forEach(function(button) {
            button.addEventListener('mouseenter', function() {
                scrollActive = false;  // Stop scrolling on hover
            });

            button.addEventListener('mouseleave', function() {
                scrollActive = true;  // Resume scrolling after hover
                autoScroll(grid);  // Restart the scroll from where it left off
            });
        });
    });
});
