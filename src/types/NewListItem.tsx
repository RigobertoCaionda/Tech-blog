export type NewListItem = {
	id: number;
	title: string;
	dateCreated: Date;
	desc: string;
	subject: string[];
	text: string[];
	views: number;
	likes: number;
	likedByUsers: string[];
	userLiked: boolean;
	commentsList: object[];
	totalComments: number;
	userData: object;
}; 