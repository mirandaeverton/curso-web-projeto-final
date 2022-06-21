import { error } from  './msgs'

export const apiBaseUrl = "http://localhost:3000"

export function showError(err) {
    if(err && err.response && err.response.data) {
        error(err.response.data)
        return
    }

    if( typeof err === 'string') {
        error(err)
        return
    }

    error()
}

// export default {
//     showError
// }