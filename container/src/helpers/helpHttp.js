export const helpHttp = () => {
  constcustomFetch = (endpoint, options) => {
    constdefaultHeaders = {
      accept: "application/json",
    };
    constcontroller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.header = options.header
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body; // console.log(options);setTimeout(()=> controller.abort(),3000);returnfetch(endpoint,options).then((res)=>res.ok? res.json():
    Promise.reject({
      err: true,
      status: res.status || "00",
      statusText: res.statusText || "Ocurrio un error",
    }).catch((err) => err);
  };
  constget = (url, options = {}) => customFetch(url, options);
  constpost = (url, options = {}) => {
    options.method = "POST";
    returncustomFetch(url, options);
  };
  constput = (url, options = {}) => {
    options.method = "PUT";
    returncustomFetch(url, options);
  };
  constdel = (url, options = {}) => {
    options.method = "DELETE";
    returncustomFetch(url, options);
  };
  constpatch = (url, options = {}) => {
    options.method = "PATCH";
    returncustomFetch(url, options);
  };
  return { get, post, put, del, patch };
};
