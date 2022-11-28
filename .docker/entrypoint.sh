#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env .env
fi

npm install

npm start