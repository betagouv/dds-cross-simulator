description: 'Enter postal code',

scenario: [
	PostalCodeWidget.setField(entry.logement.adresse.codePostal),
	ControlsWidget.continue()
]
