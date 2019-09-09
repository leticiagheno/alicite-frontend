<template>
    <div>
        <v-parallax 
            class="d-flex align-content-start"
            height="350" 
            src="../assets/banner.jpg">
        </v-parallax>
        <section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h1 id="title">Alicitê</h1>
            </div>
          </v-flex>
            <v-flex xs12>
              <v-container>
              <v-layout row justify-center align-center>
                <v-flex xs12>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large color="pink darken-1">mdi-hanger</v-icon>
                    </v-card-text>
                    <v-card-title class="layout justify-center sub-title">
                      <div>Roupas sob-medida</div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large color="pink darken-1">mdi-dresser</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout sub-title justify-center">
                      <div>Qualidade</div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large color="pink darken-1">mdi-currency-usd</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout sub-title justify-center">
                      <div>Baixo custo</div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
              </v-container>
          </v-flex>
        </v-layout>
      </section>
    </div>
</template>

<script>
import Vuetify from 'vuetify/lib';

export default {
  name: 'Login',
  vuetify: new Vuetify(),
  data: () => ({ }),
  methods: {
  }
};
</script>

<style scoped>

#parallax-item {
    padding: 25px;
}

#container-padding {
    padding: 0px;
    margin: 0px;
}

#title {
    color: #D81B60;
    font-family: 'Sacramento', cursive;
    margin-top: 5px;
    font-size: 5rem;
}

.sub-title {
    padding: 0px 0px 10px 0px;
}

</style>
