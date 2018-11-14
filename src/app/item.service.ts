import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Item } from './item';
import { ITEMS } from './mockItems';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ItemService: fetched items');
    return of(ITEMS);
  } 
  getItem(name: string): Observable<Item> {
    this.messageService.add(`ItemService: fetched item name=${name}`);
    return of(ITEMS.find(item => item.name === name));
  }
}