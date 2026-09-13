export const siteUrl = "https://golddigi.com";

export const siteContact = {
  email: "apurv@golddigi.com",
  phone: "+91 74109 98149",
  whatsappNumber: "917410998149",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteContact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
