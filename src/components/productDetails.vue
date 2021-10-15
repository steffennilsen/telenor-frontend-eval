<template>
    <v-card flat tile outlined>
    </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ProductData } from '@/services/productService';

@Component
export default class ProductDetails extends Vue {
    @Prop({required: true})
    product!: ProductData;
}
</script>

<style lang="sass" scoped>
</style>
