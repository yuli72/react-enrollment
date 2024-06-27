import style from './MyButton.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const MyButton = () => {
  return (
  <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary ">
    <div className=" p-5 rounded bg-white">
    <form>
      <h3 className="text-center mb-3">Sign In</h3>

      <div className="mb-3">
      <label for="inputEmail4" className="form-label">Email:</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Ex.@dmin@gmail.com" aria-label="Email"/>
      </div>

      <div className="mb-3">
      <label for="inputPassword4" className="form-label">Password:</label>
      <input type="password" className="form-control" id="inputPassword4"placeholder="Enter Password" aria-label="Password"/>
      </div>

      <div className="d-grid">
        <button className={style.btn}>Login</button>
      </div>
    </form>
    </div>
  </div>
    
  );
}

export default MyButton
