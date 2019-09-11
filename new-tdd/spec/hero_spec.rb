require_relative "../config/environment.rb"

describe "Hero Class" do

  before(:all) do

    @iron_man = Hero.create(name: "Iron Man", ability: "Being rich", power_level: 50)
  end

  after(:all) do
    @iron_man.destroy
  end
  it "can train to increase power level" do

    @iron_man.train(1)
    expect(@iron_man.power_level).to eq(52)
    expect(@iron_man.power_level).to be_a(Integer)
  end

  it "ranks all heroes in order of power level" do
    spiderman = Hero.create(name:"Spider-Man", ability:"Millennial", power_level: 25)
    expect(Hero.ranked_heroes.first).to eq(@iron_man)
    expect(Hero.ranked_heroes.last).to eq(spiderman)
    spiderman.destroy
  end

  it "finds the strongest hero by power level" do
    spiderman = Hero.create(name:"Spider-Man", ability:"Millennial", power_level: 25)
    expect(Hero.find_strongest).to eq(@iron_man)
    spiderman.destroy
  end

  it "says its name" do
    hulk = Hero.new(name: "Hulk", ability:"Hangry", power_level: 9001)
    spiderman = Hero.new(name:"Spider-Man", ability:"Millennial", power_level: 25)

    expect(hulk.say_name).to eq("My name is Hulk!")
    expect(spiderman.say_name).to eq("My name is Spider-Man!")
  end


end
