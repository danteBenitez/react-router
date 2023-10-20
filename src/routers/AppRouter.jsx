import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from '../App';
import { Task } from '../components/Task';

export function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route element={<Task />} path={"/tasks/:taskId"} />
            <Route element={<App />} path="/*"/>
            
        </Routes> 
    </BrowserRouter>
}