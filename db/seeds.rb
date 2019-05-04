# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

10.times do
    password = Faker::Internet.password(8,20)
    User.create(
        email: Faker::Internet.email,
        password: password,
        password_confirmation: password
    )
    puts "user created"
end

# User.create 10 do |user|
#   user.email = Faker::Internet.email,
#   user.encrypted_password = User.new(:password => password).encrypted_password
#   # rest of your code here
# end