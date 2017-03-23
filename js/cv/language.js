Highcharts.chart('language-graph', {
	chart: {
		type: 'bar'
	},
	title: {
		text: 'Language Proficiency'
	},
	subtitle: {
		text: 'This is highly subjective'
	},
	xAxis: {
		categories: ['Languages'],
		title: {
			text: null
		}
	},
	yAxis: {
		min: 0,
		max: 100,
		title: {
			text: 'Proficiency',
			align: 'high'
		},
		labels: {
			overflow: 'justify'
		}
	},
	plotOptions: {
		bar: {
			dataLabels: {
				enabled: true
			}
		}
	},
	series: [{
		name: 'Indonesian',
		data: [100]
	},
	{
		name: 'Python',
		data: [90]
	},
	{
		name: 'Markdown',
		data: [80]
	},
	{
		name: 'JavaScript',
		data: [80]
	},
	{
		name: 'R',
		data: [75]
	},
	{
		name: 'Java',
		data: [73]
	},
	{
		name: 'CSS',
		data: [70]
	},
	{
		name: 'HTML',
		data: [70]
	},
	{
		name: 'UNIX Script',
		data: [65]
	},
	{
		name: 'C Family',
		data: [30]
	},
	{
		name: 'Hebrew',
		data: [0]
	}
	]
});