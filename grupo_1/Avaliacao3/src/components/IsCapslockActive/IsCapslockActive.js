import React, {useEffect, useState} from "react";
import { TiWarningOutline } from 'react-icons/ti';
import './IsCapslockActive.scss'

function IsCapslockActive(props) {

    const [isActive, setActive] = useState(false)

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.getModifierState && event.getModifierState('CapsLock') && isActive === false) {
                setActive(true)
                console.log('enabled')
            }
        }

        function handleKeyUp(event) {
            if (event.getModifierState && !event.getModifierState('CapsLock') && isActive === true) {
                setActive(false)
                console.log('disabled')
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [isActive])

    return (
        <>{props.children}
            {isActive ?
                <div className={'warning'}>
                    <TiWarningOutline color="#ffbb33" fontSize="1.5rem"/>
                    <p>Capslock ativado</p>
                </div> : null}

        </>
    )
}

export default IsCapslockActive