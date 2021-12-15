export const UserEmailCheck = (email) => {
  let _reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

  return _reg.test(email);
};

export const IdCheck = (id) => {
  let _reg = /^[a-zA-Z0-9]/;

  return _reg.test(id);
};

export const UserNameCheck = (nick) => {
  let _reg = /^[가-힣a-zA-Z0-9]/;

  return _reg.test(nick);
};

export const pwdCheck = (pwd) => {
  let _reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]/;

  return _reg.test(pwd);
};
