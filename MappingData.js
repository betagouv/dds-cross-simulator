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
	}
}
