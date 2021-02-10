<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Add a new owner</h2>
          <form action="">
            <!-- Name -->
            <div class="a-spacint-top-medium">
              <label for="">Name</label>
              <input
                type="text"
                class="a-input-text"
                style="width:100%"
                v-model="name"
              />
            </div>
            <!-- about -->
            <div class="a-spacint-top-medium">
              <label for="">about</label>
              <input
                type="text"
                class="a-input-text"
                style="width:100%"
                v-model="about"
              />
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
                <p>{{  }}</p>
              </div>
            </div>
            <!-- button Dropdown -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span @click="onAddOwner" class="a-button-text">
                    Add Owner
                  </span>
                </span>
              </span>
            </div>
          </form>
          <br />
          <ul class="list-group-item">
            <li v-for="owner in owners" :key="owner._id">
              {{ owner.name }}
            </li>
          </ul>
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
      let response = await $axios.$get("http://localhost:3000/api/owners");
      return {
        owners: response.owners
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      name: "",
      about: "",
      photoUrl: ""
    };
  },
  methods: {
    async onAddOwner() {
      try {
        let data = { name: this.name, about: this.about, photo: this.photoUrl };

        let response = await this.$axios.$post(
          "http://localhost:3000/api/owners",
          data
        );

        this.owners.push({name:this.name});
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
