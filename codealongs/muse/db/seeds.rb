# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Artist.destroy_all


rihanna = Artist.create(name: 'Rihanna')
nancy_and_lee = Artist.create(name: 'Nancy Sinatra & Lee Hazlewood')
the_replacement = Artist.create(name: 'The Replacements')
taylor_Swift = Artist.create(name: 'Taylor Swift')
oingo_Boingo = Artist.create(name: 'Oingo Boingo')

Song.create(artist_id: rihanna.id, title: 'Umbrella', genre: 'Pop')
Song.create(artist_id: nancy_and_lee.id, title: 'Summer Wine', genre: 'Pop')
Song.create(artist_id: the_replacement.id, title: 'I.O.U.', genre: 'Punk')
Song.create(artist_id: taylor_Swift.id , title: 'Out of the Woods', genre: 'Pop')
Song.create(artist_id: oingo_Boingo.id, title: "Dead Man's Party", genre: 'Oingo Boingo')