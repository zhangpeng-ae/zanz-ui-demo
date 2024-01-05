<script setup lang="ts">
import { withDefaults } from "vue";
defineOptions({
	name: "ZanzAside",
});

interface Props {
	width?: string;
}

withDefaults(defineProps<Props>(), {
	width: "300px",
});
</script>

<template>
	<aside class="zanz-aside" :style="{ width }">
		<slot />
	</aside>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@include b(aside) {
	overflow: auto;
	box-sizing: border-box;
	flex-shrink: 0;
}
</style>
