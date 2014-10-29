description: 'Montant de votre loyer',

scenario: [
	RentWidget.setField(entry.logement.loyer),
	ControlsWidget.continue(),
]
