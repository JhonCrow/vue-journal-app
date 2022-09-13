<template>
    <Nav-bar />
    <div class="d-flex">
        <div class="col-04">
            <EntryList/>
        </div>
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
    "Nav-bar": defineAsyncComponent(() => import("../components/Nav-bar.vue")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList.vue")),

}
}
</script>