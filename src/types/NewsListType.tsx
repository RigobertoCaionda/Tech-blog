export type NewsListType = {
	_id: string;
	subject: string[];
	text: string[];
	status: boolean;
	title: string;
	desc: string;
	likes: number;
	views: number;
	userId: string;
	dateCreated: Date;
	v: number;
};