import { apiRequest } from "../../utility/api"

export const getDashboardData = async () => {
    const res = await apiRequest.get('/dashboard')
    return res;
}