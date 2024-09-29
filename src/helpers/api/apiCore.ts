import jwtDecode from 'jwt-decode';
import axios from 'axios';

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';

// intercepting to capture errors
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        let message;

        if (!error.response) {
            message = 'Network error. Please try again later.';
            return Promise.reject(message);
        }

        switch (error.response.status) {
            case 401:
                message = 'Invalid credentials';
                break;
            case 403:
                message = 'Access Forbidden';
                window.location.href = '/access-denied';
                break;
            case 404:
                message = 'Sorry! the data you are looking for could not be found';
                break;
            default:
                message =
                    error.response && error.response.data ? error.response.data['message'] : error.message || error;
        }
        return Promise.reject(message);
    }
);

const AUTH_SESSION_KEY = 'shield_user';

const setAuthorization = (token: string | null) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const getUserFromSessionStorage = () => {
    if (typeof window !== 'undefined') {
        const user = sessionStorage.getItem(AUTH_SESSION_KEY);
        return user ? JSON.parse(user) : null;
    }
    return null;
};

class APICore {
    // Other methods...

    create(url: string, data: any) {
        return axios.post(url, data);
    }

    isUserAuthenticated = () => {
        const user = this.getLoggedInUser();
        if (!user) {
            return false;
        }
        const decoded: any = jwtDecode(user.token);
        const currentTime = Date.now() / 1000;
        return decoded.exp >= currentTime;
    };

    setLoggedInUser = (session: any) => {
        if (session) {
            if (typeof window !== 'undefined') {
                sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
            }
        } else {
            if (typeof window !== 'undefined') {
                sessionStorage.removeItem(AUTH_SESSION_KEY);
            }
        }
    };

    getLoggedInUser = () => {
        return getUserFromSessionStorage();
    };

    getLoggedInUserEmail = () => {
        const user = this.getLoggedInUser();
        return user ? user.email : null;
    };

    setUserInSession = (modifiedUser: any) => {
        let userInfo = getUserFromSessionStorage();
        if (userInfo) {
            const { token, user } = userInfo;
            this.setLoggedInUser({ token, ...user, ...modifiedUser });
        }
    };
}

let user = getUserFromSessionStorage();
if (user) {
    const { token } = user;
    if (token) {
        setAuthorization(token);
    }
}

export { APICore, setAuthorization };
