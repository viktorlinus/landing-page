export const blogEntries = [
		{
			id: 1,
			name: 'Viktor',
			date: '2021-11-13',
			title: 'Första inlägget',
			content: 'Blogginläggets text kommer att skrivas här, ett bättre sätt för detta måste jag komma på annars blire jävligt bökigt tror jag.'
		},
		{
			id: 2,
			name: 'Viktor',
			date: '2021-11-14',
			title: 'Andra inlägget',
			content: 'Blogginläggets text kommer att skrivas här, ett bättre sätt för detta måste jag komma på annars blire jävligt bökigt tror jag.'
		},
		{
			id: 3,
			name: 'Viktor',
			date: '2021-11-20',
			title: 'Tredje inlägget',
			content: 'Blogginläggets text kommer att skrivas här, ett bättre sätt för detta måste jag komma på annars blire jävligt bökigt tror jag. testar så att det funkar'
		},
		{
			id: 3,
			name: 'Viktor',
			date: '2021-11-20',
			title: 'Bajs inlägget',
			content: 'Blogginläggets text kommer att skrivas här, ett bättre sätt för detta måste jag komma på annars blire jävligt bökigt tror jag. testar så att det funkar'
		},
	];

	export function getInvoice(number) {
		return blogEntries.find(
		  invoice => blogEntries.number === number
		);
	}