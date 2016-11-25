//var left = new IScroll("#type_content_left");
// var rightsro = new IScroll("#right")

var app = angular.module("myApp",["ngAnimate","ui.router"]);
var scroll = angular.module('scroll', []);  
	app.controller("ctrl",["$scope",function($scope){

	}])

	//配置路由
	app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise('/main/home/home_cont');
		$stateProvider
				//第一层嵌套结构，主页的index视图===》main里的content视图
				.state("index",{

					url: "/main",
					templateUrl: "./views/home-page.html"
				})
				.state("index.home",{

					url: "/home",
					templateUrl: "./views/home.html",
					controller: function($scope,$state){

						$state.go("index.home.home");
						$scope.list = [
								{name: '首页',title: 'home'},
								{name: '直邮',title: 'post'},
								{name: '母婴',title: 'baby'},
								{name: '美容护肤',title: 'skin_care'},
								{name: '营养保健',title: 'nutrition'},
								{name: '进口食品',title: 'import'}
							]
					}
				})
					//第e二层嵌套结构，===》home里的content视图
					.state("index.home.home",{

						url: "/home_cont",
						templateUrl: "./views/home_views/home.html"
					})
					.state("index.home.post",{

						url: "/post",
						templateUrl: "./views/home_views/post.html"
					})
					.state("index.home.baby",{

						url: "/baby",
						templateUrl: "./views/home_views/baby.html"
					})
					.state("index.home.skin_care",{

						url: "/skin_care",
						templateUrl: "./views/home_views/skin_care.html"
					})
					.state("index.home.nutrition",{

						url: "/nutrition",
						templateUrl: "./views/home_views/nutrition.html"
					})
					.state("index.home.import",{

						url: "/import",
						templateUrl: "./views/home_views/import.html"
					})
				.state("index.type",{

					url: "/type",
					templateUrl: "./views/type.html",
					controller: function($scope,$state){

						$state.go("index.type.type")
					}
				})
					//第e二层嵌套结构，===》type里的content视图
					.state("index.type.type",{

						url: "/type",
						templateUrl: "./views/type_views/type.html",
						controller: function($scope,$state){

							$state.go("index.type.type.nutrition");
							$scope.list = [
								{name: '营养保健',title: 'nutrition'},
								{name: '全球时尚',title: 'globalball'},
								{name: '厨房用品',title: 'kitchen'},
								{name: '居家日用',title: 'home_life'},
								{name: '美妆护肤',title: 'beauty_skin'},
								{name: '母婴用品',title: 'baby'},
								{name: '汽车汽配',title: 'car'},
								{name: '个人护理',title: 'person'},
								{name: '酒水饮品',title: 'drinks'}
							]
						}
					})
						//第三层嵌套结构，===》type里的right视图
						.state("index.type.type.nutrition",{

							url: "/nutrition",
							templateUrl: "./views/type_views/type_views/nutrition.html"
						})
						.state("index.type.type.globalball",{

							url: "/globalball",
							templateUrl: "./views/type_views/type_views/globalball.html"
						})
						.state("index.type.type.kitchen",{

							url: "/kitchen",
							templateUrl: "./views/type_views/type_views/kitchen.html"
						})
						.state("index.type.type.home_life",{

							url: "/home_life",
							templateUrl: "./views/type_views/type_views/home_life.html"
						})
						.state("index.type.type.beauty_skin",{

							url: "/beauty_skin",
							templateUrl: "./views/type_views/type_views/beauty_skin.html"
						})
						.state("index.type.type.baby",{

							url: "/baby",
							templateUrl: "./views/type_views/type_views/baby.html"
						})
						.state("index.type.type.car",{

							url: "/car",
							templateUrl: "./views/type_views/type_views/car.html"
						})
						.state("index.type.type.person",{

							url: "/person",
							templateUrl: "./views/type_views/type_views/person.html"
						})
						.state("index.type.type.drinks",{

							url: "/drinks",
							templateUrl: "./views/type_views/type_views/drinks.html"
						})
					.state("index.type.brand",{

						url: "/brand",
						templateUrl: "./views/type_views/brand.html"
					})
				.state("index.ship",{

					url: "/ship",
					templateUrl: "./views/ship.html",
					controller: function($scope,$state){

						$state.go("index.ship.ship")
					}
				})
					//第e二层嵌套结构，===》ship里的content视图
					.state("index.ship.ship",{

						url: "/ship",
						templateUrl: "./views/ship_views/ship.html"
					})
					.state("index.ship.me",{

						url: "/me",
						templateUrl: "./views/ship_views/me.html"
					})
				.state("index.msg",{

					url: "/msg",
					templateUrl: "./views/msg.html"
				})
				.state("index.user",{

					url: "/user",
					templateUrl: "./views/user.html"
				})
				
	}])
