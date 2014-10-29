/** Formats a date in ISO format in French format.
*
*@param		{String}	isoDate
*@returns	{String}	date
*/
function formatBirthDate(isoDate) {
	return	isoDate.split('T')[0]
					.split('-')
					.reverse()
					.join('/');
}
