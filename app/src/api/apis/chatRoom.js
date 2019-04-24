import $axios from '../http'

export const getChatList = payload => {
  return $axios({
    method: 'get',
    url: '/user/getUserList',
    payload
  })
}

export const fetchRoomMessage = payload => {
  return $axios({
    method: 'get',
    url: '/messages/getRoomMessage',
    payload
  })
}

export const insertRoomMessage = payload => {
  return $axios({
    method: 'post',
    url: '/messages/insertRoomMessage',
    payload
  })
}
