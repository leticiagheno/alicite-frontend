<template>
    <v-container fill-height>
        <v-col md="10">
            <h2> Medidas </h2>        
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Torax"
                            color="pink darken-1"
                            v-model="torax"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                    <v-col>
                        <v-text-field
                            label="Busto"
                            color="pink darken-1"
                            v-model="busto"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Cintura"
                            color="pink darken-1"
                            v-model="cintura"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                    <v-col>
                            <v-text-field
                            label="Quadril"
                            color="pink darken-1"
                            v-model="quadril"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Altura"
                            color="pink darken-1"
                            v-model="altura"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                    <v-col>
                            <v-text-field
                            label="Ombro"
                            color="pink darken-1"
                            v-model="ombro"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Altura manga curta"
                            color="pink darken-1"
                            v-model="alturaCurta"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                    <v-col>
                            <v-text-field
                            label="Altura manga longa"
                            color="pink darken-1"
                            v-model="alturaLonga"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Largura - Coxa"
                            color="pink darken-1"
                            v-model="larguraCoxa"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                    <v-col>
                            <v-text-field
                            label="Largura - Panturrilha"
                            color="pink darken-1"
                            v-model="larguraPanturrilha"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-area
                            label="Observações"
                            color="pink darken-1"
                            v-model="observacoes"
                            outlined
                            rounded
                            required
                        />
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
        <v-col md="2">
            <v-row>
                <v-img :src="produto.foto"/>
            </v-row>
            <v-row>
                <h4>{{produto.nome}}</h4>
            </v-row>
            <v-row class="descricao">
                <span> {{produto.descricao}}</span>
            </v-row>
            <v-row class="d-flex flex-row-reverse align-self-end">
                <v-btn class="buttons" @click="save"> Salvar  </v-btn>
                <v-btn class="buttons" @click="back"> Voltar </v-btn>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
import Vuetify from "vuetify/lib";
import router from "../router";

export default {
  name: "PurchPage",
  props: ['produto'],
  vuetify: new Vuetify(),
  data: () => ({
    width: 600,
    torax: '',
    busto: '',
    cintura: '',
    quadril: '',
    altura: '',
    ombro: '',
    alturaCurta: '',
    alturaLonga: '',
    larguraCoxa: '',
    larguraPanturrilha: '',
    observacoes: ''
  }),
  methods: {
      save() {
      },
      back() {
        router.push({ name: "produtosCliente" });
      }
  }
};
</script>

<style scoped>

.buttons {
    margin: 5px;
}

.descricao {
    margin-bottom: 10px;
}

#page {
  overflow-y: auto;
}

#card-header {
  padding: 10px 30px;
  margin-bottom: 0px;
  color: #d81b60;
  background-color: #eeeeee;
}

#card-title {
  padding: 5px 5px 0px 5px;
  margin-bottom: 0px;
  color: #d81b60;
}

#card-layout {
  padding: 15px;
}

#card-text {
  padding-top: 35px;
}

#btn-new-user {
  padding-right: 35px;
  margin: 0px !important;
}

#input-question {
  margin: 15px 0px;
}
</style>
