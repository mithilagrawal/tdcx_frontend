import { getDashboardData } from "./dashboard.Utility"
import dashboardType from "./dashboardType";


const INITIAL_STATE = {
    dashboardData: []
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case dashboardType.DASHBOARD_DATA:
            return {
                ...state,
                dashboardData: getDashboardData(state, action)
            }
        default: return state;
    }
}

export default dashboardReducer;