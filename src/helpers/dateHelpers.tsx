export const dateFormatter = (dateCreated: Date) => {
	let date: Date = dateCreated;
	let months: string[] = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 
	'setembro', 'outubro', 'novembro', 'dezembro'];
	let month: string = months[date.getMonth()];
	return `${date.getDate()} de ${month} de ${date.getFullYear()}`;
}

export const timeFormatter = (dateCreated: Date) => {
	let date: Date = dateCreated;
	let hour = date.getHours();
	let minutes = date.getMinutes();

	return `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

export const pastTime = (date1: Date, date2: Date) => {
	let diffMs = (date1.getTime() - date2.getTime());
	let diffDays = Math.floor(diffMs / 86400000);
	return diffDays;
}