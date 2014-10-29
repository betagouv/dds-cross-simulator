description: 'Votre situation',

scenario: [
	SituationWidget['select' + mappings.type[entry.logement.type]](),
	ControlsWidget.continue(),
]
