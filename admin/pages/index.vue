<template>
  <main>
    <div class="a-spacing-large">
      <div class="container-fluid browsing-history">
        <div class="row">
          <div class="col-sm-8 col-8">
            <h1 class="a-size-large a-spacing-none a-text-normal">
              All Products
            </h1>
            <div class="a-spacing-large"></div>
            <!-- button -->
            <nuxt-link to="/products" class="a-button-buy-again">Add a new product</nuxt-link>
            <nuxt-link to="/category" class="a-button-history margin-right-10"
              >Add new category</nuxt-link>
            <nuxt-link to="/owner" class="a-button-history margin-right-10"
              >Add new owner</nuxt-link>
          
           
          </div>
        </div>
      </div>
    </div>
    <!-- Listing page -->
    <div class="a-spacing-large">
      <div class="container-fluid browsing-history">
        <div class="row">
          <div v-for="(product) in products " :key="product._id"  class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
            <div class="history-box">
              <!--product image -->
              <a href="#" class="a-link-normal">
                <img :src="product.photo" alt="" class="img-fluid" />
              </a>
              <!--product title -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">{{product.title}}</div>
                </span>
              </div>
              <!--product rating -->
              <div class="a-row">
                <a href="">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </a>
                <span class="a-letter-space"></span>
                <span class="a-color-tertiary a-size-small asin-reviews"
                  >(1313)</span
                >
              </div>
              <!--product price -->
              <div class="a-row">
                <span class="a-size-base a-color-price">
                  <span class="p13n-sc-price">${{product.price}}</span>
                </span>
              </div>
              <!-- product Button -->
              <div class="a-row">
                <nuxt-link :to="`/products/${product._id}`" class="a-button-history margin-right-10">Update</nuxt-link>
                <nuxt-link to="" class="a-button-history margin-right-10">Delete</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  // asyncData is fetching data before nuxt page finished loading on the browser.
  // It is good for seo because data will be loaded first
  async asyncData({$axios}){
    try{
      let res = await $axios.$get("http://localhost:3000/api/products")
      
      return {
        products : res.products
      }
    }catch(err){

    }
  }
};
</script>

<style></style>
