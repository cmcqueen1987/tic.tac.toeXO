curl "http://tic-tac-toe.wdibos.com" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=$EMAIL" \
  --data-urlencode "credentials[password]=$PASSWORD" \
  --data-urlencode "credentials[password_confirmation]=$PASSWORD"
