module.exports = {
	title: 'Viking',
	description: 'Hello World project',
	base: '/guide/',
	dest: './docs',
	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/' },
			{ text: 'Resource',
			  items: [
				  { text: 'SOP', link: 'https://docs.google.com/spreadsheets/d/1t4DR1owReaFl8sYtmrnh8jtu6RhjFXucAmK9_CoQ_r8/'},
				  { text: 'Rule', link: 'https://opcpharma.com' },
				  { text: 'Certificate', link: '/'}
			  ]
			},
			{ text: 'About', link: '/about.md'}
			
		],
		sidebar: [
			['/budget/', 'Budget'],
			['/event/', 'Event'],
			{
				title: 'Research',
				path: '/research/',
				children: [
					['/research/feedback.md', 'Thông tin thị trường'],
					['/research/satisfaction.md', 'Sự hài lòng'],
					['/research/analysis.md', 'Phân tích kinh doanh'],
					['/research/bidding.md', 'Kết quả trúng thầu'],
					['/research/declare.md', 'Giá kê khai']
				]
			},
			['/trademark/', 'Trademark']
			
		],
		
		// Github repo and Edit Links
		repo: 'ramboviking/guide',
		docsDir: 'source',
		editLinks: true,
		
		smoothScroll: true
	},
	plugins: ['@vuepress/last-updated']
}