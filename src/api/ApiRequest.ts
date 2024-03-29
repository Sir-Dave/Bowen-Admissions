import axios from "axios";
import { toast } from "react-toastify";
import { RegisterRequest, SignInRequest, StaffLoginRequest } from "../dtos/auth/AuthRequestDto";
import { RegisterResponse, SignInResponse } from "../dtos/auth/AuthResponseDto";
import { UserResponse } from "../dtos/user/UserDto";
import { ApplicationFormResponse } from "../dtos/applicant/ApplicationFormResponse";
import { ContactPersonResponse } from "../dtos/applicant/ContactPersonResponse";
import { SessionResponse } from "../dtos/applicant/SessionResponseDto";

const BASE_URL = "https://bhubapi.bowen.edu.ng/api/v1/ugadmissions";
const SIGN_IN = "/applicant/login"
const SIGN_UP = "/applicant/register"
const STAFF_SIGN_IN = "/staff/login"
const APPLICANT_PROFILE = "/applicant/profile"
const CURRENT_SESSION = "/session/current"
const CONTACT_PERSONS = "/contact/persons"
const APPLICANT_FORM = "/applicant/form/current"

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export const login = async (email: string, password: string) => {
    const request: SignInRequest = { email, password };
    const body = JSON.stringify(request);
    try {
        const data = await api.post<SignInResponse>(SIGN_IN, body);
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const register = async (
    firstName: string,
    surname: string,
    email: string,
    phoneNo: string,
    countryCode: string,
    password: string,
    code: number
) => {
    const request: RegisterRequest = {
        firstName, surname, email,
        phoneNo, countryCode, password, code
    };

    const body = JSON.stringify(request);
    try {
        const data = await api.post<RegisterResponse>(SIGN_UP, body);
        return data;

    } catch (error) {
        handleError(error)

    }
}

export const getApplicantProfile = async () => {
    try {
        const data = await api.get<UserResponse>(APPLICANT_PROFILE);
        return data;

    } catch (error) {
        handleError(error);
    }
}

export const getCurrentApplicationForm = async () => {
    try {
        const data = await api.get<ApplicationFormResponse>(APPLICANT_FORM);
        return data;

    } catch (error) {
        handleError(error);
    }
}

export const getContactPersons = async () => {
    try {
        const data = await api.get<ContactPersonResponse>(CONTACT_PERSONS);
        return data;

    } catch (error) {
        handleError(error);
    }
}

export const getCurrentSession = async () => {
    try {
        const data = await api.get<SessionResponse>(CURRENT_SESSION);
        return data;

    } catch (error) {
        handleError(error);
    }
}

export const staffLogin = async (email: string, password: string) => {
    const request: StaffLoginRequest = { login: email, password };
    const body = JSON.stringify(request);
    try {
        const data = await api.post<SignInResponse>(STAFF_SIGN_IN, body);
        return data;

    } catch (error) {
        handleError(error);
    }
}

export const handleError = (error: any) => {
    console.log("error is " + error)
    if (axios.isAxiosError(error)) {
        var err = error.response
        if (Array.isArray(err?.data.errors)) {
            for (let val of err?.data.errors) {
                toast.warning(val.description)

            }
        }
        else if (typeof err?.data.errors === 'object') {
            for (let e in err?.data.errors) {
                toast.warning(err.data.errors[e][0]);
            }
        }

        else if (err?.data) {
            toast.warning(err?.data)
        }

        else if (err?.status === 401) {
            toast.warning("Please login to continue")
            window.history.pushState({}, "Sign In", "/sign-in")
        }

        else if (err) {
            toast.warning(err?.data)
        }
    }
}