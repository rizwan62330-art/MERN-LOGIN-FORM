import { toast } from 'react-toastify';


export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    });
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    });
}

export const logout = (navigate) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('Logged out successfully');
    setTimeout(() => {
        navigate('/login');
    }, 1000);
}