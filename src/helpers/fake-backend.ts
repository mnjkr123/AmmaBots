import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

type UserData = {
    id: number;
    email?: string;
    avatar?: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token: string;
};

const mock = new MockAdapter(axios); // Changed from var to const

export function configureFakeBackend() {
    const users: UserData[] = [
        // Changed from let to const
        {
            id: 1,
            email: 'prompt@coderthemes.com',
            username: 'test',
            password: 'test',
            firstName: 'Patricia',
            lastName: 'Hess',
            role: 'Admin',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI',
        },
    ];

    mock.onPost('/login/').reply(function (config) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                // get parameters from post request
                const params = JSON.parse(config.data); // Changed from let to const

                // find if any user matches login credentials
                const filteredUsers = users.filter((user) => {
                    // Changed from let to const
                    return user.email === params.email && user.password === params.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return user details and fake jwt token
                    const user = filteredUsers[0]; // Changed from let to const
                    resolve([200, user]);
                } else {
                    // else return error
                    resolve([401, { message: 'Username or password is incorrect' }]);
                }
            }, 1000);
        });
    });

    mock.onPost('/register/').reply(function (config) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                // get parameters from post request
                const params = JSON.parse(config.data); // Changed from let to const

                // add new users
                const [firstName, lastName] = params.fullname.split(' '); // Changed from let to const
                const newUser: UserData = {
                    // Changed from let to const
                    id: users.length + 1,
                    username: firstName,
                    password: params.password,
                    firstName: firstName,
                    lastName: lastName,
                    role: 'Admin',
                    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI',
                };
                users.push(newUser);

                resolve([200, newUser]);
            }, 1000);
        });
    });

    mock.onPost('/logout/').reply(200, { message: 'Logged Out Successfully' });

    mock.onPost('/forget-password/').reply(function (config) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                // get parameters from post request
                const params = JSON.parse(config.data); // Changed from let to const

                // find if any user matches login credentials
                const filteredUsers = users.filter((user) => {
                    // Changed from let to const
                    return user.email === params.email;
                });

                if (filteredUsers.length) {
                    // if login details are valid return user details and fake jwt token
                    const responseJson = {
                        // Changed from let to const
                        message: "We've sent you a link to reset password to your registered email.",
                    };
                    resolve([200, responseJson]);
                } else {
                    // else return error
                    resolve([
                        401,
                        {
                            message: 'Sorry, we could not find any registered user with entered username',
                        },
                    ]);
                }
            }, 1000);
        });
    });
}
