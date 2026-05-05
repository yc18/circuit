<template>
  <div class="min-h-screen flex items-center justify-center bg-dark circuit-pattern">
    <div class="text-center px-4">
      <div class="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        <span class="text-5xl font-bold text-primary">{{ error?.statusCode || '?' }}</span>
      </div>

      <h1 class="text-3xl md:text-4xl font-bold mb-4">
        {{ error?.statusCode === 404 ? ($i18n.locale === 'zh' ? '页面未找到' : 'Page Not Found') : ($i18n.locale === 'zh' ? '出错了' : 'Something Went Wrong') }}
      </h1>

      <p class="text-gray-400 mb-8 max-w-md mx-auto">
        {{ error?.statusCode === 404
          ? ($i18n.locale === 'zh' ? '抱歉，您访问的页面不存在或已被移除' : 'Sorry, the page you are looking for does not exist or has been removed')
          : ($i18n.locale === 'zh' ? '抱歉，服务器发生了一些问题，请稍后重试' : 'Sorry, something went wrong with the server. Please try again later')
        }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button @click="handleError" class="btn-primary inline-flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {{ $i18n.locale === 'zh' ? '返回首页' : 'Back to Home' }}
        </button>
        <a href="mailto:357854360@qq.com" class="btn-secondary inline-flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {{ $i18n.locale === 'zh' ? '联系客服' : 'Contact Support' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    message?: string
  } | null
}>()

const { locale } = useI18n()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>