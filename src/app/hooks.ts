import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"

import { RootState, AppDispatch } from "./store"

// Type safe version of useDispatch derived from our store AppDispatch type
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Type safe version of useSelector derived from our store RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
