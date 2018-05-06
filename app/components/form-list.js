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
  itemAt: computed( {
    set(key, value) {
      return this.get('list').objectAt(value);
    }
  }),
  actions: {
    movedItem(item, formerPosition, newPosition) {
      this.set('itemAt', newPosition-1);
      let itemBefore = this.get('itemAt').position;
      this.set('itemAt', newPosition);
      let itemAfter = this.get('itemAt').position;
      let diffItems = itemAfter - itemBefore;
      let average = itemBefore + Math.floor(diffItems/2);
      console.log('itemBefore ' + itemBefore);
      console.log('itemAfter ' + itemAfter);
      console.log('diffItems ' + diffItems);
      console.log(average);
      if(diffItems >= 2) {
        console.log('again');
        set(item, 'position', average);
      } else if (this.get('arrayLength')/newPosition >= 2) {
        /*уменьшить те, что до нуля*/
        console.log('hi');
        set(item, 'position', itemBefore - 1);
        for(let i = newPosition-1; i >= 0; i--) {
          this.set('itemAt', i);
          let itemCurrent = this.get('itemAt');
          this.set('itemAt', i+1);
          let positionValue = this.get('itemAt').position - this.get('arrayLength');
          set(itemCurrent, 'position', positionValue);
        }
      } else {
        /*увеличить до конца*/
        console.log('bye');
        for(let i = newPosition+1; i < length; i++) {
          this.set('itemAt', i);
          let itemCurrent = this.get('itemAt');
          this.set('itemAt', i+1);
          let positionValue = this.get('itemAt').position + this.get('arrayLength');
          set(itemCurrent, 'position', positionValue);
        }
      }
    }
  }
});
