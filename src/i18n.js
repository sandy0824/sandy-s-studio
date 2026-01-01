// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    nav: { portfolio: '作品集', about: '關於我', score: '學習成績' },
    brand: "Sandy's Studio.",
    modal: {
      description: '專案描述',
      viewDetails: '查看詳情',
      close: '關閉'
    }
  },
  en: {
    nav: { portfolio: 'Portfolio', about: 'About Me', score: 'Scores' },
    brand: "Sandy's Studio.",
    modal: {
      description: 'Project Description',
      viewDetails: 'View Details',
      close: 'Close'
    }
  }
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'zh',  // 預設語系
  fallbackLocale: 'en', // 找不到翻譯時回退到英文
  messages,
})

export default i18n