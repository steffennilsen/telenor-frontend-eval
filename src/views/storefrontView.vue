<template>
    <div v-if="products">
        <product-grid :products="this.products"></product-grid>
    </div>
</template>

<script lang="ts">
import ProductGrid from '@/components/productGrid.vue';
import { productService, Product } from '@/services/productService';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({ components: { ProductGrid } })
export default class StorefrontView extends Vue {
    products: Product[] | null = null;

    created() {
        productService
            .getAllProducts()
            .then((products) => (this.products = products));
    }
}
</script>

<style lang="sass" scoped></style>
