export default[
	{
		path:'/news',
		component:resolve => require(['@/views/layout/News'],resolve),
		redirect:'/news/newslist',
		children:[
			{
				path:'newslist',
				name:'newslist',
				meta:{
					title:'新闻提示'
				},
				component:resolve => require(['@/views/news/NewsList'],resolve)
			},
			{
				path:'newsdetail/:id',
				name:'newsdetail',
				meta:{
					title:'新闻详情'
				},
				component:resolve => require(['@/views/news/NewsDetail'],resolve)
			}
		]
	}

]