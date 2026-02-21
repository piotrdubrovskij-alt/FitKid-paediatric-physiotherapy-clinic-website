#!/bin/bash
set -e

PORT=3004

# 1) dependencies
if [ ! -d "node_modules" ]; then
  npm install --legacy-peer-deps
fi

# 2) kill порт если занят
PID=$(lsof -ti tcp:$PORT || true)
if [ -n "$PID" ]; then
  kill -9 $PID || true
fi

# 3) run (с доступом из локальной сети)
npm run dev -- --port $PORT --hostname 0.0.0.0
