import { ref, computed } from 'vue'
import zh from '~/locales/zh.json'
import en from '~/locales/en.json'

const locale = ref('zh')
const messages = { zh, en }

export function useI18n() {
  const t = computed(() => (key: string) => {
    const keys = key.split('.')
    let result: any = messages[locale.value]
    for (const k of keys) {
      result = result?.[k]
      if (result === undefined) return key
    }
    return result
  })

  const setLocale = (newLocale: string) => {
    locale.value = newLocale
  }

  return {
    locale,
    t,
    setLocale,
  }
}