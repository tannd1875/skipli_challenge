export function VerifyPhoneOnText(phone) {
  return !isNaN(phone);
}

export function VerifyCode(code, server_code) {
  return code === server_code;
}
