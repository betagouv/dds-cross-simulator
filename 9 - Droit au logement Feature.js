description: 'Droit au logement',

scenario: [
	ALWidget['select' + (requester.ressources.indexOf('allocationLogement') > -1 ? '' : 'No') + 'AL'](),
	ControlsWidget.continue(),
]
