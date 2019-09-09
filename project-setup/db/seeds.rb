# how all your data should be loaded into your app
Card.destroy_all
Deck.destroy_all
deck = Deck.create(name: "test")
(1..52).each do |number|
  Card.create(rank: number, suit: "spades", deck_id: deck.id)
end
