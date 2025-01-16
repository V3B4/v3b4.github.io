import json
from ftplib import FTP


def main():

    # FTP接続
    FTP.encoding = "utf-8"
    FTP.maxline = 100000000
    ftp = FTP('', '', '')
    kinds = ftp.nlst("public_html/PhotosDB")

    json_dict = {}
    album_id = 200

    # 種類ごとにループ
    for kind in kinds[2:]:
        albums = ftp.nlst(kind)
        albums.sort()
        for album in albums[2:]:
            # キーワードとアルバム名(タイトルを取得)
            key = ' '.join(album.split('/')[2:])
            album_name = album.split('/')[3]
            # 写真一覧を取得
            photos = ftp.nlst(album)
            if len(photos) == 2:
                continue
            photos.sort()
            album_list = [{'src': 'https://' + photos[2].replace('public_html/', ''), 'title': album_name, 'ID': album_id, 'kind': 'album'}]
            # 写真を追加
            for photo in photos[2:]:
                album_list.append({'src': 'https://' + photo.replace('public_html/', ''), 'title': album_name, 'albumID': album_id})

            # アルバムに追加
            json_dict.update({key: album_list})
            album_id += 1
            
    with open('db.json', 'w', encoding='utf-8') as f:
        json.dump(json_dict, f, ensure_ascii=False)

    with open('db.json', 'rb') as f:
        ftp.storlines('STOR /public_html/PhotosDB/db.json', f)

if __name__ == "__main__":
    main()
