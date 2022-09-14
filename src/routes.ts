import { Products } from "./components/products/products/products";
interface Route {
  path: string;
  component: Function;
}
type Routes = Route[];

export const routes: Routes = [{ path: "/", component: Products }];
