function(doc) {
   if(doc.type === 'student') {
	   emit(doc.actor, doc);
   }
};