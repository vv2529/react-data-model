import appContext from './AppContext'
import AppModel from './AppModel'
import useModel from './data-model/useModel'

const useAppModel = (hookkeys) => useModel(appContext, AppModel, hookkeys)

export default useAppModel
