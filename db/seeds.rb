# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.create([
      {
        name: 'GA',
        username: 'GA',
        website: 'https://generalassemb.ly/',
        email: 'hello@ga.com',
        password: '123ewq',
        password_confirmation: '123ewq',
        admin: true
      },
      {
        name: 'doggoMemes',
        username: 'doggoMemes',
        website: 'https://doggoMemes.com/',
        email: 'doggoMemes@ga.com',
        password: '123ewq',
        password_confirmation: '123ewq',
        admin: true
      },
      {
        name: 'landscapePix',
        username: 'landscapePix',
        website: 'https://landscapePix.com/',
        email: 'landscapePix@ga.com',
        password: '123ewq',
        password_confirmation: '123ewq',
        admin: true
      },
      {
        name: 'FoodieDream',
        username: 'FoodieDream',
        website: 'https://FoodieDream.com/',
        email: 'FoodieDream@ga.com',
        password: '123ewq',
        password_confirmation: '123ewq',
        admin: true
      }
    ])

10.times do
    name  = Faker::Name.name
    password = Faker::Internet.password(8,20)
    User.create(
        name:  name,
        username: Faker::Internet.username(5..8),
        website: Faker::Internet.domain_name,
        email: Faker::Internet.email,
        password: '1234567',
        password_confirmation: '1234567'
    )
    puts "user created"
end

# Following relationships
users = User.all
user  = users.first
following = users[2..10]
followers = users[3..10]
following.each { |followed| user.follow(followed) }
followers.each { |follower| follower.follow(user) }

# Posts
# Posts = Post.create([
#   {url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1557127015/wubgh7ipdyfs1auwhh9e.jpg', user_id: '1'},{url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1557126646/y8hlyg8v1fy2bn8ag0wo.jpg', user_id: 1},{url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1556950595/ei3f7b2evgntrqifmfsm.jpg', user_id: 1},{url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1556950585/wc4plbipvzg5zxqkpekl.jpg', user_id: 1},{url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1556873051/blue_lake.jpg', user_id: 1}, {url: 'https://res.cloudinary.com/dvaat1mxu/image/upload/v1556866699/sample.jpg', user_id: 1}])

Posts = Post.create([
  {media_type: 'image', public_id: 'g3smxzn5i920moq9vr4c', user_id: '1'},
  {media_type: 'image', public_id: 'cv6b9nshsn1iu7wtpkw0', user_id: '1'},
  {media_type: 'image', public_id: 'kfwnuzqjvludurp2xuhr', user_id: '1'},
  {media_type: 'image', public_id: 'mhbzbkeg0dnqhj7un79y', user_id: '1'},
  {media_type: 'image', public_id: 'dzswxgf73ctbrdy8adik', user_id: '1'},
  {media_type: 'image', public_id: 'dnsprhnn5stnyorapsag', user_id: '1'},
  {media_type: 'image', public_id: 'sxnsqd4cjhzuvfsydv68', user_id: '2'},
  {media_type: 'image', public_id: 'mtzowsbe8qvzajlbcmco', user_id: '2'},
  {media_type: 'image', public_id: 'yvj46zvdxhwcmpaoi984', user_id: '2'},
  {media_type: 'image', public_id: 'thqw7yexvdn3iqmycwgn', user_id: '2'},
  {media_type: 'image', public_id: 'o0wavhq6tphm29npnzgj', user_id: '3'},
  {media_type: 'image', public_id: 's5esin0b38a2mrxpy4it', user_id: '3'},
  {media_type: 'image', public_id: 'siu5jitquunwd8ei4xzd', user_id: '3'},
  {media_type: 'image', public_id: 'sny2k7yxi1xd8kunjeyr', user_id: '3'},
  {media_type: 'image', public_id: 'ffumoit3s4bmoaogqtxa', user_id: '4'},
  {media_type: 'image', public_id: 'ldlwjjoq2imfziqj9jhk', user_id: '4'},
  {media_type: 'image', public_id: 'emyctakfr2h8mc04pdz1', user_id: '4'},
  {media_type: 'image', public_id: 'ip765w2ajpjcs7pj6lrx', user_id: '4'},
  {media_type: 'image', public_id: 'bm2zq6nmow3onigu7o4f', user_id: '4'},
  {media_type: 'video', public_id: 'gxwcefgst3jpy1ebsggd', user_id: '1'}
])

Likes = Like.create([
  {post_id: 6, user_id: 1},
  {post_id: 6, user_id: 2},
  {post_id: 6, user_id: 3},
  {post_id: 6, user_id: 4},
  {post_id: 6, user_id: 5},
  {post_id: 5, user_id: 2},
  {post_id: 5, user_id: 3},
  {post_id: 5, user_id: 4},
  {post_id: 5, user_id: 5},
  {post_id: 1, user_id: 1}
])