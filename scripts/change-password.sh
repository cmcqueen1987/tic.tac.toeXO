#API="${API_ORIGIN:-http://httpbin.org}"
#URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-hhttps://aqueous-atoll-85096.herokuapp.com/}"
URL_PATH="change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode '{
    "credentials" {
    }
  }'

echo
