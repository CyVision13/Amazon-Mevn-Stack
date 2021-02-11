<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align:center">Add new product</h2>
            <form a>
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Category</label>
                <select
                  name=""
               
                  class="a-select-option"
                  v-model="categoryID"
                >
                  <option
                    v-for="category in categories"
                    :key="category._id"
                    :value="category._id"
                    >{{ category.type }}</option
                  >
                </select>
              </div>
              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Owner</label>
                <select name=""  class="a-select-option" v-model="ownerID">
                  <option
                    v-for="owner in owners"
                    :key="owner._id"
                    :value="owner._id"
                    >{{ owner.name }}</option
                  >
                </select>
              </div>
              <!-- Title Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Title</label>
                <input
                  style="width:100%"
                  type="text"
                  class="a-input-text"
                  v-model="title"
                />
              </div>
              <!-- Price Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Price</label>
                <input
                  style="width:100%"
                  type="text"
                  class="a-input-text"
                  v-model="price"
                />
              </div>
              <!-- stockQuantity Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">stockQuantity</label>
                <input
                  style="width:100%"
                  type="text"
                  class="a-input-text"
                  v-model="stockQuantity"
                />
              </div>
              <!-- Description Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Description</label>
                <textarea
                  style="width:100%"
                  name=""
                  
                  v-model="description"
                  placeholder="Provide details such as a product description"
                ></textarea>
              </div>
              <!-- Photo Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Add photo</label>
                <div class="a-row a-spacing-top-medium">
                  <input
                    style="width:100%"
                    type="text"
                    class="a-input-text"
                    v-model="photoUrl"
                  />
                  <p>{{ photoName }}</p>
                </div>
              </div>
              <!-- button Dropdown -->
              <hr />
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span @click="onAddProduct" class="a-button-text">
                      Add product
                    </span>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let categories = await $axios.$get(
        "http://localhost:3000/api/categories"
      );
      let owners = await $axios.$get("http://localhost:3000/api/owners");

      const [catResponse, ownerResponse] = await Promise.all([
        categories,
        owners
      ]);
      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      categoryID: null,
      ownerID: null,
      title: '',
      price: 0,
      description: "",
      photoUrl: "",
      photoName: "",
      stockQuantity: 1
    };
  },
  methods: {
    async onAddProduct() {
      let data = {};
      data.title=  this.title
      data.photo = this.photoUrl
      data.description = this.description
      data.ownerID = this.ownerID
      data.price = this.price
      data.categoryID = this.categoryID
      data.stockQuantity = this.stockQuantity
    
 
      let result = await this.$axios.$post(
        'http://localhost:3000/api/products',
        data
      );
     

      this.$router.push("/");
    }
  }
};
</script>

<style></style>
