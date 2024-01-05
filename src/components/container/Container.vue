<script setup lang="ts">
import { useSlots, computed, VNode, Component } from "vue";
defineOptions({
	name: "ZanzContainer",
});

interface Props {
	defineProps?: string;
}

const props = defineProps<Props>();

const slots = useSlots();

const isVertical = computed(() => {
	if (slots && slots.default) {
		return slots.default().some((vn: VNode) => {
			const tag = (vn.type as Component).name;
			return tag === "ZanzHeader" || tag === "ZanzFooter";
		});
	} else {
		return props.defineProps === "vertical";
	}
});
</script>

<template>
	<section class="zanz-container" :class="{ 'is-vertical': isVertical }">
		<slot />
	</section>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@include b(container) {
	display: flex;
	flex-direction: row;
	flex: 1;
	flex-basis: auto;
	box-sizing: border-box;
	min-width: 0;
	@include when(vertical) {
		flex-direction: column;
	}
}
</style>
