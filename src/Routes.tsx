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
import DeleteComponent from './components/DeleteComponent';
import EditProfile from './pages/EditProfile';
import EditComment from './pages/EditComment';
import ViewInEnglish from './pages/ViewInEnglish';
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
				<Route path="/view-in-english" element={ <ViewInEnglish /> }/>

				<Route path="/delete-account/:id" element={
					<PrivateRoute>
						<DeleteComponent data={{ 
							key: 'delete-account',
							title: 'Eliminação da conta',
							paragraphs: ['Você realmente deseja eliminar esta conta?', 
								'Se clicar em sim, a sua conta será eliminada para sempre depois de 2 horas, se quiser reverter esta ação vá ao teu perfil e clique em reverter.']
						}} />
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
						<DeleteComponent data={{ 
							key: 'activate-account',
							title: 'Reativação da conta',
							paragraphs: ['Você realmente deseja reativar esta conta?', 
								'Se clicar em sim, a sua conta será reativada.']
						}} />
					</PrivateRoute>
				}/>

				<Route path="/blog/:id/user/:userId" element={
					<PrivateRoute>
						<EditMyBlogItem />
					</PrivateRoute>
				}/>

				<Route path="/edit-comment/:id/:idPost" element={
					<PrivateRoute>
						<EditComment />
					</PrivateRoute>
				}/>

				<Route path="/delete-comment/:id/:idPost" element={
					<PrivateRoute>
						<DeleteComponent data={{ 
							key: 'delete-comment',
							title: 'Eliminação de comentário',
							paragraphs: ['Você realmente deseja eliminar este comentário?', 
								'Se clicar em sim, este comentário será apagado para sempre.']
						}} />
					</PrivateRoute>
				}/>

				<Route path="*" element={<NotFound />} />
			</Routes>
		);
}
export default Page;