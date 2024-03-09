import create from 'zustand';

const useAnim = create((set) => ({
  hoverd: null,
  
  setHoverd: (newHover) => set({ hoverd: newHover })
}));

export default useAnim;
