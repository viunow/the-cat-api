import Image from "next/image";

export default function CatCard({ cat }) {
  const catData = cat.breeds?.[0];
  console.log(catData);
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-violet-500">
      <div className="relative h-60">
        <Image
          src={cat.url} // Imagem do gato
          alt={catData?.name || "Cat"}
          fill
          className="rounded-t-lg object-cover object-center"
        />
      </div>
      <div className="p-4 flex flex-col gap-1 justify-between">
        <h2 className="text-2xl font-bold mb-2 text-center">
          {catData?.name || "Unknown Cat"}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4 h-[100px] overflow-y-auto">
          {catData?.description || "No description available"}
        </p>

        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col items-start">
            <span className="font-semibold text-gray-800">Temperament:</span>
            <p className="text-sm text-gray-600">
              {catData?.temperament || "Unknown"}
            </p>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-semibold text-gray-800">Origin:</span>
            <p className="text-sm text-gray-600">
              {catData?.origin || "Unknown"}
            </p>
          </div>
        </div>

        <div className="bg-violet-200/80 border-[1px] border-violet-600 h-full px-2 py-4 rounded-lg flex flex-col gap-4 justify-center">
          <div className="flex flex-wrap justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Adaptability:</span>
              <p className="text-sm text-gray-600">
                {catData?.adaptability || "Unknown"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Intelligence:</span>
              <p className="text-sm text-gray-600">
                {catData?.intelligence || "Unknown"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Life Span:</span>
              <p className="text-sm text-gray-600">
                {catData?.life_span || "Unknown"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Weight:</span>
              <p className="text-sm text-gray-600">
                {catData?.weight?.imperial || "Unknown"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href={catData?.wikipedia_url || "#"}
            className="bg-violet-500 hover:bg-violet-400 transition duration-500 py-1.5 px-6 rounded-lg text-white text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";

// export default function CatCard({ cat }) {
//   const catData = cat.breeds?.[0];

//   return (
//     <Card className="w-[300px] border-[1px] border-black/5 drop-shadow-xl">
//       <CardHeader>
//         <CardTitle>{catData?.name || "Unknown Breed"}</CardTitle>
//         <CardDescription>{catData?.origin || "Unknown Origin"}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="relative h-40 mb-4">
//           <Image
//             src={cat.url}
//             alt={catData?.name || "Cat"}
//             fill
//             className="rounded-lg object-cover"
//           />
//         </div>
//         <div className="flex flex-col space-y-2 text-gray-600">
//           <p className="text-sm">
//             {catData?.temperament || "Unknown Temperament"}
//           </p>
//           <div className="flex flex-row items-start text-sm">
//             <p>Adaptability: </p>
//             <p className="text-sm">
//               {catData?.adaptability || "Unknown Temperament"}
//             </p>
//           </div>
//           <div className="flex flex-row items-start text-sm">
//             <p>Intelligence: </p>
//             <p className="text-sm">
//               {catData?.intelligence || "Unknown Temperament"}
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
