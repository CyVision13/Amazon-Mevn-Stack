<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align:center">Update {{ product.title }}</h2>
            <form a>
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Category</label>
                <select name="" class="a-select-option" v-model="categoryID">
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
                <select name="" class="a-select-option" v-model="ownerID">
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
                  :placeholder="product.title"
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
                  :placeholder="product.price"
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
                  :placeholder="product.stockQuantity"
                />
              </div>
              <!-- Description Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Description</label>
                <textarea
                  style="width:100%"
                  name=""
                  v-model="description"
                  :placeholder="product.description"
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
                    :placeholder="product.photo"
                  />
                  <p>{{ photoName }}</p>
                </div>
              </div>
              <!-- button Dropdown -->
              <hr />
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span @click="onUpdateProduct" class="a-button-text">
                      Update product
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
  async asyncData({ $axios, params }) {
    try {
      let categories = await $axios.$get(
        "http://localhost:3000/api/categories"
      );
      let owners = await $axios.$get("http://localhost:3000/api/owners");
      let product = await $axios.$get(
        `http://localhost:3000/api/products/${params.id}`
      );

      const [catResponse, ownerResponse, productResponse] = await Promise.all([
        categories,
        owners,
        product
      ]);
      console.log(productResponse);
      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        product: productResponse.product
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      categoryID: null,
      ownerID: null,
      title: "",
      price: '',
      description: "",
      photoUrl: "",
      photoName: "",
      stockQuantity: ''
    };
  },
  methods: {
    async onUpdateProduct() {
      let data = {};
      data.title = this.title;
      data.photo = this.photoUrl;
      data.description = this.description;
      data.ownerID = this.ownerID;
      data.price = this.price;
      data.categoryID = this.categoryID;
      data.stockQuantity = this.stockQuantity;

      let result = await this.$axios.$put(
        `http://localhost:3000/api/products/${this.$route.params.id}`,
        data
      );

      // this.$router.push("/");
    }
  }
};
</script>

<style></style>
