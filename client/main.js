
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import  './main.html';

// Global access


if ( Meteor.isServer )
{
	Meteor.startup
	(
		function ()
		{
			// Populate once
			if ( !films.find().count() )
			{
				films.insert( { name : "Rambo rocket", year : "2015"} );
			}
		}
	);
}

if ( Meteor.isClient )
{

	// Helpers
	Template.filmographie.helpers
	(
		{
			all_films : function ()
			{
				return films.find().map
				(
					function( films, index, cursor )
					{
						return { name : films.name, year : films.year };
					}
				);
			}
		}
	);

	// Events
	Template.filmographie.events
	( {
		'click #submit_film' : function( event, template )
		{
			event.preventDefault();
			var $name = template.find( "#name" );
			var $year = template.find( "#year" );

			if( $name.value !== "" && $year.value !== "" ){

				films.insert( { name : $name.value , year : $year.value } );
			}
		}
	} );
}
