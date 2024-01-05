<script setup lang="ts">
import {} from "vue";
defineOptions({
	name: "ZanzHeader",
});

interface Poprs {
	height?: string;
}

withDefaults(defineProps<Poprs>(), {
	height: "60px",
});
</script>

<template>
	<header class="zanz-header" :style="{ height }">
		<slot />
	</header>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@include b(header) {
	padding: $--header-padding;
	box-sizing: border-box;
	flex-shrink: 0;
}
</style>
