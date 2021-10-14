<template>
    <v-card width="200" tile>
        <v-list flat outlined dense>
            <v-subheader>Categories</v-subheader>
            <v-list-item-group
                @change="onChange($event)"
                v-model="categoryFilters"
                multiple
                active-class=""
            >
                <v-list-item v-for="(category, i) in this.categories" :key="i">
                    <template v-slot:default="{ active }">
                        <v-list-item-action-text>{{
                            category
                        }}</v-list-item-action-text>
                        <v-spacer></v-spacer>
                        <v-list-item-action>
                            <v-list-item-content>
                                <v-checkbox
                                    :input-value="active"
                                    color="primary"
                                ></v-checkbox>
                            </v-list-item-content>
                        </v-list-item-action>
                    </template>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductGridItem from './productGridItem.vue';

@Component
export default class FilterSidebar extends Vue {
    @Prop({ required: true })
    categories!: string[];
    categoryFilters = [];

    onChange(event: any) {
        console.log(event);
    }
}
</script>

<style></style>
<style lang="sass" scoped></style>
