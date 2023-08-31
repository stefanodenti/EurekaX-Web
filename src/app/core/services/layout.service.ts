import {Injectable, signal} from '@angular/core';
import {Layout} from "../models/config.model";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  layouts = signal<Layout[]>([]);
  standardLayout = signal<Layout | null>(null);
  dashboardLayout = signal<Layout | null>(null);

  constructor() {}

  setLayouts(layouts: Layout[]) {
    this.layouts.set(layouts);
    this.standardLayout.set(layouts?.find(layout => layout.name === 'standard') ?? null);
    this.dashboardLayout.set(layouts?.find(layout => layout.name === 'dashboard') ?? null);
  }
}
