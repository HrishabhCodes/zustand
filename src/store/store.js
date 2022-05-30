import create from "zustand";

const useStore = create((set) => ({
  details: {
    name: "",
    age: undefined,
    gender: "",
  },
  setDetails: (nameInput, ageInput, genderInput) =>
    set(() => ({
      details: { name: nameInput, age: ageInput, gender: genderInput },
    })),
  setName: (nameInput) =>
    set((state) => ({
      details: { ...state.details, name: nameInput },
    })),
  setAge: (ageInput) =>
    set((state) => ({
      details: { ...state.details, age: ageInput },
    })),
  setGender: (genderInput) =>
    set((state) => ({
      details: { ...state.details, gender: genderInput },
    })),
}));

export default useStore;
