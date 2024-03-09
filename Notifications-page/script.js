document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with class 'notification'
    const notificationDivs = document.querySelectorAll('.notification');
    // Select the element with the id 'notification-count'
    const notificationCount = document.getElementById('notification-count');
  
    // Add a click event listener for each notification div
    notificationDivs.forEach(notificationDiv => {
      notificationDiv.addEventListener('click', function () {
        // Find the attention span within the clicked notification div
        const attentionSpan = notificationDiv.querySelector('.attention');
  
        // Check if the attention span exists and if the div has not been clicked before
        if (attentionSpan && !notificationDiv.classList.contains('clicked')) {
          // Mark the div as clicked
          notificationDiv.classList.add('clicked');
          // Decrease the notification count
          decreaseNotificationCount();
          // Remove the attention span within the clicked notification div
          attentionSpan.style.display = 'none'; // or any other method you prefer
          // Change background color to white
          notificationDiv.style.backgroundColor = 'var(--White)';
        }
      });
    });
  
    // Add click event listener for "Mark all as read"
    const markAllRead = document.getElementById('mark-all-read');
    if (markAllRead) {
      markAllRead.addEventListener('click', function () {
        // Reset the notification count
        resetNotificationCount();
        // Remove all attention spans and change background color to white for each notification div
        notificationDivs.forEach(notificationDiv => {
          const attentionSpan = notificationDiv.querySelector('.attention');
          // Check if the attention span exists
          attentionSpan && (attentionSpan.style.display = 'none'); // or any other method you prefer
          // Change background color to white
          notificationDiv.style.backgroundColor = 'var(--White)';
          // Remove the 'clicked' class to allow counting again
          notificationDiv.classList.remove('clicked');
        });
      });
    }
  
    // Function to decrease the notification count
    function decreaseNotificationCount() {
      if (notificationCount) {
        // Ensure the count doesn't go below 0
        notificationCount.innerText = Math.max(parseInt(notificationCount.innerText, 10) - 1, 0);
      }
    }
  
    // Function to reset the notification count
    function resetNotificationCount() {
      if (notificationCount) {
        // Set the notification count to 0
        notificationCount.innerText = '0';
      }
    }
  });