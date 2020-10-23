module.exports = {
	title: 'Viking',
	description: 'Marketing Dept Guideline',
	base: '/guide/',
	dest: './docs',
	themeConfig: {
		nav: [
			{ text: 'Resource',
			  items: [
				  { text: 'Quy định', items: [
					  { text: 'Quality', link: '/quality/'},
					  { text: 'Procedure', link: 'https://docs.google.com/spreadsheets/d/1t4DR1owReaFl8sYtmrnh8jtu6RhjFXucAmK9_CoQ_r8/'},
				  	  { text: 'Rule', link: 'https://opcpharma.com' }
				  ] },
				  { text: 'Danh sách', items: [
					  { text: 'Certificate', link: 'https://docs.google.com/spreadsheets/d/1Zue-tOhOoYqT-OfpxysWW1gQuMkJKhcVl1QWGaALG8c/edit#gid=0'},
					  { text: 'Award', link: 'https://docs.google.com/spreadsheets/d/1Zue-tOhOoYqT-OfpxysWW1gQuMkJKhcVl1QWGaALG8c/edit#gid=1106985385'},
					  { text: 'Verify', link: 'https://docs.google.com/spreadsheets/d/1Zue-tOhOoYqT-OfpxysWW1gQuMkJKhcVl1QWGaALG8c/edit#gid=1746001221'},
				  ] },
				  { text: 'Page', items: [
					  { text: 'Tư vấn', link: '/consult/'},
					  { text: 'About', link: '/about.md'}
				  ]}
			  ],
			},
		],
		sidebarDepth: 2,
		sidebar: {
			'/quality/': [
				{
					title: 'Quality management',
					children: [
						['/quality/', 'Introduction'],
						['/quality/develop.md', 'Develop'],
						['/quality/marketing.md', 'Marketing process']
					]
				}
			],
			'/consult/': [
				{
					title: 'Tư vấn',
					children: [
						['/consult/ktt/', 'Thuốc trị sỏi thận Kim Tiền Thảo'],
						['/consult/mimosa/', 'MIMOSA viên an thần'],
						['/consult/hoastex/', 'HoAstex'],
						['/consult/cim/', 'Cao Ích Mẫu'],
						['/consult/opsure/', 'Kiện nhi OPSURE']
					]
				}
			],
			
			// fallback
			'/': [
			{
				title: 'Budget',
				path: '/budget/',
				children: [
					['/purchase/gimmick.md', 'Gimmick']
				]
			},
			{
				title: 'Research',
				path: '/research/',
				children: [
					['/research/feedback.md', 'Thông tin thị trường'],
					['/research/satisfaction.md', 'Sự hài lòng'],
					['/research/sale.md', 'Phân tích kinh doanh'],
					['/research/bidding.md', 'Kết quả trúng thầu'],
					['/research/declare.md', 'Giá kê khai'],
					['/research/discuss.md', 'Thảo luận']
				]
			},
			{
				title: 'Communication',
				children: [
					['/communication/', 'Introduction'],
					['/communication/article/', 'Article'],
					['/communication/blog/', 'Blog'],
					['/communication/newsletter/', 'Newsletter'],
					['/communication/social/', 'Social'],
					['/communication/publication/', 'Publication'],
					['/communication/regulatory/', 'Regulatory affair'],
					['/communication/csr/', 'Coporate Social Responsibility'],
				]
			},
			{
				title: 'Event',
				children: [
					['/event/', 'Quy tắc chung'],
					['/event/group-present.md', 'Group present'],
					['/event/consult.md', 'Tư vấn'],
					['/event/workshop.md', 'Hội thảo'],
					['/event/fair.md', 'Hội chợ'],
					['/event/exhibition.md', 'Triển lãm'],
					['/event/meeting.md', 'Hội nghị khách hàng']
				]
			},
			
			{
				title: 'Quảng cáo',
				children: [
					['/ads/', 'Introduction'],
					['/ads/tvc/', 'TVC'],
					['/ads/print-ads/', 'Print Ads'],
					['/ads/banner/', 'Banner']
				]

			},
			{
				title: 'Trade marketing',
				path: '/trade/',
				children: [
					['/trade/promotion.md', 'Promotion'],
					['/trade/loyalty.md', 'Loyalty']
				]
			},
			{
				title: 'Intellectual Property',
				path: '/ip/',
				children: [
					['/ip/trademark.md', 'Trademark'],
					['/ip/patent.md', 'Patent'],
					['/ip/copyright/author.md', 'Copyright']
				]
			},
			{
				title: 'Other',
				path: '/administration/',
				children: [
					['/text-decoration.md', 'Text decoration'],
					['/name-convention.md', 'Name convention'],
					['/administration/', 'Hành chánh'],
					['/company-index.md', 'Company Index']
				]
			}
			
		]},
		
		// Github repo and Edit Links
		repo: 'ramboviking/guide',
		docsDir: 'source',
		editLinks: true,
		
		smoothScroll: true
	},
	plugins: ['@vuepress/last-updated']
}