import {createContext, FC, PropsWithChildren, useState} from "react";


const Context = createContext(null)
interface IProps extends PropsWithChildren {

}


const ContextProvider:FC<IProps> = ({children}) => {
    const state = useState<string>('dark')

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export {
    Context, ContextProvider
}