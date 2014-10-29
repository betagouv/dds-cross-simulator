description: 'Situation professionnelle',

scenario: [
	ProfessionWidget['selectHas' + (mappings.synonyms.activity.any.indexOf(requester.situationsPro) > -1 ? '' : 'No') + 'Activity'](),
	ProfessionWidget['selectHas' + (requester.ressources.indexOf('rsa') > -1 ? '': 'No') + 'RSA'](),
	ControlsWidget.continue(),
]
