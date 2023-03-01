import React from 'react'
import './styles.css';
const Login = () => {
    return (
        <div className='col-md-6 col-sm-11 col-lg-4 row ' >
            <section className=' col-md-12 d-flex justify-content-center row'>
                <i className="bi bi-droplet icono-container col-md-2 col-sm-2 container-fluid"></i>
                <h4 className='col-md-12'>Plagio control</h4>
            </section>
            <section>
                <h1>Login Plagio Control</h1>
                <h5>Enter your email and password below</h5>
            </section>
            <form>
                <fieldset disabled>
                    <legend>Disabled fieldset example</legend>
                    <div className="mb-3">
                        <div className="form-check">
                            <label className="" for="disabledFieldsetCheck">
                                Email
                            </label>
                            <input className="" type="text" id="disabledFieldsetCheck" disabled />

                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <label className="" for="disabledFieldsetCheck">
                                Password
                            </label>
                            <input className="" type="password" id="disabledFieldsetCheck" disabled />

                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>

            <section>
                <p>no tienes una cuenta?</p>
                <p>Sing up</p>
            </section>
        </div>
    )
}

export default Login