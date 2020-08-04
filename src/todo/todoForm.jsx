import React from 'react'

export default props => (
    <div role='form' className='todoForm mt-2 form-row'>
        <div className='col-12 col-sm-9 col-md-10'>
            <input id='description' className='form-control'
                placeholder='Add task' />
        </div>
        <div className='col-12 col-sm-3 col-md-2'>
            <button className='btn btn-primary'>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    </div>
)


