import Component from '@ember/component';
import { computed, set } from '@ember/object';

export default Component.extend({
  list: computed(function() {
    return [
      {
        title: "Sun", 
        position: 0
      },
      {
        title: "Mercury", 
        position: 1
      },
      {
        title: "Venus", 
        position: 2
      },
      {
        title: "Earth", 
        position: 3
      },
      {
        title: "Mars", 
        position: 5
      },
      {
        title: "Jupiter", 
        position: 8
      },
      {
        title: "Saturn", 
        position: 13
      },
      {
        title: "Uranus", 
        position: 21
      },
      {
        title: "Neptune", 
        position: 34
      },
      {
        title: "Pluto", 
        position: 55
      }
    ];
  }),
  arrayLength: computed(function() {
    return this.get('list').length;
  }),
  actions: {
    movedItem(item, formerPosition, newPosition) {
      let itemBefore = this.get('list').objectAt(newPosition-1).position;
      let itemAfter = this.get('list').objectAt(newPosition).position;
      let diffItems = itemAfter - itemBefore;
      let average = itemBefore + Math.floor(diffItems/2);
      if(diffItems >= 2) {
        set(item, 'position', average);
      } else if (this.get('arrayLength')/newPosition >= 2) {
        set(item, 'position', itemBefore - 1);
        for(let i = newPosition-1; i >= 0; i--) {
          let itemCurrent = this.get('list').objectAt(i);
          let positionValue = this.get('list').objectAt(i+1).position - this.get('arrayLength');
          set(itemCurrent, 'position', positionValue);
        }
      } else {
        set(item, 'position', itemBefore - 1);
        for(let i = newPosition+1; i < length; i++) {
          let itemCurrent = this.get('list').objectAt(i);
          let positionValue = this.get('list').objectAt(i+1).position + this.get('arrayLength');
          set(itemCurrent, 'position', positionValue);
        }
      }
    }
  }
});
