export const dateFormatter = (dateCreated: Date) => {
	let date: Date = dateCreated;
	let months: string[] = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 
	'setembro', 'outubro', 'novembro', 'dezembro'];
	let month: string = months[date.getMonth()];
	return `${date.getDate()} de ${month} de ${date.getFullYear()}`;
}