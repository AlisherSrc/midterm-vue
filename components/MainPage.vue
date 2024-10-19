<script setup>

</script>

<template>
  <div class="main-page">
    <div class="first-frame">
      <div class="first-frame-text">
        <h1>The new phones are here take a look.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus
          morbi turpis.</p>
        <button class="explore-button"><a href="#">Explore</a></button>
      </div>


      <img src="@/assets/images/main-page/first-frame-phones.png" alt="phones" class="first-frame-image">
    </div>

    <div class="second-frame">
      <div class="second-frame-text" >
        <h1>Shop our latest offers and categories</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus
          morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="second-frame-categories">
        <div class="categories-laptop" id="category">
          <img src="@/assets/images/main-page/second-frame/laptop.png" alt="" class="categories-laptop-image">
          <span class="categories-laptop-text">
            <p class="category-name">Laptop</p>
            <h2 class="category-paragraph">True Laptop Solution</h2>
          </span>
        </div>

        <div class="categories-watch" id="category">
          <img src="@/assets/images/main-page/second-frame/watch.png" alt="" class="categories-watch-image" >
          <span class="categories-laptop-text">
            <p class="category-name">Watch</p>
            <h2 class="category-paragraph">Not just stylish</h2>
          </span>
        </div>
        
        <div class="categories-phones" id="category">
          <img src="@/assets/images/main-page/second-frame/phones.png" alt="" class="categories-phones-image">
          <span class="categories-phones-text">
            <p class="category-name">Phones</p>
            <h2 class="category-paragraph">Your day to day life</h2>
          </span>
        </div>

        <div class="categories-tablets" id="category">
          <img src="@/assets/images/main-page/second-frame/tablet.png" alt="" class="categories-tablets-image">
          <span class="categories-tablets-text">
            <p class="category-name">Tablet</p>
            <h2 class="category-paragraph">Empower your work</h2>
          </span>
        </div>

      </div>
    </div>

    <div class="third-frame">
      <div class="third-frame-text">
        <h1>See the best around here</h1>
        <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
      </div>

      <div class="third-frame-containers">
        <div class="third-frame-container">
          <p>Smart light bulb pack</p>
          <h2>Latest and gratest</h2>
          <button class="explore-button" id="third-frame-button"><a href="#">Explore</a></button>

          <img src="@/assets/images/main-page/third-frame/third-frame-watches.png" alt="" class="third-frame-container-img" style="{left: 40px}">
        </div>

        <div class="third-frame-container">
          <p>Smart light bulb pack</p>
          <h2>Best selling</h2>
          <button class="explore-button" id="third-frame-button"><a href="#">Explore</a></button>

          <img src="@/assets/images/main-page/third-frame/third-frame-best-selling.png" alt="" class="third-frame-container-img">
        </div>

        <div class="third-frame-container">
          <p>Smart light bulb pack</p>
          <h2>Every product</h2>
          <button class="explore-button" id="third-frame-button"><a href="#">Explore</a></button>

          <img src="@/assets/images/main-page/third-frame/third-frame-every-product.png" alt="" class="third-frame-container-img">
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>
.main-page{
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
/* FIRST FRAME STYLES */
.first-frame {
  font-family: 'Readex Pro', sans-serif;
  color: black;

  display: flex;

  height: 550px;

  margin-top: 28px;

  background: #DCE5E2;
  border-radius: 32px;

}

.first-frame-text {
  margin-left: 56px;

  display: flex;
  flex-direction: column;
}

.first-frame-text h1 {
  /* The new phones are here take a look. */
  font-style: normal;
  font-weight: 400;
  font-size: 58px;
  line-height: 70px;


  margin-top: 145px;
  margin-bottom: 0;

  width: 588px;
  height: 140px;

  color: #000000;
}

.first-frame-text p {
  /* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. */


  width: 565px;
  height: 39px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;


  color: #000000;
}

.explore-button {
  background: none;
  box-sizing: border-box;

  height: 50px;
  width: 170px;

  border: 1px solid #000000;
  border-radius: 200px;

  margin-top: 20px;

  cursor: pointer;

  transition: 0.2s ease-in-out;
}

.explore-button a {
  color: black;
  text-decoration: none;

  height: 22px;
  padding: 20px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
}

.explore-button:hover {
  background: #abbab5;
}

/*SECOND FRAME STYLES */
.second-frame {
  margin-top: 60px;

  height: 1018px;
}

.second-frame-text {
  width: 1294px;
  text-align: center;
}

.second-frame-text h1 {
  /* Shop our latest offers and categories */
  width: 780px;
  height: 53px;

  margin-left: 255px;

  font-family: 'Readex Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 52px;

  color: #000000;
}

.second-frame-text p {
  width: 628px;
  height: 34px;

  font-family: 'Readex Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  margin-left: 331px;

  color: #000000;
}

.second-frame-categories {
  margin-top: 50px;
  position: relative;
}

.categories-laptop {
  /* Frame */

  position: absolute;
  width: 555px;
  height: 472px;
  top: 0;
  left: 0;

  background: #FFFFFF;

  padding-left: 45px;
  padding-right: 45px;

  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.25));
}

