let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://www.zohoapis.com/crm/v3/Maquinas/upsert",
  headers: {
    Authorization:
      "Zoho-oauthtoken 1000.63b625fbcc9c8e52bd24000fbbc54a46.a7103b8075aac9ce5675b05ea36bf6e7",
    "Content-Type": "application/json",
    Cookie:
      "1a99390653=5e5fe628d7b2d0b8b6ba5ce4ffecdb6a; JSESSIONID=AABCE650224C84E03D5007683BA436E1; _zcsr_tmp=23ebc599-9da0-41b8-88c8-58dd2c461d7a; crmcsr=23ebc599-9da0-41b8-88c8-58dd2c461d7a; group_name=usergroup1",
  }
};

module.exports = config
