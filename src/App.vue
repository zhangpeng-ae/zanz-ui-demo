<script setup lang="ts">
defineOptions({
	name: "App",
});
</script>

<template>
	<div class="button-wrap">
		<zanz-button>default</zanz-button>
		<zanz-button size="medium">default</zanz-button>
		<zanz-button size="small">default</zanz-button>
		<zanz-button size="mini">default</zanz-button>
	</div>

	<zanz-container>
		<zanz-header>header</zanz-header>
		<zanz-main>main</zanz-main>
		<zanz-footer>footer</zanz-footer>
	</zanz-container>

	<hr />

	<zanz-container>
		<zanz-aside width="300px">aside</zanz-aside>
		<zanz-container>
			<zanz-header>header</zanz-header>
			<zanz-main>main</zanz-main>
		</zanz-container>
	</zanz-container>

	<hr />

	<zanz-container>
		<zanz-header>header</zanz-header>
		<zanz-container>
			<zanz-aside width="200px">aside</zanz-aside>
			<zanz-container>
				<zanz-main>main</zanz-main>
				<zanz-footer>footer</zanz-footer>
			</zanz-container>
		</zanz-container>
	</zanz-container>
</template>

<style lang="scss" scoped>
.button-wrap {
	padding: 1rem;
	button {
		margin-right: 1rem;
	}
}
.zanz-header,
.zanz-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.zanz-aside {
	background-color: #d3dce6;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.zanz-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

.zanz-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

hr {
	margin: 20px 0;
}
</style>