.categories-laptop-image {
  /* IMAGE */
  height: 377px;
}



.categories-watch {
  background: #FFFFFF;


  /* Watch */

  position: absolute;
  height: 270px;
  width: 555px;
  left: 0;
  top: 544px;

  padding-left: 42px;
  padding-right: 42px;

  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.25));
}

.categories-phones {
  /* Frame */

  position: absolute;
  height: 792px;
  right: 267px;
  top: 0;

  background: #FFFFFF;
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.25));
}

.categories-phones-image {
  margin-top: 144px;
}

.categories-tablets {

  /* Frame */

  position: absolute;
  height: 792px;
  right: -61px;
  top: 0;

  background: #FFFFFF;
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.25));
}

.categories-tablets-image {
  margin-top: 262px;
}

.category-name {
  height: 20px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;

  color: #000000;
  margin-bottom: 0;
}

.category-paragraph {
  font-family: 'Readex Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  height: 77px;
  margin-top: 0;

  color: #000000;
}

.categories-laptop-text {
  position: absolute;
  right: 42px;
  bottom: -15px;
}

.categories-laptop-text p {
  margin-bottom: 0;
  text-align: right;
}

.categories-laptop-text h2{
  margin-top: 0;
  width: 192px;
  text-align: right;
}

.categories-tablets-text {
  position: absolute;
  top:100px;
  right: 30px;

  text-align: center;
}

.categories-tablets-text {
  width: 233px;
}

.categories-phones-text {
  text-align: center;
}

.categories-phones-text h2 {
  width: 250px;
  margin-left: 30px;
}

/* THIRD FRAME CSS */

.third-frame {
  /* Frame */
  position: relative;
  height: 663px;

  font-family: "Readex Pro", sans-serif;
}

.third-frame-text {
  text-align: center;
}

.third-frame-text h1 {
  /* See the best around here */


  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 52px;
  text-align: center;

  margin-bottom: 0;

  color: #000000;
}

.third-frame-containers {
  display: flex;
  margin-top: 40px;
}

.third-frame-container {
  position: relative;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  width: 250px;
  margin-left: 45px;

  padding-right: 77px;
  padding-left: 77px;

  background: #F8F9FA;
  border-radius: 10px;

  height: 453px;

}

.third-frame-container p {
  position: absolute;
  width: 141px;
  height: 17px;
  left: calc(50% - 141px/2);
  top: calc(50% - 17px/2 - 177px);

  font-family: 'Readex Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  text-align: center;

  color: #000000;
}

.third-frame-container h2 {
  /* Latest and gratest */

  position: absolute;
  width: 253px;
  height: 35px;
  left: calc(50% - 253px/2);
  top: calc(50% - 35px/2 - 151px);

  font-family: 'Readex Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  text-align: center;

  color: #000000;
}

.third-frame-container-img {
  position: absolute;
  width: 260px;

  bottom: 10px;
  left: 60px;

}

#third-frame-button {
  position: absolute;
  top: 123px;
  left: 111px
}

#category {
  transition: transform 0.3s ease-in-out;
  border-radius: 10px;
}

#category:hover {
  transform: scale(1.025);
}
</style>