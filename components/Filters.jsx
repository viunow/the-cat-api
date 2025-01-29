"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react"; // Ícone de spinner (lucide-react)

export default function Filters({ breeds, onFilter }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Ativa o estado de carregamento

    const formData = new FormData(e.target);

    const filters = {
      breed: formData.get("breed") || "all",
      origin: formData.get("origin") || "all",
    };

    await onFilter(filters); // Aguarda a função de filtro concluir
    setIsLoading(false); // Desativa o estado de carregamento
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="breed">Raça</Label>
        <Select name="breed">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {breeds.map((breed) => (
              <SelectItem key={breed.id} value={breed.id}>
                {breed.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="origin">Origem</Label>
        <Select name="origin">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {[
              ...new Set(breeds.map((breed) => breed.origin).filter(Boolean)),
            ].map((origin) => (
              <SelectItem key={origin} value={origin}>
                {origin}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        className="w-full bg-violet-500 hover:bg-violet-400 hover:drop-shadow-lg transition duration-500"
        disabled={isLoading} // Desabilita enquanto carrega
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Filtrando...
          </div>
        ) : (
          "Filtrar"
        )}
      </Button>
    </form>
  );
}
