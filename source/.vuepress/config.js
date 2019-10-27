module.exports = {
	title: 'Viking',
	description: 'Marketing Dept Guideline',
	base: '/guide/',
	dest: './docs',
	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/' },
			{ text: 'Resource',
			  items: [
				  { text: 'Quy định', items: [
					  { text: 'SOP', link: 'https://docs.google.com/spreadsheets/d/1t4DR1owReaFl8sYtmrnh8jtu6RhjFXucAmK9_CoQ_r8/'},
				  	  { text: 'Rule', link: 'https://opcpharma.com' }
				  ] },
				  { text: 'Danh sách', items: [
					  { text: 'Certificate', link: 'https://docs.google.com/spreadsheets/d/1Zue-tOhOoYqT-OfpxysWW1gQuMkJKhcVl1QWGaALG8c/edit#gid=0'},
					  { text: 'Award', link: 'https://docs.google.com/spreadsheets/d/1Zue-tOhOoYqT-OfpxysWW1gQuMkJKhcVl1QWGaALG8c/edit#gid=1106985385'},
					  { text: 'Verify', link: 'https://docs.google.com/spreadsheets/d/1Zue-tOhOoYqT-OfpxysWW1gQuMkJKhcVl1QWGaALG8c/edit#gid=1746001221'},
				  ] }
			  ]
			},
			{ text: 'About', link: '/about.md'}
			
		],
		sidebar: [
			{
				title: 'Budget',
				path: '/budget/',
				children: [
					['/purchase/gimmick.md', 'Gimmick']
				]
			},
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
			['/trademark/', 'Trademark'],
			{
				title: 'Other',
				path: '/administration/',
				children: [
					['/text-decoration.md', 'Text decoration'],
					['/name-convention.md', 'Name convention'],
					['/administration/', 'Hành chánh']
				]
			}
			
		],
		
		// Github repo and Edit Links
		repo: 'ramboviking/guide',
		docsDir: 'source',
		editLinks: true,
		
		smoothScroll: true
	},
	plugins: ['@vuepress/last-updated']
}