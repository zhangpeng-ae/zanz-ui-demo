<script setup lang="ts">
import { withDefaults } from "vue";

defineOptions({
	name: "ZanzFooter",
});

interface Props {
	height?: string;
}
withDefaults(defineProps<Props>(), {
	height: "60px",
});
</script>

<template>
	<footer class="zanz-footer" :class="{ height }">footer</footer>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@include b(container) {
	padding: $--footer-padding;
	box-sizing: border-box;
	flex-shrink: 0;
}
</style>
