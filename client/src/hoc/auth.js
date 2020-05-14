import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //  option...
  //  null  => 아무나 출입이 가능한 페이지
  //  true  => 로그인한 유저만 출입이 가능한 페이지
  //  false => 로그인한 유저는 출입이 불가능한 페이지

  const dispatch = useDispatch();

  function AuthenticationCheck(props) {
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
        // 로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            // 어드민이아닌데(isAdmin=false), 어드민페이지에 접속하려고할때(adminRoute=true)
            props.history.push("/");
          } else {
            if (option === false) {
              // 로그인한유저 접속 막기
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
