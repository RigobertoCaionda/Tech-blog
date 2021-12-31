export type NewListItem = {
	id: number;
	title: string;
	dateCreated: Date;
	desc: string;
	subject: string[];
	text: string[];
	views: number;
	likes: number;
	userId: number;
};//subject vai os assuntos 