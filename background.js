function buildQuery(obj) {
  var query = [];
  for (key in obj) {
    query.push(`${key}=${encodeURIComponent(obj[key])}`);
  }
  return query.join('&');
}

chrome.browserAction.onClicked.addListener(tab => {
  [
    yuyushiki => `http://seiga.nicovideo.jp/tag/${encodeURIComponent(yuyushiki)}?${buildQuery({'sort': 'comment_created'})}`,
    yuyushiki => `https://www.google.co.jp/search?${buildQuery({ 'q': yuyushiki, 'tbm': 'isch' })}`
  ].forEach(buildURL => chrome.tabs.create({ url: buildURL('ゆゆ式') }));
});
