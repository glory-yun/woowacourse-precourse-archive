#!/bin/bash
# ===================================================
# 🚀 Woowa 자동 실행 스크립트 (백엔드 + 프론트엔드)
# 구조: backend/open-mission + frontend/
# ===================================================

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND_DIR="$BASE_DIR/backend/open-mission"
FRONTEND_DIR="$BASE_DIR/frontend"
LOGIN_HTML_PATH="$FRONTEND_DIR/Pages/user/login.html"

echo "📁 프로젝트 ROOT: $BASE_DIR"
echo "📁 백엔드 디렉토리: $BACKEND_DIR"

# =============================
# [1] MySQL 확인 및 실행
# =============================
if ! command -v mysql &> /dev/null
then
    echo "⚠️ MySQL이 설치되어 있지 않습니다. 설치를 시작합니다..."
    brew update
    brew install mysql
else
    echo "✅ MySQL 이미 설치됨"
fi

echo "🚀 MySQL 실행 중..."
brew services start mysql

# =============================
# [2] MySQL 계정 입력
# =============================
read -p "MySQL 사용자 이름 (기본 root): " MYSQL_USER
MYSQL_USER=${MYSQL_USER:-root}
read -s -p "MySQL 비밀번호(없으면 엔터): " MYSQL_PW
echo ""

execute_mysql() {
    if [ -z "$MYSQL_PW" ]; then
        mysql -u"$MYSQL_USER" -e "$1"
    else
        mysql -u"$MYSQL_USER" -p"$MYSQL_PW" -e "$1"
    fi
}

query_mysql() {
    if [ -z "$MYSQL_PW" ]; then
        mysql -u"$MYSQL_USER" -sse "$1"
    else
        mysql -u"$MYSQL_USER" -p"$MYSQL_PW" -sse "$1"
    fi
}

# =============================
# [3] DB 생성 확인
# =============================
DB_EXISTS=$(query_mysql "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME='memoirdb'")
if [ "$DB_EXISTS" == "memoirdb" ]; then
    echo "✅ memoirdb 이미 존재"
else
    echo "📦 memoirdb 생성 중..."
    execute_mysql "CREATE DATABASE memoirdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
fi

export DB_USERNAME="$MYSQL_USER"
export DB_PASSWORD="$MYSQL_PW"

# =============================
# [4] Spring Boot 빌드 및 실행
# =============================
cd "$BACKEND_DIR" || exit

if [ -f "./gradlew" ]; then
    chmod +x gradlew
    ./gradlew clean build -x test
else
    gradle clean build -x test
fi

JAR_FILE=$(find ./build/libs -name "*.jar" ! -name "*plain.jar" | head -n 1)
if [ -z "$JAR_FILE" ]; then
    echo "❌ 실행할 JAR 파일을 찾을 수 없습니다!"
    exit 1
fi

echo "🚀 백엔드 실행 중..."
# 백엔드를 백그라운드로 실행
(java -jar "$JAR_FILE" >/dev/null 2>&1 &) &
BACK_PID=$!
sleep 5


# =============================
# [5] Frontend 서버 실행
# =============================
cd "$(dirname "$BASE_DIR")" || exit

PORT=5500
PROJECT_NAME=$(basename "$BASE_DIR")

echo "🌍 프론트엔드 서버 실행 (포트 $PORT)..."
npx http-server "$FRONTEND_DIR" -p "$PORT" -c-1 --no-dotfiles --no-rewrite >/dev/null 2>&1 &
FRONT_PID=$!
sleep 5


# =============================
# [6] login.html 자동 열기
# =============================
URL="http://localhost:${PORT}/${PROJECT_NAME}/frontend/Pages/user/login.html"
echo "🌐 브라우저 열기: $URL"

if command -v python3 &> /dev/null; then
  python3 -m webbrowser "$URL"
else
  open "$URL"
fi

echo ""
echo "✅ 모든 서비스가 백그라운드에서 실행 중입니다!"
echo "🧩 백엔드 PID: $BACK_PID"
echo "🧩 프론트엔드 PID: $FRONT_PID"
echo ""
echo "💡 서버를 종료하려면 아래 명령어를 직접 실행하세요:"
echo "   kill $BACK_PID $FRONT_PID"
echo ""
echo "🔥 또는 모든 Node/Java 프로세스를 종료하려면:"
echo "   killall java node"