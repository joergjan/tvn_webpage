import { PRIVATE_MAIL_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(PRIVATE_MAIL_KEY);

export async function get(page: any) {
      const msg = {
        to: "info@tvnussbaumen.com",
        from: "contactform@tvnussbaumen.ch",
        subject: "Kontaktformular TVN Website",
        text: "",
        html: "<strong>testtest</strong>",
      };
      console.log("Form submitted");
      const output = await sgMail.send(msg);
  return {
    body: output,
  };
}