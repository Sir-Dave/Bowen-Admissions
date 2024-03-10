const BASE_URL = "https://bhubapi.bowen.edu.ng/api/v1/ugadmissions";
const SIGN_IN = "/applicant/login"
const SIGN_UP = "/applicant/register"
const STAFF_SIGN_IN = "staff/login"

async function loginUser(email: string, password: string): Promise<SignInResponse> {
    const request: SignInRequest = { email, password };
    const response = await fetch(SIGN_IN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });
    const data = await response.json();
    return data;
}

async function registerUser(
    firstName: string,
    surname: string,
    email: string,
    phoneNo: string,
    countryCode: string,
    password: string,
    code: number,
): Promise<RegisterResponse> {
    const request: RegisterRequest = { firstName, surname, email,
        phoneNo, countryCode, password, code
    };
    const response = await fetch(SIGN_UP, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });
    const data = await response.json();
    return data;
}

async function staffLogin(email: string, password: string): Promise<SignInResponse> {
    const request: StaffLoginRequest = { login: email, password };
    const response = await fetch(STAFF_SIGN_IN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });
    const data = await response.json();
    return data;
}