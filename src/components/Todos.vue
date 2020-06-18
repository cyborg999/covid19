<template>
	<div class="todos">
		<ul>
			<li 
				v-for="(student, idx) in students"
				v-bind:students="students"
				v-bind:key="idx"
				v-bind:class="{ complete : student.complete}"

			>{{ student.name}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name : "Todos"
		, props : {
			students : Array
		}
	}
</script>
<style scoped>
	.todos {
		width: 400px;
	}
	ul {
		list-style-type: none;
	}
	li {
		padding: 5px;
		background: #eee;
		border-bottom: 1px solid silver;
	}
	.complete {
		font-weight: 700;
		background: red;
		color: white;
	}
</style>