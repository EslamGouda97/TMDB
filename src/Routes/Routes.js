import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutWithNavAndHeader from '../common/LayoutWithNavAndHeader';

const Movies= React.lazy(() => import('../Pages/Movies/Movies'));
const Favorite= React.lazy(() => import('../Pages/Favorites/Favorites'));
const MovieDetails= React.lazy(() => import('../Pages/Movies/MovieDetails'));
const NotFoundPage= React.lazy(() => import('../Pages/NotFound/NotFoundPage'));
const Home= React.lazy(() => import('../Pages/Home/Home'));
const Register= React.lazy(() => import( '../Pages/Register/Register'));



function AppRoutes() {
    return (

<Routes>
<Route element={ <LayoutWithNavAndHeader />}>
<Route path='/' element={
   <Suspense fallback={<h1>Loading ...</h1>}>
   <Home />
 </Suspense>}/>
<Route path='movies' element={ <Movies />}/>
<Route path='favorites' element={ <Favorite />}/>
<Route path='movieDetails/:id' element={ <MovieDetails />}/>
</Route>
<Route path='*' element={ <NotFoundPage />}/>
<Route path='register' element={ <Register/>}/>
     </Routes> 
    );
  }
  export default AppRoutes;