API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
 URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"
echo
