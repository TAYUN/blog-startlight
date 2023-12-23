import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tayunblog.github.io',
	base: '/', 
	integrations: [
		starlight({
			title: '首页',
			social: {
				github: 'https://github.com/withastro/starlight',
			},

			components: {
				// 重写默认的 `SocialIcons` 组件。
				SocialIcons: './src/components/EmailLink.astro',
				SocialLinks: './src/components/MySocialLinks.astro',
			},
			// 为此网站设置英语为默认语言。
			defaultLocale: 'zh-CN',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
		}),
	],
});
