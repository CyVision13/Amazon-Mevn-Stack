<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Profile Page</h2>
          <form action="">
              <!-- Name -->
            <div class="a-spacint-top-medium">
              <label for="">Name</label>
              <input
                type="text"
                class="a-input-text"
                style="width:100%"
                v-model="name"
                :placeholder="$auth.$state.user.name"
              />
            </div>

              <!-- Email -->
            <div class="a-spacint-top-medium">
              <label for="">Email</label>
              <input
                type="email"
                class="a-input-text"
                style="width:100%"
                v-model="email"
                :placeholder="$auth.$state.user.email"
              />
            </div>

              <!-- Password -->
            <div class="a-spacint-top-medium">
              <label for="">Password</label>
              <input
                type="password"
                class="a-input-text"
                style="width:100%"
                v-model="password"
                
              />
            </div>

            <!-- button Dropdown -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span @click="onUpdateProfile" class="a-button-text">
                    Update Profile
                  </span>
                </span>
              </span>
            </div>
          </form>
          <br />
          
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
  data() {
    return {
      name : '',
      email:'',
      password:''
    };
  },
  methods:{
    async onUpdateProfile(){
      let  data = {
        name:this.name,
        email:this.email,
        password:this.password
      }
      try{
        let response = await this.$axios.$put('/api/auth/user',data)
        if(response.success){
          this.name='',
          this.email='',
          this.password=''

          await this.$auth.fetchUser()

        }
      }catch(err){
        console.log(err);
      }
    }
  }
  
};
</script>

<style></style>
