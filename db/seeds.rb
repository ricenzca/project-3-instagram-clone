# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

50.times do
    password = Faker::Internet.password(8,20)
    User.create(
        email: Faker::Internet.email,
        password: '1234567',
        password_confirmation: '1234567'
    )
    puts "user created"
end

# Following relationships
# users = User.all
# user  = users.first
# following = users[2..50]
# followers = users[3..40]
# following.each { |followed| user.follow(followed) }
# followers.each { |follower| follower.follow(user) }

# Posts
Posts = Post.create([
  {url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1557127015/wubgh7ipdyfs1auwhh9e.jpg', user_id: '1'},{url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1557126646/y8hlyg8v1fy2bn8ag0wo.jpg', user_id: 1},{url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1556950595/ei3f7b2evgntrqifmfsm.jpg', user_id: 1},{url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1556950585/wc4plbipvzg5zxqkpekl.jpg', user_id: 1},{url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1556873051/blue_lake.jpg', user_id: 1}, {url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1556866699/sample.jpg', user_id: 1}])