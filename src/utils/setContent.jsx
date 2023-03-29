
import ErrorMessage from '..//components/errorMessage/ErrorMessage';

const setContent = (Component, Skeleton, state, data = null) => {
    switch (state) {
        case 'loading':
            return <Skeleton />
        case 'error':
            return <ErrorMessage />
        case 'success':
            return <Component {...data}/>
        default:
            return null
    }
}

export default setContent