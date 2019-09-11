# how all your data should be loaded into your app
Villain.destroy_all
Hero.destroy_all

10.times do
  Hero.create(name: Faker::DcComics.unique.heroine,
    ability: Faker::Superhero.power,
    power_level: rand(100...9001)
  )
end

15.times do
  Villain.create(name: Faker::DcComics.unique.villain,
    ability: Faker::Superhero.power,
    power_level: rand(100...9000),
    hero: Hero.all.sample
  )
end
