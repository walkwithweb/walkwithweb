document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.acc-header');
  
    headers.forEach(header => {
      header.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
  
        // If the clicked header is already active, just toggle it and return
        if (this.classList.contains('active')) {
          this.classList.remove('active');
          targetContent.classList.remove('active');
          return;
        }
  
        // Activate the clicked header and its content
        this.classList.add('active');
        targetContent.classList.add('active');
  
        // Deactivate all other headers and their contents
        headers.forEach(otherHeader => {
          if (otherHeader !== header) {
            const otherTargetId = otherHeader.getAttribute('data-target');
            const otherTargetContent = document.getElementById(otherTargetId);
  
            otherHeader.classList.remove('active');
            otherTargetContent.classList.remove('active');
          }
        });
      });
    });
  });
  