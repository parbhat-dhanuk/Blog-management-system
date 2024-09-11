
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
// import SingleBlog from './pages/blog/SingleBlog'
import Protected from './Protected'
import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Parent from './useCallback/Parent'
import Hook from './hookPage/Hook'
const SingleBlog =lazy(()=>import("./pages/blog/SingleBlog"))

const ErrorFallback = ({error})=>{
return(
  <div>
  <h1>Error 404..</h1>
  <p>{error.message}</p>
  </div>
)
}
function App() {
  return (
    <BrowserRouter>
     
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<h1>Loading...</h1>}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path = '/blog/add' element={<Protected><AddBlog /></Protected>} />
        <Route path='/blog/edit/:id' element={<Protected><EditBlog /></Protected>} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path='/usecallback' element={<Parent />} />
       
      </Routes>

     </Suspense>
    </ErrorBoundary>
    
    </BrowserRouter>
  )
}

export default App
