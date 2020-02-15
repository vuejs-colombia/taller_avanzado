module.exports = {
	title: 'Taller Avanzado de Vue',
	description: '',
	themeConfig: {
		nav: [
			{	text:  'Inicio', link: '/' }
		],
		sidebar: [
			{
				title: 'Vue Router',
				children: [
					'/vue-router/introduction',
					'/vue-router/challenge1',
					'/vue-router/challenge2',
					'/vue-router/bonus'
				]
			},
			{
				title: 'Manejo de estado',
				children: [
					'/handle-state/introduction',
					'/handle-state/challenge1',
					'/handle-state/challenge2'
				]
			}
		]
	}
}
