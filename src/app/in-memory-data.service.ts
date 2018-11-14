import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { _id: 11, name: 'Mr. Nice', description: "nice guy" },
      { _id: 12, name: 'Narco', description: "nice guy" },
      { _id: 13, name: 'Bombasto', description: "nice guy" },
      { _id: 14, name: 'Celeritas', description: "nice guy" },
      { _id: 15, name: 'Magneta', description: "nice guy" },
      { _id: 16, name: 'RubberMan', description: "nice guy" },
      { _id: 17, name: 'Dynama', description: "nice guy" },
      { _id: 18, name: 'Dr IQ', description: "nice guy" },
      { _id: 19, name: 'Magma', description: "nice guy" },
      { _id: 20, name: 'Tornado', description: "nice guy" }
    ];
    return {items};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(items: Item[]): string {
  //   return items.length > 0 ? Math.max(...items.map(item => item._id)) + 1 : 11;
  // }
}