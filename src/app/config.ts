import { HttpHeaders } from '@angular/common/http';

export const recordUrl = 'http://deckerchan.com/api/access';
export const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

