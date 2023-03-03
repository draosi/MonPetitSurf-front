import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const MpsRouter = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
        </div>
    )
}

export default MpsRouter