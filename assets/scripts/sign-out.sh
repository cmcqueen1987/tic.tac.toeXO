API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
 URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"
echo
