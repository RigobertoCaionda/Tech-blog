import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Hi from './pages/Hi';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Add from './pages/Add';
import MyAccount from './pages/MyAccount';
import BlogItemPage from './pages/BlogItemPage';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';

const Page =  () => {
	return (
			<Routes>
				<Route path="/" element={ <Home /> }/>	
				<Route path="/blog" element={ <Blog /> }/>
				<Route path="/blog/:id" element={ <BlogItemPage /> } />
				<Route path="/about" element={ <Hi /> }/>	
				<Route path="/signin" element={ <SignIn /> }/>
				<Route path="/signup" element={ <SignUp /> }/>
				<Route path="/add" element={
					<PrivateRoute>
						<Add />
					</PrivateRoute>
				}/>
				<Route path="/my-account" element={
					<PrivateRoute>
						<MyAccount />
					</PrivateRoute>
				}/>

				<Route path="*" element={<NotFound />} />
			</Routes>
		);
}
export default Page;