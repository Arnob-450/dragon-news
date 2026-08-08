import NavBar from '@/components/shared/NavBar';
import { montserrat } from '../layout';


const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default AuthLayout;