import {HttpHeaders} from '@angular/common/http';

export const baseUrl = 'http://deckerchan.com/api';

  export const antiCheatingUrl = 'http://localhost:20009/api/Analysis';
export const headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*');

