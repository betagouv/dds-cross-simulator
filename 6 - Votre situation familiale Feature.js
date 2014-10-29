description: 'Votre situation familiale',

scenario: [
	FamilySituationWidget['select' + (partner ? 'HasPartner': 'Alone')](),
	FamilySituationWidget.setBirthDateField(formatBirthDate(requester.dateDeNaissance)),
	partner
	? FamilySituationWidget.setPartnerBirthDateField(formatBirthDate(partner.dateDeNaissance))
	: FamilySituationWidget['selectIs' + (requester.enceinte ? '' : 'Not') + 'Pregnant'](),
	FamilySituationWidget.setChildrenCountField(children.length),
	FamilySituationWidget.setParentsCountField(caredFor.length),
	ControlsWidget.continue(),
]
