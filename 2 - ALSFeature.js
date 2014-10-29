description: 'Enter postal code',

scenario: [
	PostalCodeWidget.setField(entry.logement.adresse.codePostal),
	ControlsWidget.continue(),

	SituationWidget['select' + mappings.type[entry.logement.type]](),
	ControlsWidget.continue(),
]
