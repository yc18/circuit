<template>
  <div class="min-h-screen flex flex-col bg-dark">
    <header class="sticky top-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-primary/20">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <span class="text-xl font-bold text-gradient hidden sm:block">CircuitFiles</span>
          </NuxtLink>

          <div class="flex items-center gap-6">
            <div class="hidden md:flex items-center gap-6">
              <NuxtLink to="/" class="nav-link">{{ t('nav.home') }}</NuxtLink>
              <NuxtLink to="/products" class="nav-link">{{ t('nav.products') }}</NuxtLink>
              <NuxtLink to="/about" class="nav-link">{{ t('nav.about') }}</NuxtLink>
            </div>

            <div class="flex items-center gap-3">
              <button
                @click="switchLocale('zh')"
                :class="['lang-btn', { 'active': locale === 'zh' }]"
              >
                中
              </button>
              <span class="text-primary/30">|</span>
              <button
                @click="switchLocale('en')"
                :class="['lang-btn', { 'active': locale === 'en' }]"
              >
                EN
              </button>
            </div>

            <button class="md:hidden mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4">
          <div class="flex flex-col gap-4">
            <NuxtLink to="/" class="nav-link" @click="mobileMenuOpen = false">{{ t('nav.home') }}</NuxtLink>
            <NuxtLink to="/products" class="nav-link" @click="mobileMenuOpen = false">{{ t('nav.products') }}</NuxtLink>
            <NuxtLink to="/about" class="nav-link" @click="mobileMenuOpen = false">{{ t('nav.about') }}</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-dark-lighter border-t border-primary/20 mt-16">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span class="text-xl font-bold text-gradient">CircuitFiles</span>
            </div>
            <p class="text-gray-400 text-sm">
              {{ locale === 'zh' ? '专业电路设计源文件商店' : 'Professional Circuit Design Source Files Store' }}
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-primary">{{ t('footer.contact') }}</h3>
            <a
              href="mailto:357854360@qq.com"
              class="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              357854360@qq.com
            </a>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-primary">{{ locale === 'zh' ? '快速链接' : 'Quick Links' }}</h3>
            <div class="flex flex-col gap-2">
              <NuxtLink to="/" class="text-gray-400 hover:text-primary transition-colors">{{ t('nav.home') }}</NuxtLink>
              <NuxtLink to="/products" class="text-gray-400 hover:text-primary transition-colors">{{ t('nav.products') }}</NuxtLink>
              <NuxtLink to="/about" class="text-gray-400 hover:text-primary transition-colors">{{ t('nav.about') }}</NuxtLink>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-primary">{{ locale === 'zh' ? '友情链接' : 'Friend Links' }}</h3>
            <div class="flex flex-col gap-2">
              <a
                href="https://shop35904761.taobao.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {{ locale === 'zh' ? '顶点设计工作室' : 'Dingdian Design Studio' }}
              </a>
              <a
                href="https://omg10.com/4/10979347"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {{ locale === 'zh' ? '惊喜传送门' : 'Surprise Portal' }}
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-primary/20 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {{ new Date().getFullYear() }} CircuitFiles. {{ t('footer.allRights') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, t, setLocale } = useI18n()
const mobileMenuOpen = ref(false)

const switchLocale = (newLocale: string) => {
  setLocale(newLocale)
  mobileMenuOpen.value = false
}

useHead({
  htmlAttrs: {
    lang: locale.value === 'zh' ? 'zh-CN' : 'en-US',
  },
  link: [
    { rel: 'alternate', hreflang: 'zh-CN', href: 'https://circuitfiles.com/zh' },
    { rel: 'alternate', hreflang: 'en-US', href: 'https://circuitfiles.com/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://circuitfiles.com/' },
  ],
})
</script>

<style scoped>
.nav-link {
  @apply text-gray-300 hover:text-primary transition-colors font-medium;
}

.nav-link.router-link-active {
  @apply text-primary;
}

.lang-btn {
  @apply text-gray-400 hover:text-primary transition-colors font-medium text-sm;
}

.lang-btn.active {
  @apply text-primary font-bold;
}

.mobile-menu-btn {
  @apply text-gray-300 hover:text-primary transition-colors;
}
</style>