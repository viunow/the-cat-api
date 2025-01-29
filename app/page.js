"use client";

import { useState, useEffect } from "react";
import CatCard from "../components/CatCard";
import Filters from "../components/Filters";
import { fetchCats, fetchBreeds } from "@/services/cat";
import Pagination from "@/components/Pagination";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [cats, setCats] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const breedsData = await fetchBreeds();
      setBreeds(breedsData);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadCats = async () => {
      setIsLoading(true);
      const catsData = await fetchCats({ page: currentPage });
      setCats(catsData.cats);
      setTotalPages(catsData.totalPages);
      setIsLoading(false);
    };
    loadCats();
  }, [currentPage]);

  const handleFilter = async (filters) => {
    setIsLoading(true);
    const filteredCats = await fetchCats({ ...filters, page: 1 });
    setCats(filteredCats.cats);
    setTotalPages(filteredCats.totalPages);
    setCurrentPage(1);
    setIsLoading(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4 lg:p-8 min-h-screen">
      <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-[30%] border-[1px] border-black/5 shadow-xl rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-8">Filtrar gatos! 🐱</h1>
          <Filters breeds={breeds} onFilter={handleFilter} />
        </div>
        <div className="w-full flex flex-col">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-12 w-12 animate-spin text-violet-500" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {cats.map((cat) => (
                  <CatCard key={cat.id} cat={cat} />
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Pagination
                  total={totalPages}
                  current={currentPage}
                  onChange={handlePageChange}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
