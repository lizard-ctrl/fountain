document.addEventListener("DOMContentLoaded", function() {
    // Array of colors to cycle through
    const colors = ['#185fed', '#740e80','#185fed',];
    let index= 0;

    function updateBackgroundColor() {
      const currentHour = new Date().getHours();
      index++;
      const colorIndex = currentHour % colors.length;
      const currentColor = colors[index];

      document.body.style.backgroundColor = currentColor;


        console.log(index);

    if (index >= colors.length) {
      index = 0;
    }

    }

   
    
    console.log(updateBackgroundColor);
    // Update background color every hour
    setInterval(updateBackgroundColor, 5000); // 3600000 milliseconds = 1 hour
  });