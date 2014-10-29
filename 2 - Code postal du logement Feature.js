description: 'Code postal du logement',

scenario: [
	PostalCodeWidget.setField(entry.logement.adresse.codePostal),
	ControlsWidget.continue(),
]
