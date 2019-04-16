import $axios from '../http';

export const getChatList = payload => {
  return $axios({
    method: 'get',
    url: '/user/getUserList',
    payload
  });
};
