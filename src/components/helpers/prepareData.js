
export default function(store, route) {
  const { pathname } = route;

  if (route.prepareData)
    return route.prepareData(store, pathname);
}