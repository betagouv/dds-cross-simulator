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
