import React from 'react'

function Alert(props) {

    const capitalize = (content) => {
        let newContent = content.toLowerCase();
        return newContent.charAt(0).toUpperCase() + newContent.slice(1)
    }
    return (
        <div style={{ height: '50px' }}>{

            props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.typ)} !</strong> {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        }
        </div>
    )
}

export default Alert