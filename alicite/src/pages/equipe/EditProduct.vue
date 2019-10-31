<template>
  <v-container fill-height>
    <v-card class="mx-auto" :width="width">
      <v-list-item id="card-header" class="d-flex justify-space-between">
        <v-row>
          <v-icon color="pink darken-1" x-large>mdi-hanger</v-icon>
          <h2 id="card-title">Editar Produto</h2>
        </v-row>
      </v-list-item>
      <v-card-text id="card-text">
        <v-form>
         <div>
            <div id="box" class="d-flex align-end flex-column" >
             <v-img max-height="100%" :src="foto"/>
              <label class="upload">
                <v-icon color="pink darken-1" class="custom-file-upload" large>mdi-camera</v-icon>
                <input type="file" @change="loadTextFromFile"/>
              </label>
            </div>
          </div>
          <v-text-field
            label="Nome"
            color="pink darken-1"
            v-model="nome"
            outlined
            rounded
            required
            :error-messages="nomeErrors"
            @input="$v.nome.$touch()"
            @blur="$v.nome.$touch()"
          />
          <v-textarea
            label="Descrição"
            color="pink darken-1"
            v-model="descricao"
            outlined
            rounded
            required
            :error-messages="descricaoErrors"
            @input="$v.descricao.$touch()"
            @blur="$v.descricao.$touch()"
          />
          <v-select
            :items="items"
            color="pink darken-1"
            v-model="tipo"
            outlined
            rounded
            required
            label="Tipo da peça"
            :error-messages="tipoErrors"
            @input="$v.tipo.$touch()"
            @blur="$v.tipo.$touch()"
          ></v-select>
          <v-text-field
            label="Valor médio"
            color="pink darken-1"
            v-model="valor"
            prefix="R$"
            outlined
            rounded
            :error-messages="valorErrors"
            @input="$v.valor.$touch()"
            @blur="$v.valor.$touch()"/>
          <v-row class="d-flex justify-end">
            <v-btn @click="saveProduct" text color="pink darken-1">Salvar</v-btn>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Vuetify from "vuetify/lib";
import axios from "axios";
import router from "../../router";
import { required } from 'vuelidate/lib/validators';

export default {
  name: "EditProduct",
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 900,
    nome: "",
    descricao: "",
    foto: '',
    tipo: '',
    valor: '',
    id: '',
    items: 
    ['Blusa/Casaco',
     'Calça/Saia', 
     'Vestido'],
  }),
  validations: {
    nome: {
      required
    },
    descricao: {
      required
    },
    tipo: {
      required
    },
    valor: {
      required
    }
  },
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.foto = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    saveProduct() {
      this.$v.$touch
      if (!this.$v.$invalid) {
        var config = {
          headers: { "access-token": localStorage.getItem("access-token") }
        };
      axios
        .put(
          "http://localhost:3000/produto",
          {
            id: this.id,
            nome: this.nome,
            descricao: this.descricao,
            tipo: this.tipo,
            valor: this.valor,
            foto: this.foto
          },
          config
        )
        .then(() => {
          this.$swal('Atenção!', 'Produto alterado com sucesso!', 'success');
          router.push({ name: "produtos" });
        })
        .catch(() => this.$swal('Atenção!', 'Não foi possível alterar produto.', 'error'));
      }
    }
  },
  computed: {
    nomeErrors () {
      const errors = []
      if (!this.$v.nome.$dirty) return errors
      !this.$v.nome.required && errors.push('Campo obrigatório.')
      return errors
    },
    descricaoErrors () {
      const errors = []
      if (!this.$v.descricao.$dirty) return errors
      !this.$v.descricao.required && errors.push('Campo obrigatório.')
      return errors
    },
    tipoErrors(){
      const errors = []
      if (!this.$v.tipo.$dirty) return errors
      !this.$v.tipo.required && errors.push('Campo obrigatório.')
      return errors
    },
    valorErrors() {
      const errors = []
      if (!this.$v.valor.$dirty) return errors
      !this.$v.valor.required && errors.push('Campo obrigatório.')
      return errors
    },
  },
  beforeMount() {
    var accessToken = localStorage.getItem("access-token");
    if (accessToken === "") {
      alert("Acesso não autorizado");
      router.push({ name: "homepage" });
    } else {
      this.id = this.$route.params.id;
      var config = {
        headers: { "access-token": localStorage.getItem("access-token") }
      };
       axios
        .get(
          "http://localhost:3000/produto/" + this.id ,
          config).then((response) => {
            this.nome = response.data.nome;
            this.descricao = response.data.descricao;
            this.foto = response.data.foto;
            this.tipo = response.data.tipo;
            this.valor = response.data.valor;
          });
    }
  }
}
</script>

<style scoped>
.upload {
  z-index: 1000;
  position: absolute;
}

#box {
  z-index: 100;
  position: relative;
  float: left;
  height: 375px;
  width: 350px;
  margin: 0px 10px 10px 10px;
  padding: 10px;
  border: solid;
  border-color: #d81b60;
  border-radius: 10px;
  background: transparent;
}

.custom-file-upload {
  padding-bottom: 15px;
}

input[type="file"] {
    display: none;
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
