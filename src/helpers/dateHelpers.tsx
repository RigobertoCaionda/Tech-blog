import dayjs from 'dayjs'; //Biblioteca para manipular datas (past time from a date to another)
import ptBr from 'dayjs/locale/pt-br'; // Usando a lingua portuguesa no retorno
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale(ptBr);
dayjs.extend(relativeTime);

export const dateFormatter = (dateCreated: Date) => {
	const months: string[] = [];
	const formatter = new Intl.DateTimeFormat('pt-BR', { month: 'long' });

	for (let index of Array.from({ length: 12 }).map((_, index) => index + 1)) {
		months.push(formatter.format(new Date(0, index, 0)));
	}

	const currentMonth = months[dateCreated.getMonth()];
	return `${dateCreated.getDate()} de ${currentMonth} de ${dateCreated.getFullYear()}`;
	// Forma diferente de retornar a data
}

export const timeFormatter = (dateCreated: Date) => {
	let date: Date = dateCreated;
	let hour = date.getHours();
	let minutes = date.getMinutes();

	return `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

export const pastTime = (date: Date) => {
	let diff = dayjs(date).diff(dayjs(), 'day'); // calculando a diferenca entre date e a data atual
	diff = diff < 0 ? diff * -1 : diff; // Para que serve isso ?
	if (diff > 30) {
		return dayjs(date).format('DD/MM/YYYY');
	}
	return dayjs(date).from(dayjs()); // o mais importante, retorna quanto tempo passou da data fornecida ate a data atual, so essa linha ja bastava
} // dayjs() sem parametro retorna a data atual, esse 'day' e a unidade que queremos o retorno