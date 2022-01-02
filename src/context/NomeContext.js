import React, { createContext, useContext, useState } from "react";

const NomeContext = createContext();

export const NomeProvider = ({ children }) => {
  const [nome, setNome] = useState("");

  return (
    <NomeContext.Provider
      value={{
        nome,
        setNome,
      }}
    >
      {children}
    </NomeContext.Provider>
  );
};

// criação de hook para facilitar utilizaçao do contexto
export const useNome = () => {
  const context = useContext(NomeContext);

  if (!context) {
    throw new Error("useNome must be used withim an nomeProvider");
  }

  const { nome, setNome } = context;

  return { nome, setNome };
};
