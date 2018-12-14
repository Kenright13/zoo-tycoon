export default LOCATIONS = [
    {
        name: 'Kansas City',
        zoo: {
          name: 'Kansas City Zoo',
          money: 0,
          cost: 5000,
          animalTypesAvailable: ['Bug', 'Forest', 'Plains'],
          animals: [
            {
              name: 'Ant',
              type: 'Bug',
              count: 0,
              price: 1,
              death: .0005,
              birth: .001,
              diet: {
                type: 'Herbivore'
              }
            }
          ]
        }
      },
      {
        name: 'Beijing',
        zoo: {
          name: 'Beijing Zoo',
          money: 0,
          cost: 1000000000,
          animalTypesAvailable: ['Bug', 'Jungle', 'Exotic'],
          animals: [
            {
              name: 'Ant',
              type: 'Bug',
              count: 0,
              price: 1,
              death: .0005,
              birth: .001,
              diet: {
                type: 'Herbivore'
              }
            }
          ]
        }
      }
]