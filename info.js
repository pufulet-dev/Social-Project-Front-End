// // let ENV_HOST;
// // // eslint-disable-next-line no-undef
// // switch (process.env.REACT_APP_ENV) {​​​​​
// //    case 'common':
// //         ENV_HOST = window.location.hostname;
// //     break;
// //     case 'uat':
// //         ENV_HOST = 'uatenhub2';
// //     break;
// //     case 'qa':
// //         ENV_HOST = 'qaenhub2';
// //     break;
// //     case 'dev':
// //         ENV_HOST = 'devenhub2';
// //     break;
// //     case 'prod':
// //         ENV_HOST = 'enhub2';
// //     break;
// //     default:
// //         ENV_HOST = 'localhost';
// //     }​​​​​
// // export default ENV_HOST;
 
// export const login = (credentials, enqueueSnackbar) => {​​​​​
//    return (dispatch) => {​​​​​
//       dispatch(loginStart());
// loginAxios
//          .post(
//             'oauth2-authorize-client',
// {​​​​​
//             userName: credentials.username,
//             userPassword: credentials.password,
// }​​​​​,
// {​​​​​
//                httpsAgent: new https.Agent({​​​​​ keepAlive: true }​​​​​),
// }​​​​​
//          )
//          .then((response) => {​​​​​
//             if (
//                response.data.errorMessage &&
//                response.data.errorMessage.includes('Registration successfully')
//             ) {​​​​​
//                enqueueSnackbar('Registration successfully', {​​​​​
//                   variant: 'success',
// }​​​​​);
// window.location.reload(true);
// }​​​​​ else {​​​​​
//                if (response.data.errorMessage) {​​​​​
//                   throw new Error(response.data.errorMessage);
// }​​​​​
//                const expirationDate = new Date(
//                   new Date().getTime() +
//                      response.data.responseObjects.oauth2AccessToken.expires_in * 1000
// );
// if (!response.data.responseObjects.oauth2AccessToken.access_token) {​​​​​
//                   throw new Error('missing token');
// }​​​​​
//                if (!response.data.responseObjects.roles) {​​​​​
//                   throw new Error('missing role');
// }​​​​​
//                if (credentials.rememberMe) {​​​​​
//                   localStorage.setItem(
//                      TOKEN_STORAGE,
// response.data.responseObjects.oauth2AccessToken.access_token
//                   );
// localStorage.setItem(
//                      REFRESH_TOKEN_STORAGE,
// response.data.responseObjects.oauth2AccessToken.refresh_token
//                   );
// localStorage.setItem(EXPIRATION_DATE_STORAGE, expirationDate);
// localStorage.setItem(USERNAME_STORAGE, credentials.username);
// localStorage.setItem(REMEMBER_ME, credentials.rememberMe);
// localStorage.setItem(ROLES, response.data.responseObjects.roles);
// }​​​​​ else {​​​​​
//                   sessionStorage.setItem(
//                      TOKEN_STORAGE,
// response.data.responseObjects.oauth2AccessToken.access_token
//                   );
// sessionStorage.setItem(
//                      REFRESH_TOKEN_STORAGE,
// response.data.responseObjects.oauth2AccessToken.refresh_token
//                   );
// sessionStorage.setItem(EXPIRATION_DATE_STORAGE, expirationDate);
// sessionStorage.setItem(USERNAME_STORAGE, credentials.username);
// sessionStorage.setItem(REMEMBER_ME, credentials.rememberMe);
// sessionStorage.setItem(ROLES, response.data.responseObjects.roles);
// }​​​​​
//                enqueueSnackbar(`Login Success! Hello, ${​​​​​credentials.username}​​​​​`, {​​​​​
//                   variant: 'success',
// }​​​​​);
// dispatch(
//                   loginSuccess({​​​​​
//                      rememberMe: credentials.rememberMe,
// user_roles: response.data.responseObjects.roles,
// username: credentials.username,
// }​​​​​)
//                );
// checkAuthTimeout(
//                   response.data.responseObjects.oauth2AccessToken.expires_in,
// credentials.rememberMe
// );
// }​​​​​
//          }​​​​​)
//          .catch((error) => {​​​​​
//             dispatch(loginFail(credentials.rememberMe));
// enqueueSnackbar(`Login fail, ${​​​​​error}​​​​​`, {​​​​​
//                variant: 'error',
// }​​​​​);
// }​​​​​);
// }​​​​​;
// }​​​​​;

 
useEffect(() => {​​​​​
   setLoading(true);
    axios('/admin/job/get-list-of-job-and-job-triggers', {​​​​​
        headers: {​​​​​ PAGE_NUMBER: page, PAGE_SIZE: rowsPerPage }​​​​​,
        params: {​​​​​
                onlyJobWithTriggers: jobTriggerOnly,
        }​​​​​,
    }​​​​​)
        .then((res) => {​​​​​
            setData(res.data.responseObjects.jobNames);
            setCount(res.data.responseObjects.pagination.totalItems);
    }​​​​​)
        .then(() => setLoading(false))
        .catch((error) => {​​​​​
            enqueueSnackbar(`Error: ${​​​​​error}​​​​​`, {​​​​​
            variant: 'error',
        }​​​​​);
    }​​​​​);
}​​​​​, [page, rowsPerPage, jobTriggerOnly, enqueueSnackbar, flag]);
