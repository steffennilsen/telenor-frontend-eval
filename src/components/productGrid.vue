<template>
    <div>
        <ul id="example-1">
            <li v-for="item in products" :key="item.title">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Product } from '@/services/productService';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ProductGrid extends Vue {
    @Prop()
    products!: Promise<Product[]>;
}
</script>

<style></style>
<style lang="sass" scoped></style>
