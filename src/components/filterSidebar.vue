<template>
    <v-card width="200" tile v-if="this.categories">
        <v-list flat outlined dense>
            <v-subheader>Categories</v-subheader>
            <v-list-item-group
                @change="this.onFilterChange"
                :v-model="this.filters"
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

@Component
export default class FilterSidebar extends Vue {
    @Prop({ required: true })
    categories!: string[];

    @Prop({ required: true, default: []})
    filters!: number[];

    onFilterChange(filters: number[]) {
        this.$emit('onFilterChange', filters);
    }
}
</script>

<style></style>
<style lang="sass" scoped></style>
