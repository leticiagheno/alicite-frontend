<template>
    <v-container fill-height> 
        <v-card class="mx-auto" :width="1000">
            <v-list-item id="card-header" class="d-flex justify-space-between">
                <v-row>
                    <v-icon color="pink darken-5" x-large>mdi-hanger</v-icon>
                    <h2 id="card-title">Cadastro Cliente</h2>
                </v-row>
                <v-btn @click="loginPage" class="ma-2" color="pink" text>
                    Login
                </v-btn>
            </v-list-item>

            <v-stepper v-model="e1" vertical>
                <v-stepper-step 
                    :complete="e1 > 1" 
                    color="pink darken-5" 
                    step="1" 
                    @click="e1 = 1"> Dados Pessoais 
                    </v-stepper-step>
                           <v-stepper-content class="stepper-padding" step="1">
                        <v-form class="form-padding">
                            <v-text-field
                                label="Nome"
                                color="pink darken-1"
                                v-model="nome"
                                outlined
                                rounded
                                required
                            />
                            <v-text-field
                                label="Telefone"
                                color="pink darken-1"
                                v-model="telefone"
                                outlined
                                rounded
                                required
                            />
                        </v-form>
                    </v-stepper-content>
                    <v-stepper-step 
                        :complete="e1 > 2" 
                        color="pink darken-5" 
                        class="text-color"
                        step="2" 
                        @click="e1 = 2"> Endereço 
                    </v-stepper-step>
                     <v-stepper-content class="stepper-padding" step="2">
                        <v-form class="form-padding">
                            <v-text-field
                                label="Rua"
                                color="pink darken-1"
                                v-model="rua"
                                outlined
                                rounded
                                required
                            />
                            <v-row>
                                <v-col 
                                    class="input-padding"> 
                                    <v-text-field
                                        label="Número"
                                        v-model="numero"
                                        color="pink darken-1"
                                        outlined
                                        rounded
                                        required
                                    />
                                </v-col>
                                <v-col
                                    class="input-padding"> 
                                    <v-text-field
                                        label="Bairro"
                                        v-model="bairro"
                                        color="pink darken-1"
                                        outlined
                                        rounded
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col 
                                    class="input-padding"> 
                                    <v-text-field
                                        label="Cidade"
                                        v-model="cidade"
                                        color="pink darken-1"
                                        outlined
                                        rounded
                                        required
                                    />
                                </v-col>
                                <v-col
                                    class="input-padding"> 
                                    <v-text-field
                                        label="Estado"
                                        v-model="estado"
                                        color="pink darken-1"
                                        outlined
                                        rounded
                                        required
                                    />
                                </v-col>
                                <v-col
                                    class="input-padding"> 
                                    <v-text-field
                                        label="País"
                                        v-model="pais"
                                        color="pink darken-1"
                                        outlined
                                        rounded
                                        required
                                    />
                                </v-col>
                            </v-row>
                        </v-form>
                        
                    </v-stepper-content>
                
                    <v-stepper-step 
                        step="3" 
                        color="pink darken-5" 
                        @click="e1 = 3"> Conta
                    </v-stepper-step>

                     <v-stepper-content class="stepper-padding" step="3">
                        <v-form class="form-padding">
                            <v-text-field
                                label="Email"
                                v-model="email"
                                color="pink darken-1"
                                outlined
                                rounded
                                required
                            />
                            <v-text-field
                                label="Senha"
                                v-model="senha"
                                type="Password"
                                color="pink darken-1"
                                outlined
                                rounded
                                required
                            />
                             <v-select
                                :items="items"
                                color="pink darken-1"
                                v-model="pergunta"
                                outlined
                                rounded
                                required
                                label="Pergunta de segurança"
                            ></v-select>
                            <v-text-field
                                label="Resposta"
                                v-model="resposta"
                                color="pink darken-1"
                                outlined
                                rounded
                                required
                            />
                            <v-row class="d-flex justify-end">
                                 <v-btn
                                    text
                                    color="pink lighten-1"
                                    @click="register"
                                > Registrar
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-stepper-content>                  
            </v-stepper>
        </v-card>
    </v-container>
</template>

<script>
import Vuetify from 'vuetify/lib';
import router from "../router";
import axios from "axios";

export default {
  name: 'Login',
  vuetify: new Vuetify(),
  data: () => ({
    media: true,
    actions: true,
    raised: true,
    width: 750,
    e1: 0,
    nome: '',
    telefone: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: '',
    email: '',
    senha: '',
    pergunta: '',
    resposta: '',
    items: 
    ['Onde sua mãe nasceu?',
     'Qual o nome do seu primeiro animal de estimação?', 
     'Qual sua banda predileta na adolescência?'],
  }),
  methods: {
      loginPage() {
        router.push({ name: "loginCliente" }) ;
      },
      register() {
          axios.post("http://localhost:3000/login/signup/cliente", { 
            nome: this.nome,
            telefone: this.telefone,
            endereco: {
                rua: this.rua,
                numero: this.numero,
                bairro: this.bairro,
                cidade: this.cidade,
                estado: this.estado,
                pais: this.pais,
            },
            email: this.email,
            senha: this.senha,
            pergunta: this.pergunta,
            resposta: this.resposta,
        })
      }
  }
};
</script>

<style scoped>

#page {
   overflow-y: auto;
}

#card-title {
  padding: 15px 15px 10px 15px;
  margin-bottom: 0px;
  color: #D81B60;
}

#hanger {
   margin-left: 30px;
}

#stepper-background {
  background-color: #F8BBD0;
}

#card-text {
  padding-top: 20px;
}

#card-header {
  padding-top: 5px;
  padding-left: 25px;
  margin-bottom: 0px;
  color: #D81B60;
  background-color: #EEEEEE; 
}

#btn-new-user {
  margin: 0px !important;
}

.input-padding {
    padding: 0px 12px 0px 12px;
}

.stepper-padding {
    padding: 12px;
}

.form-padding {
    padding: 10px 35px 10px 10px;
}

.text-color {
    color: #D81B60;
}

</style>
