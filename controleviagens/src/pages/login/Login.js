import { useState } from "react";
import { FormGroup, Label, Form, Input, Card, Button  } from 'reactstrap';
import { useAuthentication } from "../../hooks/useAuthentication";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [ displayName, setDisplayName] = useState ("")
    const [ sobrename, setSobrename] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword] = useState("")
    const { error, setError, loading } = useAuthentication();
    const { login, error: authError } = useAuthentication();

    // MÉTODO
      const handleSubmit = async (e) => {
       e.preventDefault()
       setError(null)

        const user = {
            displayName,
            password,
            email
        }
        // console.log(emailconcatenado)
try{
        const res = await login(user)
        // console.log(user)
        console.log(error.code)
        console.log(error.message)
         console.log(typeof error.message)
} catch (error) {
    // ERRO SENHA ERRADA, ARRUMAR - QUAL O CODIGO DO ERRO?
        console.log("ESTOU AQUI")
         console.log(error.message)
         console.log(typeof error.message)
         console.log(systemErrorMessage)

         let systemErrorMessage

        // setLoading(false);
        // setError(systemErrorMessage);
        // console.log(systemErrorMessage)

        if(error.code === "auth/weak-password"){
          systemErrorMessage  = "A senha não confere.";
      }
  }
  }

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <Card style={{width: '18rem'}}>
            
            <Form onSubmit={handleSubmit} className="ms-2 me-2">

              {/* <FormGroup className="text-start mt-2" > */}
              <h3>LOGIN</h3>

                <FormGroup className="text-start">
                <Label for="email">
                  Email:
                </Label>
                <Input
                   type="email"
                   name="email"
                   style={{textTransform:"uppercase"}}
                   required
                   placeholder="email do usuário"
     
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="text-start">
                <Label for="senha">
                Senha:
                </Label>
                <Input
                   type="password"
                   name="password"
                   required
                   placeholder="INSIRA SUA SENHA"
     
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

          {/*CADASTRAR*/}
          <p>
          {!loading && <Button color="primary" outline>ENTRAR</Button>}

          {/* ESQUECEU SENHA */}

          <p></p>

          <p>
          <NavLink color="primary" to= "/alterarsenha">Esqueci minha senha</NavLink>
          </p>

          {loading && (<button className="btn" disabled>Aguarde...</button>)}
          </p>

          {/* ERRO */}
          {error && <p className="error">{error}</p>}

            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login