export const ObjectToQueryString = (baseUrl: string, object: any): string => {
  let queryString = Object.entries(object)
    .map((s:any) => s[1].map((e:any) => `${s[0]}=${e.id}`))
    .flat()
    .join("&");
  return (baseUrl += "?" + queryString);
};
