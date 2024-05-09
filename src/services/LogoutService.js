import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setIsAuthenticated, setUserRole, setUserId, setLoginTime } from '../store/loginSlice'

function LogoutService() {
    const dispatch = useDispatch()
    const role=useSelector(state=>state.loginSlice.role);
    dispatch(setIsAuthenticated(false));
    dispatch(setUserRole(""));
    dispatch(setUserId(""));
    dispatch(setLoginTime(null));

  return (
    role==="user" ? window.location.href = "/user/login" : window.location.href = "/admin/login"
  )
}

export default LogoutService