import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Hi from './pages/Hi';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Add from './pages/Add';
import MyAccount from './pages/MyAccount';
import BlogItemPage from './pages/BlogItemPage';
import EditMyBlogItem from './pages/EditMyBlogItem';
import DeleteAccount from './pages/DeleteAccount';
import EditProfile from './pages/EditProfile';
import EditComment from './pages/EditComment';
import DeleteComment from './pages/DeleteComment';
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
				<Route path="/english" element={ <div>Oi, view in english</div> }/>

				<Route path="/delete-account/:id" element={
					<PrivateRoute>
						<DeleteAccount />
					</PrivateRoute>
				}/>

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

				<Route path="/edit-profile/:id" element={
					<PrivateRoute>
						<EditProfile />
					</PrivateRoute>
				}/>

				<Route path="/activate-account/:id" element={
					<PrivateRoute>
						<div>Deseja realmente ativar a conta</div>
					</PrivateRoute>
				}/>

				<Route path="/blog/:id/user/:userId" element={
					<PrivateRoute>
						<EditMyBlogItem />
					</PrivateRoute>
				}/>

				<Route path="/edit-comment/:id" element={
					<PrivateRoute>
						<EditComment />
					</PrivateRoute>
				}/>

				<Route path="/delete-comment/:id" element={
					<PrivateRoute>
						<DeleteComment />
					</PrivateRoute>
				}/>

				<Route path="*" element={<NotFound />} />
			</Routes>
		);
}
export default Page;