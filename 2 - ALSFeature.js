description: 'Simulate Allocation Logement',

scenario: [
	PostalCodeWidget.setField(entry.logement.adresse.codePostal),
	ControlsWidget.continue(),

	SituationWidget['select' + mappings.type[entry.logement.type]](),
	ControlsWidget.continue(),

	RenterWidget['select' + (entry.logement.type.payant ? 'Room' : 'Studio')](),
	RenterWidget['select' + (
		entry.logement.colocation
		? 'MultiplePeople'
		: entry.individus.some(function(el) { el.role == 'concubin' })
		? 'Partner'
		: 'Alone')
	](),
	RenterWidget['select' + mappings.rent.locationType[entry.logement.locationType]](),
	ControlsWidget.continue(),

	RentWidget.setField(entry.logement.loyer),
	ControlsWidget.continue(),
]
