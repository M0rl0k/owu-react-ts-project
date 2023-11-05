import {useContext} from "react";

import {Context} from "../hoc";

const useAppContext = () => {
    const [state, setState] = useContext(Context)

    return {
        state,
        setState: (theme:string) => setState(theme)
    }
}

export {useAppContext}