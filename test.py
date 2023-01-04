import requests

download_url = "https://coolvrdude.github.io/enmity/plugins/TwitterNoTracking.js"
r = requests.get(download_url)
print(r.text)