<script setup lang="ts">
defineOptions({
	name: "ZanzButton",
});

import { withDefaults } from "vue";

interface Props {
	type?: string;
	size?: "" | "medium" | "small" | "mini";
}

withDefaults(defineProps<Props>(), {
	type: "default",
});
</script>

<template>
	<button class="zanz-button" :class="[size ? `zanz-button--${size}` : '']">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

@include b(button) {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	line-height: 1;
	height: 32px;
	white-space: nowrap;
	cursor: pointer;
	color: $--zanz-button-default-text-color;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	transition: 0.1s;
	user-select: none;
	vertical-align: middle;
	-webkit-appearance: none;
	background-color: $--zanz-button-default-bg-color;
	border: 1px solid #dcdfe6;
	border-color: #dcdfe6;
	padding: 8px 15px;
	font-size: 14px;
	border-radius: 4px;
	&:hover {
		color: #409eff;
		border-color: #c6e2ff;
		background-color: #ecf5ff;
	}
}
</style>
