import instance from './request'

export const querylogin =(params)=>instance.post('lejuAdmin/index/login',params)
export const aside =()=>instance.get('admin/sysAuth/index/getInitMenus')