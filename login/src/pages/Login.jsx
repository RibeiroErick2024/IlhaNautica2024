import './Login.css'

const Login = () => {
  return (
    
      
    <div className='container'>

        <div className='ladoEsquerdo'>
            <div className='img'>
                <img src="src\assets\imgLogin.jpg" alt="" />
            </div>





        </div>
        <div className='ladoDireito'>

        <div className='login'>
        <form>

            <h1>Entrar</h1>

            <div>
                <input type="email" name="" id=""  placeholder='Digite o seu email'/>
            </div>

            <div>
                <input type="password" name="" id="" placeholder='Digite a sua senha' />
            </div>

            <label className='esqueceuSenha'>Esqueceu a sua senha</label>
            <div>
                <button className='btnEntrar'>Proximo</button>
            </div>
            {/* <label className='semConta'>Não tem uma conta?</label> */}


        </form>



        </div>

        </div>

        

        
    


    </div>
  )
}

export default Login
