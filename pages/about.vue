<template>
  <div>
    <section class="py-16 bg-dark-lighter circuit-pattern">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="text-gradient">{{ t('about.title') }}</span>
          </h1>
          <p class="text-gray-400 text-lg">{{ t('about.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-dark">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div class="relative bg-dark-lighter rounded-3xl p-8 border border-primary/20">
                <div class="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <svg class="w-12 h-12 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div class="text-center">
                  <h2 class="text-2xl font-bold mb-2">CircuitFiles</h2>
                  <p class="text-gray-400">
                    {{ locale === 'zh' ? '电子设计专家' : 'Electronics Design Expert' }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="animate-slide-up">
            <h2 class="text-3xl font-bold mb-6">
              {{ locale === 'zh' ? '关于我' : 'About Me' }}
            </h2>

            <div class="space-y-4 text-gray-400 leading-relaxed">
              <p v-if="locale === 'zh'">
                我是一名拥有10余年经验的电子工程师，专注于电路设计和嵌入式系统开发。
                多年来，我为众多客户提供了高质量的电路设计和PCB layout服务。
              </p>
              <p v-else>
                I am an electronics engineer with over 10 years of experience, specializing in circuit design and embedded systems development.
                Over the years, I have provided high-quality circuit design and PCB layout services to numerous clients.
              </p>

              <p v-if="locale === 'zh'">
                我熟悉多种PCB设计软件，包括Altium Designer、Eagle、KiCad等，
                能够根据客户需求提供最佳的设计方案。
              </p>
              <p v-else>
                I am proficient in various PCB design software including Altium Designer, Eagle, and KiCad,
                and can provide the best design solutions based on customer requirements.
              </p>

              <p v-if="locale === 'zh'">
                创立这个平台的目的，是为了帮助更多的电子爱好者和工程师，
                能够快速获取高质量的电路设计源文件，加速他们的项目开发。
              </p>
              <p v-else>
                The purpose of creating this platform is to help more electronics enthusiasts and engineers
                quickly access high-quality circuit design source files and accelerate their project development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-dark-lighter">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">
          {{ locale === 'zh' ? '我的专业能力' : 'My Expertise' }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card text-center group hover:border-primary/50 transition-colors">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">
              {{ locale === 'zh' ? '原理图设计' : 'Schematic Design' }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ locale === 'zh'
                ? '精通模拟电路和数字电路设计'
                : 'Expert in analog and digital circuit design'
              }}
            </p>
          </div>

          <div class="card text-center group hover:border-accent/50 transition-colors">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">
              {{ locale === 'zh' ? 'PCB Layout' : 'PCB Layout' }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ locale === 'zh'
                ? '2-8层PCB设计，高速信号处理'
                : '2-8 layer PCB design, high-speed signal processing'
              }}
            </p>
          </div>

          <div class="card text-center group hover:border-primary/50 transition-colors">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">
              {{ locale === 'zh' ? '嵌入式开发' : 'Embedded Development' }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ locale === 'zh'
                ? 'STM32、ESP32、Arduino等'
                : 'STM32, ESP32, Arduino and more'
              }}
            </p>
          </div>

          <div class="card text-center group hover:border-accent/50 transition-colors">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">
              {{ locale === 'zh' ? '品质保证' : 'Quality Assurance' }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ locale === 'zh'
                ? '所有设计经过验证测试'
                : 'All designs verified and tested'
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-dark">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">
            {{ locale === 'zh' ? '联系我' : 'Contact Me' }}
          </h2>
          <p class="text-gray-400 mb-8">
            {{ locale === 'zh'
              ? '如果您有任何问题或需求，欢迎通过邮件联系我'
              : 'If you have any questions or needs, feel free to contact me via email'
            }}
          </p>

          <a
            href="mailto:357854360@qq.com"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-dark font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
const { locale, t } = useI18n()

useHead({
  title: locale.value === 'zh'
    ? '关于我们 - 专业电路设计服务商 | CircuitFiles'
    : 'About Us - Professional Circuit Design Services | CircuitFiles',
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? '了解我们的专业背景和行业经验，为您提供高质量的电路设计源文件服务。'
        : 'Learn about our professional background and industry experience in providing high-quality circuit design source files.',
    },
  ],
})
</script>