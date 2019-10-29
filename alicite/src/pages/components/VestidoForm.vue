<template> 
    <v-col>
        <v-row>
            <v-col>
                <v-text-field
                    label="Torax"
                    color="pink darken-1"
                    v-model="pedido.torax"
                    outlined
                    rounded
                    required
                />
            </v-col>
            <v-col>
                <v-text-field
                    label="Busto"
                    color="pink darken-1"
                    v-model="pedido.busto"
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
                    v-model="pedido.cintura"
                    outlined
                    rounded
                    required
                />
            </v-col>
             <v-col>
                <v-text-field
                    label="Altura da peça"
                    color="pink darken-1"
                    v-model="pedido.altura"
                    outlined
                    rounded
                    required
                />
            </v-col>
            <v-col>
                    <v-text-field
                    label="Ombro"
                    color="pink darken-1"
                    v-model="pedido.ombro"
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
                    v-model="pedido.alturaCurta"
                    outlined
                    rounded
                    required
                />
            </v-col>
            <v-col>
                <v-text-field
                    label="Altura manga longa"
                    color="pink darken-1"
                    v-model="pedido.alturaLonga"
                    outlined
                    rounded
                    required
                />
            </v-col>
             <v-col>
                <v-text-field
                    label="Quadril"
                    color="pink darken-1"
                    v-model="pedido.quadril"
                    outlined
                    rounded
                    required
                />
            </v-col>
        </v-row>
        <v-row>
           <v-textarea
                label="Observações"
                color="pink darken-1"
                v-model="pedido.obervacoes"
                outlined
                rounded
                required
            />
        </v-row>
    </v-col>
</template>

<script>
import Vuetify from "vuetify/lib";

export default {
  name: "VestidoForm",
  props: ['pedido'],
  vuetify: new Vuetify(),
  data: () => ({
    width: 600,
  }),
};
</script>