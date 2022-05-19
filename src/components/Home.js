import React from 'react';


const Home = () => {
    return(
        <>
        <div className='rec1'></div>
        <div className='rectangle'></div>
        <div className='rec2'></div>
        <div className='container'>
            <div className='logo'></div>
            <div className='content'>
                <div className='header'>
                    <div className='heading'>
                        <div className='lines'>
                            <hr className='rectangle1' />
                            <hr className='rectangle2' />
                            <hr className='rectangle3' />
                        </div>
                        <div className='onboard text-center'>
                            <h3 className='onboard-h3'>It's a delight to have you </h3>
                            <span className='onboard-h3'> onboard</span>
                        </div>
                    </div>
                    <div className='captiondiv text-center'>
                        <p className='caption'>Help us know you better</p>
                        <span className='caption'>(This is how we optimize Wobot as per your business needs)</span>
                    </div>
                </div>
                <div className='w-100 mt-3'>
                    <form>
                        <div className="form-group w-100">
                            <label>Company name</label>
                            <input type="text" className="form-control w-100" />
                        </div>
                        <div class="form-group">
                            <label>Example select</label>
                            <select class="form-control">
                                <option>Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>Company size</label><br />
                            <div className='btn-group d-flex flex-row'>
                                <button className='btn btn-light'>1-20</button>
                                <button className='btn btn-light'>21-50</button>
                                <button className='btn btn-light'>51-200</button>
                                <button className='btn btn-light'>201-500</button>
                                <button className='btn btn-light'>500+</button>
                            </div>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary w-100" >Get Started</button>
                    </form>
                </div>
            </div>
            
            <p className='terms'>Terms of use Privacy Policy</p>
        </div>
        </>
    )
}

export default Home;