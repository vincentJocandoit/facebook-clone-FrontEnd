import create from 'zustand'
import produce from 'immer'

const useZustand = create((set) => ({
  viewModifyComment: false,
  setViewModifyComment: () =>
    set((state) =>
      produce(state, (draft) => {
        draft.viewModifyComment = !draft.viewModifyComment
      })
    ),
}))

export default useZustand
