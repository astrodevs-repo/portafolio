import WhatsappAPI from "whatsapp-business-api";

const wp = new WhatsappAPI({
  accountPhoneNumberId: "<phone-number-id>", // required
  accessToken: "<access-token>", // required
});

await wp.sendTextMessage("<phone-number-to-send>", "<plain-message>");
