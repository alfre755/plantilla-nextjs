#!/bin/sh
set -e

TRY_LOOP="20"

: "${POSTGRES_HOST:="app_db"}"
: "${POSTGRES_PORT:="5432"}"

wait_for_port() {
  name="$1"
  host="$2"
  port="$3"
  j=0
  while ! nc -z "$host" "$port" >/dev/null 2>&1; do
    j=$((j+1))
    if [ $j -ge "$TRY_LOOP" ]; then
      echo >&2 "$(date) - $host:$port still not reachable, giving up"
      exit 1
    fi
    echo "$(date) - waiting for $name... $j/$TRY_LOOP"
    sleep 5
  done
}

echo "$POSTGRES_HOST" "$POSTGRES_PORT"
wait_for_port "Postgres" "$POSTGRES_HOST" "$POSTGRES_PORT"

cd /app
echo "Starting notifications app"

# Ejecutar el comando pasado como command: (desde docker-compose)
echo "Executing command: $@"
exec "$@"