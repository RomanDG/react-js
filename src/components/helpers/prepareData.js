import { parse } from 'qs';

export default function(store, state) {
  const { location, route } = state;
  
  if (route.prepareData)
    return route.prepareData(store, location);
}