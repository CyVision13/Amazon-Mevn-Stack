<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align:center">Add new product</h2>
            <form action="">
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Category</label>
                <select name="" id="" class="a-select-option">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Category</label>
                <select name="" id="" class="a-select-option">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <!-- Title Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Title</label>
                <input style="width:100%" type="text" class="a-input-text" />
              </div>
              <!-- Price Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Price</label>
                <input style="width:100%" type="text" class="a-input-text" />
              </div>
              <!-- Description Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Description</label>
                <textarea
                  style="width:100%"
                  name=""
                  id=""
                  placeholder="Provide details such as a product description"
                ></textarea>
              </div>
              <!-- Photo Dropdown -->
              <div class="a-spacing-top-medium">
                <label for="">Add photo</label>
                <div class="a-row a-spacing-top-medium">
                  <input style="width:100%" type="text" class="a-input-text" />
                  <p>name of the photo</p>
                </div>
              </div>
              <!-- button Dropdown -->
              <hr />
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text">
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
export default {};
</script>

<style></style>
