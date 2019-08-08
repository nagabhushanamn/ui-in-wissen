import { Injectable } from '@angular/core';
import { ItemService } from './item.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemsResolverService implements Resolve<any>{

  constructor(private itemService: ItemService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.itemService.getItems()
  }

}
