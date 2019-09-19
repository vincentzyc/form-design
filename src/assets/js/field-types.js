export default {
  "inputTypes": [{
    "value": "name",
    "label": "姓名"
  }, {
    "value": "mail",
    "label": "邮箱"
  }, {
    "value": "idCard",
    "label": "身份证"
  }],

  "checkboxTypes": [{
    "value": "shootPlace",
    "label": "旅拍城市",
    "options": ["北京", "三亚", "丽江", "巴厘岛", "马尔代夫", "威尼斯", "其他"]
  }, {
    "value": "sex",
    "label": "性别",
    "options": ["男", "女"]
  }, {
    "value": "loanTimeList",
    "label": "贷款时间",
    "options": ["12个月", "24个月", "36个月", "48个月"]
  }],

  "selectTypes": [{
    "value": "educationLevel",
    "label": "教育程度",
    "options": ["硕士及以上", "本科", "大专", "中专/高中及以下"]
  }, {
    "value": "profession",
    "label": "职业身份",
    "options": ["上班族", "个体户", "电商主", "自由职业者", "企业主"]
  }, {
    "value": "AutomobileAssets",
    "label": "名下是否有车",
    "options": ["无车", "无车，准备购买", "本人名下有车，无贷款", "本人名下有车，有按揭贷款", "本人名下有车，但已被抵押"]
  }],

  "switchTypes": [{
    "value": "creditCard",
    "label": "是否有信用卡"
  }, {
    "value": "socialSecurity",
    "label": "是否有社保"
  }, {
    "value": "accFund",
    "label": "是否有公积金"
  }],

  "hPickerTypes": [{
    "value": "age",
    "label": "年龄",
    "options": ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"]
  }, {
    "value": "amount",
    "label": "金额",
    "options": ["1000以下", "2000", "3000", "5000", "1万", "3万", "5万", "10万", "10万以上"]
  }],

  "dateTypes": [{
    "value": "birthday",
    "label": "生日"
  }, {
    "value": "idCardValidity",
    "label": "身份证有效期"
  }]
}