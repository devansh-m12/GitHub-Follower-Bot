// Ensure the DOM is ready before running the script.
$(document).ready(function() {
    // Generate a shorter delay between 300-600ms for faster execution
    var seed = parseInt(Math.random() * 300) + 300;
    
    // Speed multiplier (lower = faster)
    var speedMultiplier = 1.0;
    
    // Check pagination state.
    var bt_disabled = $('.pagination span').text() === "Previous";
    var pre_next_btn = $('.pagination a').length;
    
    // More comprehensive selector for GitHub follow buttons/forms
    // This covers various possible implementations of follow buttons
    var users = $('form.follow, form[data-remote="true"][action*="follow"], input[value="Follow"], button.js-follow-button, a.js-follow-button, a.follow');
    
    // Log discovery information
    console.log('Found ' + users.length + ' potential follow elements');
    users.each(function(i, el) {
      console.log('Element ' + i + ' type: ' + el.tagName + ', classes: ' + $(el).attr('class'));
    });
  
    // Extract current page number from URL (e.g., ?page=12&tab=following).
    var urlPara = location.search;
    var currentPage = location.search.match(/-?\d+\.?\d*/) ? parseInt(location.search.match(/-?\d+\.?\d*/)[0]) : 0;
  
    // Remove any unfollow forms if present.
    $('.unfollow').remove();
  
    // Process follow actions in batch with shorter delays
    var processFollowAction = function(index) {
        if (index >= users.length) {
            // All users processed, move to next page
            console.log('All follow actions completed, moving to next page...');
            if (bt_disabled) {
                $('.pagination a')[0].click();
            } else if (pre_next_btn === 0) {
                console.log('done......');
            } else {
                // Direct navigation with simple URL parameter replacement
                window.location = window.location.pathname + location.search.replace(currentPage, currentPage + 1);
            }
            return;
        }
        
        var $el = $(users[index]);
        console.log('Processing follow element ' + (index + 1));
        
        // Check element type and perform appropriate action
        if ($el.is('form')) {
            $el.submit();
        } else if ($el.is('button') || $el.is('input')) {
            $el.click();
        } else if ($el.is('a')) {
            $el.click();
        }
        
        // Process next user after delay
        setTimeout(function() {
            processFollowAction(index + 1);
        }, seed * speedMultiplier);
    };
    
    // Start processing follow actions
    processFollowAction(0);
});
  