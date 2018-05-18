# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
City.destroy_all

atlanta = City.create!({name: 'Atlanta'})
san_franciso = City.create!({name: 'San Francisco'})
miami = City.create!({name: 'Miami'})
Post.create({title: 'This is a post', content: 'This is the content', city_id: atlanta.id})
Post.create({title: 'This is a post', content: 'This is the content', city_id: atlanta.id})
Post.create({title: 'This is a post', content: 'This is the content', city_id: san_franciso.id})
Post.create({title: 'This is a post', content: 'This is the content', city_id: san_franciso.id})
Post.create({title: 'This is a post', content: 'This is the content', city_id: miami.id})
Post.create({title: 'This is a post', content: 'This is the content', city_id: miami.id})

puts "Seeded data Success"