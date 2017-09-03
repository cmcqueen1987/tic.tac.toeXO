API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
 URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode '{
    "credentials": {
      "email": "'"${EMAIL}"'"
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
