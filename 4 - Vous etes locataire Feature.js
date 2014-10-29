description: 'Vous êtes locataire',

scenario: [
	RenterWidget['select' + (entry.logement.type.payant ? 'Room' : 'Studio')](),
	RenterWidget['select' + (
		entry.logement.colocation
		? 'MultiplePeople'
		: partner
		? 'Partner'
		: 'Alone')
	](),
	RenterWidget['select' + mappings.rent.locationType[entry.logement.locationType]](),
	ControlsWidget.continue(),
]
