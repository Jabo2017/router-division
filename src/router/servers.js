export default[
	{
		path:'/servers',
		component:resolve => require(['@/views/layout/Servers'],resolve),
		redirect:'/servers/serverstips',
		children:[
			{
				path:'serverstips',
				name:'serverstips',
				meta:{
					title:'服务提示'
				},
				component:resolve => require(['@/views/servers/ServersTips'],resolve)
			}
		]
	}

]