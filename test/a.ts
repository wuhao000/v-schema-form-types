import {EffectsContext} from '../types/form';

class A {
  public schema = {
    fields: {
      name: {
        type: 'string'
      },
      detail: {
        type: 'object',
        age: {
          type: 'string'
        }
      }
    }
  };


  public effects($: EffectsContext) {
    $('name', 'detail.age');
  }
}
