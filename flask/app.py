import os
from flask import Flask, render_template
from flask_cors import CORS
from flask_mysqldb import MySQL

# .env 환경 변수 사용
# from dotenv import load_dotenv

# load_dotenv()

# flask 객체 인스턴스 생섯
app = Flask(__name__)
CORS(app)
mysql = MySQL(app)

app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')



# 접속 url 설정
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return 'about 페이지 입니다'




if __name__ == '__main__':
    # 코드 수정시 자동 반영

    app.run(debug=True)
    print("adsf")
    print("adsfsdfa")