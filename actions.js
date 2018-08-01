import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComent(text, id) {
	return {
		type: ADD_COMMENT,
		text,
		id
	}
}

function editComment(text) {
	return {
		type: EDIT_COMMENT,
		text,
		id: uuid.v4()
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id

	}
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id
	}
}

/* SPOSÓB PIERWSZY */
dispatch(addComment('nowy komentarz'));
dispatch(addComment('kolejny nowy komentarz!'));


/* SPOSÓB DRUGI */
const boundAddComment = text => dispatch(addComment(text));

boundAddComment('nowy komentarz');
boundAddComment('kolejny nowy komentarz');

