<script setup lang="ts">
defineOptions({
	name: "ZanzMain",
});
</script>
<template>
	<main class="zanz-main">
		<slot />
	</main>
</template>

<style lang="scss">
@import "@/styles/mixin";
@include b(main) {
	display: block;
	flex: 1;
	flex-basis: auto;
	overflow: auto;
	box-sizing: border-box;
	padding: $--main-padding;
}
</style>
