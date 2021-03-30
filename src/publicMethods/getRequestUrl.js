  /**
    *交互请求地址
    * @type {string}
    */
const getRequestUrl = (mockUrl, realUrl) => {
  const url = mockUrl;
  if(process.env.NODE_ENV === 'production') {
    url = realUrl;
  }
  return url;
}

export default getRequestUrl;


