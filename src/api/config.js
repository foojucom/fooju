/**
 * Created by hskj on 2017/9/6.
 */
import api from './api'
import axios from 'axios'
var qs = require('qs')
// axios.defaults.withCredentials = true

/* export const getNewsList = params => {
  return axios.get (config.getNewsList, {params: params})
}
export const saveNews = formdata => {
  return axios.post (config.saveNews, formdata)
}
function createPostParams (obj) {
  return qs.stringify(obj)
}
export const login = data => {
  return axios.post (config.login, qs.stringify(data))
} */

export const usedLists = params => {
  return axios.get(api.used_lists, {params: params})
}
export const usedDetail = params => {
  return axios.get(api.used_detail, {params: params})
}
export const RegionLists = params => {
  return axios.get(api.RegionLists, {params: params})
}
export const ProductWap = params => {
  return axios.get(api.ProductWap, {params: params})
}
export const VillageFind = params => {
  return axios.get(api.VillageFind, {params: params})
}
export const map = params => {
  return axios.get(api.map, {params: params})
}
export const EncyTypeList = params => {
  return axios.get(api.EncyTypeList, {params: params})
}
export const EncyList = params => {
  return axios.get(api.EncyList, {params: params})
}
export const EncyTop = params => {
  return axios.get(api.EncyTop, {params: params})
}
export const EncyDetail = params => {
  return axios.get(api.EncyDetail, {params: params})
}
export const VillageSchool = data => {
  return axios.post(api.VillageSchool, qs.stringify(data))
}
export const login = data => {
  return axios.post(api.login, qs.stringify(data))
}
export const villageFind = params => {
  return axios.get(api.VillageFind, {params: params})
}
export const NewList = params => {
  return axios.get(api.NewList, {params: params})
}
export const RetalLists = params => {
  return axios.get(api.RetalLists, {params: params})
}
export const OrderHouse = params => {
  return axios.get(api.OrderHouse, {params: params})
}
export const listsByHouse = params => {
  return axios.get(api.lists_by_house, {params: params})
}
export const RecordDK = params => {
  return axios.get(api.RecordDK, {params: params})
}
export const fang = [
  {
    type: 'used',
    value: '二手房'
  },
  {
    type: 'new',
    value: '新房'
  },
  {
    type: 'retal',
    value: '租房'
  }
]
export const area = [
  {
    value: '不限'
  },
  {
    id: '7',
    value: '金桥开发区'
  },
  {
    id: '5',
    value: '如意开发区'
  },
  {
    id: '4',
    value: '玉泉区'
  },
  {
    id: '3',
    value: '回民区'
  },
  {
    id: '2',
    value: '赛罕区'
  },
  {
    id: '1',
    value: '新城区'
  }
]
export const rentMoney = [
  {
    rent: '',
    value: '不限'
  },
  {
    rent: '1-1000',
    value: '1000以下'
  },
  {
    rent: '1000-2000',
    value: '1000-2000'
  },
  {
    rent: '2000-3000',
    value: '2000-3000'
  },
  {
    rent: '3000-4000',
    value: '3000-4000'
  },
  {
    rent: '4000-6000',
    value: '4000-6000'
  },
  {
    rent: '6000-7000',
    value: '6000-7000'
  },
  {
    rent: '7000-8000',
    value: '7000-8000'
  },
  {
    rent: '8000-10000',
    value: '8000-10000'
  },
  {
    rent: '10000-9999999999',
    value: '10000以上'
  }
]
export const roomType = [
  {
    value: '不限'
  },
  {
    bedroom: 1,
    value: '一室'
  },
  {
    bedroom: 2,
    value: '二室'
  },
  {
    bedroom: 3,
    value: '三室'
  },
  {
    bedroom: 4,
    value: '四室'
  },
  {
    bedroom: 5,
    value: '五室'
  },
  {
    value: '五室以上'
  }
]
export const school = [
  {
    value: '不限'
  },
  {
    value: '成吉思汗小学'
  },
  {
    value: '北垣小学公主府校区'
  },
  {
    value: '八一小学'
  },
  {
    value: '海拉尔路小学'
  },
  {
    value: '胜利街小学'
  },
  {
    value: '车展小学'
  },
  {
    value: '新华小学'
  },
  {
    value: '北垣小学'
  },
  {
    value: '关帝庙小学'
  },
  {
    value: '满族小学'
  },
  {
    value: '山水小学'
  },
  {
    value: '呼哈路小学'
  },
  {
    value: '青山小学'
  },
  {
    value: '海新小学'
  }
]

