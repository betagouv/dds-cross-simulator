mappings = {
	type: {
		locataire: 'Renter',
		proprietaire: 'Owner',
		gratuit: function() { throw 'not mapped yet!' },
		payant: function() { throw 'not mapped yet!' }
	},

	rent: {
		locationType: {
			hlm: function() { throw 'not mapped yet!' },
			nonmeuble: 'WithoutFurniture',
			meublehotel: 'WithFurniture'
		}
	},

	synonyms: {
		activity: {
			any:	[ 'salarie', 'auto_entrepreneur', 'apprenti', 'travailleur_saisonnier', 'stagiaire', 'independant', 'gerant_salarie' ],
			none:	[ 'sans_activite', 'etudiant', 'retraite', 'demandeur_emploi' ]
		}
	}
}

function getNoActivityTypeFor(requester) {
	if (requester.ressources.indexOf('bourseEnseignementSup') > -1)
		return 'ScholarshipStudent';
	if (requester.situationsPro.indexOf('etudiant') > -1)
		return 'Student';
	if (requester.situationsPro.indexOf('retraite') > -1)
		return 'Retired';
	if (requester.situationsPro.indexOf('demandeur_emploi') > -1)
		return 'Workless';

	// Never used:
	// 'StoppedWorkForSickness',
	// 'LongSickness',
	// 'Impaired',
	// 'Jailed',

	return 'Other';
}
