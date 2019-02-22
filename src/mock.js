// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random对象
// const Random = Mock.Random;
// mock一组数据
/* const produceNewsData = function() {
  let articles = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      // thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }

  return {
    articles: articles
  }
} */

const produceNewsData = function() {
  let productData = Mock.mock({
    'name': 'this is mockjs',
    'product': {
      'title': '全部产品',
      'PC': {
        'name': 'PC产品',
        'list|4': [{
          'id|+1': 1,
          'url': '@url()',
          'text': '@cword(4)',
          'type': '@boolean()'
        }]
      },
      'MB': {
        'name': '手机应用类',
        'list|4': [{
          'id|+1': 1,
          'url': '@url()',
          'text': '@cword(4)',
          'type': '@boolean()'
        }]
      }
    },
    'news': {
      'title': '最新消息',
      'list|4-10': [{
        'url': '@url()',
        'text': '@csentence()',
        'count|+1': 1
      }]
    },
    'carousel': {
      'list': [{
        'img': '@dataImage("700x300")',
        'url': '/detail/count'
      }, {
        'img': '@dataImage("700x300")',
        'url': '/detail/forecast'
      }, {
        'img': '@dataImage("700x300")',
        'url': '/detail/analysis'
      }, {
        'img': '@dataImage("700x300")',
        'url': '/detail/publish'
      }]
    },
    'block': [{
      'title': '@cword(4)',
      'description': '@ctitle(6, 10)',
      'image': require('./assets/1.png'),
      'url': '/detail/count'
    }, {
      'title': '@cword(4)',
      'description': '@ctitle(6, 10)',
      'image': require('./assets/2.png'),
      'url': '/detail/forecast'
    }, {
      'title': '@cword(4)',
      'description': '@ctitle(6, 10)',
      'image': require('./assets/3.png'),
      'url': '/detail/analysis'
    }, {
      'title': '@cword(4)',
      'description': '@ctitle(6, 10)',
      'image': require('./assets/4.png'),
      'url': '/detail/publish'
    }],
    'tab': [{
      'name': '数据统计',
      'path': '/detail/count',
      'active': false
    }, {
      'name': '数据预测',
      'path': '/detail/forecast',
      'active': false
    }, {
      'name': '流量分析',
      'path': '/detail/analysis',
      'active': false
    }, {
      'name': '广告发布',
      'path': '/detail/publish',
      'active': false
    }],
    'imgMap': {
      '/detail/count': require('./assets/1.png'),
      '/detail/forecast': require('./assets/2.png'),
      '/detail/analysis': require('./assets/3.png'),
      '/detail/publish': require('./assets/4.png')
    },
    'selections': {
      'versionList': [{
        'label': '入门版',
        'value': 0
      }, {
        'label': '中级版',
        'value': 1
      }, {
        'label': '高级版',
        'value': 2
      }],
      'effectiveTime': [{
        'label': '一年',
        'value': 0
      }, {
        'label': '三年',
        'value': 1
      }, {
        'label': '五年',
        'value': 2
      }],
      'multipleList': [{
        'label': '客户版',
        'value': 0
      }, {
        'label': '代理商版',
        'value': 1
      }, {
        'label': '专家版',
        'value': 2
      }]
    }

  })

  return {
    productData
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/prodData/api', 'get', produceNewsData);
