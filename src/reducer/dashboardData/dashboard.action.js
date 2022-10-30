import dashboardType from "./dashboardType"


export const dashboardItem = item => {
    return ({
        type: dashboardType.DASHBOARD_DATA,
        payload: item
    })
}