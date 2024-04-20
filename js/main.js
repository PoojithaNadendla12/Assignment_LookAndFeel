/**
 * Your JS code here
 */

/**<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Worldly Flavors</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body id="index">
    <header>
        <img src="..img\usf-logo-png-2.png" alt="USF Logo" class="logo">
        <h1>Worldly Flavors</h1>
        <nav>
            <ul id="navigation">
                <li><a href="index.html">Home</a></li>
                <li><a href="BMI.html">BMI</a></li>
                <li><a href="nutrition.html">Nutrition Facts</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <div class="hero-content">
                <h1>Welcome to Worldly Flavors</h1>
                <p>Explore a world of delicious cuisines!</p>
            </div>
        </section>
        <div class="carousel">
            <div class="carousel-container">
                <div class="carousel-item">
                    <img src="..\img\C image1.jpg" alt="Image 1">
                </div>
                <div class="carousel-item">
                    <img src="..img\C image2.jpeg" alt="Image 2">
                </div>
                <div class="carousel-item">
                    <img src="..\img\C image3.jpeg" alt="Image 3">
                </div>
            </div>
            <div class="carousel-controls">
                <span class="prev"><</span>
                <span class="next">></span>
            </div>
        </div>
    </main>

    <script>

  let index = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  document.querySelector(".next").addEventListener("click", () => {
    moveSlide(1);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    moveSlide(-1);
  });

  function moveSlide(step) {
    index = (index + step + totalSlides) % totalSlides;
    document.querySelector(".carousel-container").style.transform =
      'translateX(' + (-index * 100 / totalSlides) + '%)';
  }
    
    </script>
</body>
</html>
 * Sample code
 */
document.addEventListener('DOMContentLoaded', function() {
  var ulElement = document.getElementById('links');
  var liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode('created by main.js'));

  ulElement.appendChild(liElement);
});
