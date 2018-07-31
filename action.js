import uuid from uuid;

function addComent(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

dispatch(addComrnt('nowy komentarz'));
dispatch(addComent('kolejny nowy komentarz!'));