description: 'Sans activité professionnelle',

scenario: [
	NoActivityWidget['select' + getNoActivityTypeFor(requester)](),
	ControlsWidget.continue(),
]
