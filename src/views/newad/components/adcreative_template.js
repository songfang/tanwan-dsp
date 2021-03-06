const data = [
	{
		"id":65,
		"name":"QQ空间及QQ",		
		"modus":"1000×560单图(文)",
		"description": "好友动态及QQ看点、QQ动漫等优质广告位",		
		"site_set":["SITE_SET_MOBILE_INNER"],	
		"element":{
			"title":{
				"name":"广告文案",
				"type":"string",
				"required":1,
				"amount": [1,40],
				"des":"字数：1~40"
			},
			"image":{
				"name":"图片",
				"type":"string",
				"required":1,
				"size":"1000*560",
				"quality":"90",
				"format":"*.jpg|*.jpeg|*.png",
				"des":"尺寸：1000*560，大小：不超过90 KB，格式：*.jpg|*.jpeg|*.png"
			},
			"button_text":{
				"name":"按钮文字",
				"type":"string",
				"required":1,
				"amount": [2,4],
				"des":"字数：2~4"
			},
			"bottom_text":{
				"name":"左下辅助文字",
				"type":"string",
				"required":0,
				"des":""
			}
		}
	},
	{
		"id":184,
		"name":"手机QQ及浏览器",		
		"modus":"240×180单图(文)",
		"description": "看点及兴趣部落，浏览器信息流",		
		"site_set":["SITE_SET_MOBILE_INNER"],	
		"element":{
			"image":{
				"name":"图片",
				"type":"string",
				"required":1,
				"size":"240*180",
				"quality":"30",
				"format":"*.jpg|*.jpeg|*.png",
				"des":"尺寸：240*180，大小：不超过30 KB，格式：*.jpg|*.jpeg|*.png"
			},
			"title":{
				"name":"广告文案",
				"type":"string",
				"required":1,
				"amount": [1,20],
				"des":"字数：1~20"
            }
            // ,
			// "deep_link":{
			// 	"name":"应用直达",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "impression_tracking_url":{
			// 	"name":"请输入曝光监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "click_tracking_url":{
			// 	"name":"请输入点击监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// }
		}
	},
	{
		"id":210,
		"name":"浏览器、手腾网、手机QQ",		
		"modus":"640×288单图(文)",
		"description": "资讯信息流、资讯文章页、焦点图",		
		"site_set":["SITE_SET_MOBILE_INNER"],	
		"element":{			
			"image":{
				"name":"图片",
				"type":"string",
				"required":1,
				"size":"640*288",
				"quality":"30",
				"format":"*.jpg|*.jpeg|*.png",
				"des":"尺寸：640*288，大小：不超过30 KB，格式：*.jpg|*.jpeg|*.png"
			},
			"title":{
				"name":"广告文案",
				"type":"string",
				"required":1,
				"amount": [1,25],
				"des":"字数：1~25"
            }
            // ,
			// "deep_link":{
			// 	"name":"应用直达",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "impression_tracking_url":{
			// 	"name":"请输入曝光监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "click_tracking_url":{
			// 	"name":"请输入点击监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// }
		}
	},
	{
		"id":473,
		"name":"腾讯新闻",		
		"modus":"230×152多图(文)",
		"description": "新闻信息流",		
		"site_set":["SITE_SET_TENCENT_NEWS"],	
		"element":{
			"element_story":{
				"name":"素材",
				"type":"struct",
				"required":0,
				"length":[3,3],
				"child" : {
					"style":"image",
					"name":"图片",
					"type":"string",
					"required":1,
					"size":"230*152",
					"quality":"30",
					"format":"*.jpg|*.jpeg",
					"des":"尺寸：230*152，大小：不超过30 KB，格式：*.jpg|*.jpeg"
				}
			},
			"title":{
				"name":"广告文案",
				"type":"string",
				"required":1,
				"amount": [6,30],
				"des":"字数：6~30"
			},
			"corporate":{
				"name":"商标",
				"type":"struct",
				"required":1,
				"length":[1,1],
				"child" : {
					"style":"corporate_name",
					"name":"广告主名称",
					"type":"string",
					"required":1,
					"amount": [1,7],
					"des":"字数：1~7"
				}
            }
            //,			
			// "deep_link":{
			// 	"name":"应用直达",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "impression_tracking_url":{
			// 	"name":"请输入曝光监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "click_tracking_url":{
			// 	"name":"请输入点击监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// }
		}
	},
	{
		"id":486,
		"name":"腾讯视频",		
		"modus":"960×540单图(文)",
		"description": "首页专栏、热点视频流",		
		"site_set":["SITE_SET_TENCENT_VIDEO"],	
		"element":{
			"image":{
				"name":"图片",
				"type":"string",
				"required":1,
				"size":"960*540",
				"quality":"200",
				"format":"*.jpg|*.jpeg|*.png",
				"des":"尺寸：960*540，大小：不超过200 KB，格式：*.jpg|*.jpeg|*.png"
			},
			"title":{
				"name":"广告文案",
				"type":"string",
				"required":1,
				"amount": [1,14],
				"des":"字数：1~14"
			},
			"corporate":{
				"name":"商标",
				"type":"struct",
				"required":1,
				"length":[1,1],
				"child" : {
					"style":"corporate_name",
					"name":"广告主名称",
					"type":"string",
                    "required":1,
                    "amount": [1,8],
					"des":"字数：1~8"
				}
            }
            //,			
			// "deep_link":{
			// 	"name":"应用直达",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "impression_tracking_url":{
			// 	"name":"请输入曝光监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "click_tracking_url":{
			// 	"name":"请输入点击监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// }
		}
	},
	{
		"id":471,
		"name":"腾讯新闻",		
		"modus":"230×152单图(文)",
		"description": "新闻信息流、微信新闻插件信息流",		
		"site_set":["SITE_SET_TENCENT_NEWS"],	
		"element":{
			"image":{
				"name":"图片",
				"type":"string",
				"required":1,
				"size":"230*152",
				"quality":"30",
				"format":"*.jpg|*.jpeg",
				"des":"尺寸：230*152，大小：不超过30 KB，格式：*.jpg|*.jpeg"
			},
			"title":{
				"name":"广告文案",
				"type":"string",
				"required":1,
				"amount": [16,24],
				"des":"字数：16~24"
			},
			"corporate":{
				"name":"商标",
				"type":"struct",
				"required":1,
				"length":[1,1],
				"child" : {
					"style":"corporate_name",
					"name":"广告主名称",
					"type":"string",
					"required":1,
					"amount": [1,7],
					"des":"字数：1~7"
				}
            }
            //,			
			// "deep_link":{
			// 	"name":"应用直达",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "impression_tracking_url":{
			// 	"name":"请输入曝光监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "click_tracking_url":{
			// 	"name":"请输入点击监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// }
		}
	},
	{
		"id":487,
		"name":"腾讯视频",		
		"modus":"960×274单图(文)",
		"description": "首页专栏、热点视频流",		
		"site_set":["SITE_SET_TENCENT_VIDEO"],	
		"element":{
			"image":{
				"name":"图片",
				"type":"string",
				"required":1,
				"size":"960*274",
				"quality":"100",
				"format":"*.jpg|*.jpeg|*.png",
				"des":"尺寸：960*274，大小：不超过100 KB，格式：*.jpg|*.jpeg|*.png"
			},
			"title":{
				"name":"广告文案",
				"type":"string",
				"required":1,
				"amount": [1,14],
				"des":"字数：1~14"
			},
			"corporate":{
				"name":"商标",
				"type":"struct",
				"required":1,
				"length":[1,1],
				"child" : {
					"style":"corporate_name",
					"name":"广告主名称",
					"type":"string",
					"required":1,
					"amount": [1,8],
					"des":"字数：1~8"
				}
            }
            //,			
			// "deep_link":{
			// 	"name":"应用直达(可选)",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":""
			// },
			// "impression_tracking_url":{
			// 	"name":"请输入曝光监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "click_tracking_url":{
			// 	"name":"请输入点击监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// }
		}
	},
	{
		"id":148,
		"name":"移动原生",		
		"modus":"1280×720多图(文)",
		"description": "原生广告位",		
		"site_set":["SITE_SET_MOBILE_UNION","SITE_SET_MOBILE_INNER"],	
		"element":{			
			"title":{
				"name":"广告文案",
				"type":"string",
				"required":1,
				"amount": [1,14],
				"des":"字数：1~14"
			},
			"description":{
				"name":"广告描述",
				"type":"string",
				"required":1,
				"amount": [1,30],
				"des":"字数：1~30"
			},
			"image":{
				"name":"图片",
				"type":"string",
				"required":1,
				"size":"1280*720",
				"quality":"100",
				"format":"*.jpg|*.jpeg|*.png",
				"des":"尺寸：1280*720，大小：不超过100 KB，格式：*.jpg|*.jpeg|*.png"
			},
			"image2":{
				"name":"图片",
				"type":"string",
				"required":1,
				"size":"300*300",
				"quality":"50",
				"format":"*.jpg|*.jpeg|*.png",
				"des":"尺寸：300*300，大小：不超过50 KB，格式：*.jpg|*.jpeg|*.png"
            }
            //,
			// "deep_link":{
			// 	"name":"应用直达",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "impression_tracking_url":{
			// 	"name":"请输入曝光监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// },
			// "click_tracking_url":{
			// 	"name":"请输入点击监测URL",
			// 	"type":"string",
			// 	"required":0,
			// 	"des":"(可选)"
			// }
		}
	}
]
export default data