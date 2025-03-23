import { create } from "zustand";
interface useMainStateProps {
  UpperCaseLetters: boolean;
  setUpperCaseletters: () => void;
  LowerCaseLetters: boolean;
  LowerCaseLettersClick: () => void;
  Numbers: boolean;
  NumberClick: () => void;
  Symbols: boolean;
  SymbolsClick: () => void;
  Hover: boolean;
  HandleEnter: () => void;
  HandleLeave: () => void;
  TooWeakColor: string;
  TooWeakColorBorder: string;
  WeakColor: string;
  WeakColorBorder: string;
  MediumColor: string;
  MediumColorBorder: string;
  StrongColor: string;
  StrongColorBorder: string;
  ChangeColors: () => void;
  strengthWord: string;
}
export const useMainStates = create<useMainStateProps>((set, get) => ({
  UpperCaseLetters: true,
  setUpperCaseletters: () => {
    set((state) => ({ UpperCaseLetters: !state.UpperCaseLetters }));
  },

  LowerCaseLetters: false,
  LowerCaseLettersClick: () => {
    set((state) => ({ LowerCaseLetters: !state.LowerCaseLetters }));
  },
  Numbers: false,
  NumberClick: () => {
    set((state) => ({ Numbers: !state.Numbers }));
  },
  Symbols: false,
  SymbolsClick: () => {
    set((state) => ({ Symbols: !state.Symbols }));
  },
  Hover: false,
  HandleEnter: () => {
    set(() => ({ Hover: true }));
  },
  HandleLeave: () => {
    set(() => ({ Hover: false }));
  },
  TooWeakColor: "",
  TooWeakColorBorder: "#E6E5EA",
  WeakColor: "",
  WeakColorBorder: "#E6E5EA",
  MediumColor: "",
  MediumColorBorder: "#E6E5EA",
  StrongColor: "",
  StrongColorBorder: "#E6E5EA",
  strengthWord: "",
  ChangeColors: () => {
    const { UpperCaseLetters, LowerCaseLetters, Numbers, Symbols } = get();
    if (UpperCaseLetters && LowerCaseLetters && Numbers && Symbols) {
      set({
        TooWeakColor: "#A4FFAF",
        TooWeakColorBorder: "#A4FFAF",
        WeakColor: "#A4FFAF",
        WeakColorBorder: "#A4FFAF",
        MediumColor: "#A4FFAF",
        MediumColorBorder: "#A4FFAF",
        StrongColor: "#A4FFAF",
        StrongColorBorder: "#A4FFAF",
        strengthWord: "STRONG",
      });
    } else if (
      (UpperCaseLetters && LowerCaseLetters && Numbers) ||
      (LowerCaseLetters && Numbers && Symbols) ||
      (UpperCaseLetters && Numbers && Symbols) ||
      (UpperCaseLetters && LowerCaseLetters && Symbols)
    ) {
      set({
        TooWeakColor: "#F8CD65",
        TooWeakColorBorder: "#F8CD65",
        WeakColor: "#F8CD65",
        WeakColorBorder: "#F8CD65",
        MediumColor: "#F8CD65",
        MediumColorBorder: "#F8CD65",
        StrongColor: "",
        StrongColorBorder: "#E6E5EA",
        strengthWord: "MEDIUM",
      });
    } else if (
      (UpperCaseLetters && LowerCaseLetters) ||
      (UpperCaseLetters && Numbers) ||
      (UpperCaseLetters && Symbols) ||
      (LowerCaseLetters && Numbers) ||
      (LowerCaseLetters && Symbols) ||
      (Numbers && Symbols)
    ) {
      set({
        TooWeakColor: "#FB7C58",
        TooWeakColorBorder: "#FB7C58",
        WeakColor: "#FB7C58",
        WeakColorBorder: "#FB7C58",
        MediumColor: "",
        MediumColorBorder: "#E6E5EA",
        StrongColor: "",
        StrongColorBorder: "#E6E5EA",
        strengthWord: "WEAK",
      });
    } else if (UpperCaseLetters || LowerCaseLetters || Numbers || Symbols) {
      set({
        TooWeakColor: "#F64A4A",
        TooWeakColorBorder: "#F64A4A",
        WeakColor: "",
        WeakColorBorder: "#E6E5EA",
        MediumColor: "",
        MediumColorBorder: "#E6E5EA",
        StrongColor: "",
        StrongColorBorder: "#E6E5EA",
        strengthWord: "TOO WEAK!",
      });
    } else {
      set({
        TooWeakColor: "",
        TooWeakColorBorder: "#E6E5EA",
        WeakColor: "",
        WeakColorBorder: "#E6E5EA",
        MediumColor: "",
        MediumColorBorder: "#E6E5EA",
        StrongColor: "",
        StrongColorBorder: "#E6E5EA",
        strengthWord: " ",
      });
    }
  },
}));
