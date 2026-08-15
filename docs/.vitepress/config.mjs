import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "枫叶小栈",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/java/java' }
    ],

    sidebar: [
      {
        text: 'Java',
        items: [
          { text: 'Java基础', link: '/java/java' },
          { text: 'Java并发基础', link: '/java/juc' },
          { text: 'Java虚拟机（JVM）', link: '/java/jvm' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }

        ]
      }, {
        text: '设计模式',
        items: [
          { text: '设计模式总结', link: '/design-model/design-model' }
        ]
      }, {
        text: 'Spring',
        items: [
          { text: 'Spring基础', link: '/spring/spring' },
          { text: 'Spring事务', link: '/spring/transactional' },
          { text: 'Nacos', link: '/spring/nacos' }
        ]
      }, {
        text: 'MySQL',
        items: [
          { text: '索引', link: '/mysql/mysql' },
          { text: '优化', link: '/mysql/optimize' }
        ]
      }, {
        text: 'Redis',
        items: [
          { text: '索引', link: '/redis/redis' },
        ]
      }, {
        text: 'Docker',
        items: [
          { text: 'docker', link: '/docker/docker' },
        ]
      }, {
        text: 'Nginx',
        items: [
          { text: 'nginx', link: '/nginx/nginx' },
        ]
      }, {
        text: '线上生产问题排查',
        items: [
          { text: '线上生产事故排查', link: '/prod/prod-fix' }
        ]
      }, {
        text: '踩坑',
        items: []
      }, {
        text: '生活有感',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/'
})
