<template>
  <div>
    <section class="py-16 bg-dark-lighter circuit-pattern">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="text-gradient">{{ t('product.title') }}</span>
          </h1>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            {{ t('product.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-12 bg-dark">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <NuxtLink
            v-for="(product, index) in products"
            :key="product.id"
            :to="`/products/${product.id}`"
            class="card group cursor-pointer hover:scale-[1.02] transition-all duration-300 animate-fade-in"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img
                :src="product.image"
                :alt="locale === 'zh' ? product.name : product.nameEn"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
              <span class="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-dark text-xs font-medium rounded-full">
                {{ locale === 'zh' ? product.category : product.categoryEn }}
              </span>
            </div>

            <h3 class="text-base font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {{ locale === 'zh' ? product.name : product.nameEn }}
            </h3>

            <p class="text-gray-500 text-sm mb-4 line-clamp-2">
              {{ locale === 'zh' ? product.description : product.descriptionEn }}
            </p>

            <div class="flex items-center justify-between pt-4 border-t border-gray-800">
              <div>
                <span class="text-accent font-bold text-lg">
                  {{ locale === 'zh' ? '¥' + product.price : '$4.9' }}
                </span>
                <span class="text-gray-500 text-sm ml-1">
                  {{ locale === 'zh' ? 'CNY' : 'USD' }}
                </span>
              </div>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="format in product.formats.slice(0, 2)"
                  :key="format"
                  class="px-2 py-0.5 bg-dark text-xs text-gray-400 rounded"
                >
                  {{ format }}
                </span>
                <span v-if="product.formats.length > 2" class="px-2 py-0.5 bg-dark text-xs text-gray-400 rounded">
                  +{{ product.formats.length - 2 }}
                </span>
              </div>
            </div>

            <div class="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {{ t('product.getSource') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-16 bg-dark-lighter">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            {{ locale === 'zh' ? '没有找到您需要的？' : 'Didn\'t Find What You Need?' }}
          </h2>
          <p class="text-gray-400 mb-6">
            {{ locale === 'zh'
              ? '我们还提供定制电路设计服务。如果您有特殊需求，请通过邮件联系我们。'
              : 'We also offer custom circuit design services. Contact us via email if you have special requirements.'
            }}
          </p>
          <a
            href="mailto:357854360@qq.com"
            class="btn-primary inline-flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            357854360@qq.com
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
const { locale, t } = useI18n()

useHead({
  title: locale.value === 'zh'
    ? '电路设计源文件产品列表 | PCB Layout Files | CircuitFiles'
    : 'Circuit Design Source Files | PCB Layout Files | CircuitFiles',
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? '浏览我们的电路设计源文件产品列表，包括STM32、Arduino、电源模块等各类电子设计文件。'
        : 'Browse our circuit design source files including STM32, Arduino, power modules and more electronics design files.',
    },
    {
      name: 'keywords',
      content: '电路设计源文件, PCB Layout Files, STM32, Arduino, 电源模块, Altium Designer',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: locale.value === 'zh' ? '电路设计源文件产品列表' : 'Circuit Design Source Files',
        description: locale.value === 'zh'
          ? '精选电路设计源文件，包括原理图和PCB设计'
          : 'Premium circuit design source files including schematics and PCB layouts',
        itemListElement: products.map((product, index) => ({
          '@type': 'Product',
          position: index + 1,
          name: locale.value === 'zh' ? product.name : product.nameEn,
          description: locale.value === 'zh' ? product.description : product.descriptionEn,
          image: product.image,
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'CNY',
            availability: 'https://schema.org/InStock',
          },
        })),
      }),
    },
  ],
})
</script>