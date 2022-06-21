import toast from 'react-hot-toast'

export const success = msg => toast.success(!msg ? 'Operação realizada com sucesso!' : msg)
export const error = msg => toast.error(!msg ? 'Oops... Erro inesperado.' : msg)

// export default {
//     success,
//     error
// }