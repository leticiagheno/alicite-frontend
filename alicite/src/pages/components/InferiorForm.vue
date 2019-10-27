<template> 
    <v-col>
        <v-row>
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
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    label="Coxa"
                    color="pink darken-1"
                    v-model="pedido.coxa"
                    outlined
                    rounded
                    required
                />
            </v-col>
             <v-col>
                <v-text-field
                    label="Panturrilha"
                    color="pink darken-1"
                    v-model="pedido.panturrilha"
                    outlined
                    rounded
                    required
                />
            </v-col>
            <v-col>
                    <v-text-field
                    label="Altura"
                    color="pink darken-1"
                    v-model="pedido.altura"
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
  name: "InferiorForm",
  props: ['pedido'],
  vuetify: new Vuetify(),
  data: () => ({
    width: 600,
  }),
};
</script>