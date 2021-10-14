<template>
    <v-card elevation="2">
        <v-card-title>{{product.title}}</v-card-title>
    </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ProductData } from '@/services/productService';

@Component
export default class Product extends Vue {
    @Prop()
    products!: ProductData;
}
</script>

<style lang="sass" scoped></style>
