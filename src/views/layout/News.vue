<template>
	<div class="news">
		新闻 -- 模版
		<div class="main">
			<div class="left">
				左边
			</div> 
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"News",
		data(){
			return{

			}
		}
	}
</script>

<style scoped>

</style>