import Component from '@ember/component';

export default Component.extend({
  list: [
    {
      title: "Sun", 
      position: 0,
      priority: ''
    },
    {
      title: "Mercury", 
      position: 1,
      priority: ''
    },
    {
      title: "Venus", 
      position: 2,
      priority: ''
    },
    {
      title: "Earth", 
      position: 3,
      priority: ''
    },
    {
      title: "Mars", 
      position: 5,
      priority: ''
    },
    {
      title: "Jupiter", 
      position: 8,
      priority: ''
    },
    {
      title: "Saturn", 
      position: 13,
      priority: ''
    },
    {
      title: "Uranus", 
      position: 21,
      priority: ''
    },
    {
      title: "Neptune", 
      position: 34,
      priority: ''
    },
    {
      title: "Pluto", 
      position: 55,
      priority: ''
    }
  ],
  actions: {
    movedItem(item, formerPosition, newPosition) {
    }
  }
});
