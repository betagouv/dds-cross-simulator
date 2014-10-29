requester	= entry.individus.filter(function(el) { return el.role == 'demandeur' })[0];
partner		= entry.individus.filter(function(el) { return el.role == 'concubin' })[0];
children	= entry.individus.filter(function(el) { return el.role == 'enfant' });
caredFor	= entry.individus.filter(function(el) { return el.role == 'personneACharge' });
