import { getDashboardData } from "./dashboard.Utility"
import dashboardType from "./dashboardType";


const INITIAL_STATE = {
    dashboardData: []
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case dashboardType.DASHBOARD_DATA:
            {
                return new Promise(async resolve => {
                    resolve({
                        ...state,
                        dashboardData: await getDashboardData()
                    })
                });

            }
        default: return state;
    }
}

export default dashboardReducer;