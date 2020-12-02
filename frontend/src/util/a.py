import requests

res = requests.get('https://us.api.blizzard.com/data/wow/quest/area/?namespace=static-9.0.2_36532-us&access_token=USIlYqob3dGaYeMgrK6QAaPdWHyBWO0Tzb')


print('const catalog = [')
areas = [{i['name']['pt_BR']: i['key']['href']} for i in res.json()['areas']]

for i in areas:
    print(i)

print(']')
