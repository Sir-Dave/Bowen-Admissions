import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://bhubapi.bowen.edu.ng/api/v1/ugadmissions";
const SIGN_IN = "/applicant/login"
const SIGN_UP = "/applicant/register"
const STAFF_SIGN_IN = "staff/login"

export const loginUser = async (email: string, password: string) => {
    const request: SignInRequest = { email, password };
    const body = JSON.stringify(request);
    try {
        const data = await axios.post<SignInResponse> (BASE_URL + SIGN_IN, body);
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const registerUser = async(
    firstName: string,
    surname: string,
    email: string,
    phoneNo: string,
    countryCode: string,
    password: string,
    code: number,
) => {
    const request: RegisterRequest = { firstName, surname, email,
        phoneNo, countryCode, password, code
    };

    const body = JSON.stringify(request);
    try {
        const data = await axios.post<RegisterResponse>(BASE_URL + SIGN_UP, body);
        return data;
        
    } catch (error) {
        handleError(error)
        
    }
}

export const staffLogin = async (email: string, password: string) => {
    const request: StaffLoginRequest = { login: email, password };
    const body = JSON.stringify(request);
    try {
        const data = await axios.post<SignInResponse>(BASE_URL + STAFF_SIGN_IN, body);
        return data;
        
    } catch (error) {
        handleError(error);
    }
}

export const handleError = (error: any) => {
    if (axios.isAxiosError(error)){
        var err = error.response
        if (Array.isArray(err?.data.errors)){
            for (let val of err?.data.errors){
                toast.warning(val.description)
                 
            }
        }
        else if (typeof err?.data.errors === 'object'){
            for (let e in err?.data.errors){
                toast.warning(err.data.errors[e][0]);
            }
        }

        else if (err?.data){
            toast.warning(err?.data)
        }
        
        else if (err?.status == 401){
            toast.warning("Please login to continue")
            window.history.pushState({}, "Sign In", "/sign-in")
        }

        else if (err  ){
            toast.warning(err?.data)
        }
    }
}