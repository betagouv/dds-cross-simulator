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
		: partner
		? 'Partner'
		: 'Alone')
	](),
	RenterWidget['select' + mappings.rent.locationType[entry.logement.locationType]](),
	ControlsWidget.continue(),

	RentWidget.setField(entry.logement.loyer),
	ControlsWidget.continue(),

	FamilySituationWidget['select' + (partner ? 'HasPartner': 'Alone')](),
	FamilySituationWidget.setBirthDateField(formatBirthDate(requester.dateDeNaissance)),
	partner
	? FamilySituationWidget.setPartnerBirthDateField(formatBirthDate(partner.dateDeNaissance))
	: FamilySituationWidget['selectIs' + (requester.enceinte ? '' : 'Not') + 'Pregnant'](),
	FamilySituationWidget.setChildrenCountField(children.length),
	FamilySituationWidget.setParentsCountField(caredFor.length),
	ControlsWidget.continue(),

	ProfessionWidget['selectHas' + (mappings.synonyms.activity.none.indexOf(requester.situationsPro) > -1 ? 'No' : '') + 'Activity'](),
	ProfessionWidget['selectHas' + (requester.ressources.indexOf('rsa') > -1 ? '': 'No') + 'RSA'](),
	ControlsWidget.continue(),
]
