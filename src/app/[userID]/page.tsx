import { Metadata } from "next";
import Image from 'next/image';
import logo from "../../assets/logo.svg"
import { colours } from "../../utils/utils"
import Link from '@/components/link';

interface PageProps {
  params: {
    userID: string;
  };
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `${params.userID}'s Notespace`,
  };
}
const page = async ({ params }: PageProps) => {

  // the data to be received from backend when you call on backend/janedoe
  const payload = {
    "name": "Jane Doe",
    "tagLine": "Aspiring Software Engineer",
    "tags": [
      "AI/ML",
      "Backend",
      "Blockchain"
    ],
    "links": [
      {
        "icon": "github",
        "title": "Github",
        "url": "https://github.com/janedoe",
        "hasImageHeader": false,
      },
      {
        "icon": "resume",
        "title": "Resume",
        "url": "https://resume.com",
        "hasImageHeader": false,
      },
      {
        "icon": "website",
        "title": "Personal Website",
        "url": "https://janedoe.com",
        "hasImageHeader": true,
      }
    ]
  }

  // this page receives the slug
  // fetch user data from db and create the link tree
  return (
    <>
     <body className="min-h-screen text-[#FAFAFA]">
       
        <div className="max-w-7xl mx-auto">
          <div>
            <figure className="p-6">
              <Image className="w-32 h-32 rounded-full mx-auto" src={logo} alt="profile picture"  />
              <div className="pt-6 text-center space-y-4">
                <figcaption className="font-medium">
                  <div className="text-[#FAFAFA] text-2xl font-bold">
                    Jane Doe {params.userID}
                  </div>
                  <div className="mt-2 font-bold text-[#FAFAFA]">
                    Aspiring Software Engineer
                  </div>
                </figcaption>
             
                <div>
                  <div className="bg-[#FFB1AC] inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-[#BD3B34] m-1">
                    <span>AI/ML</span>
                  </div>

                  <div className="bg-[#C8FFCD] inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-[#3F8441] m-1">
                    <span>Fullstack</span>
                  </div>

                  <div className="bg-[#C8EBFF] inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-[#3F7384] m-1">
                    <span>NodeJS</span>
                  </div>
                 
                  
                </div>
                 
              </div>
            </figure>
          </div>
        </div>

        <div className="max-w-xs mx-auto">
          <div className="text-center space-y-4 sm:flex sm:items-start sm:justify-center">
            <a href="https://cpintoval.github.io/" target="_blank" className="flex items-start rounded-lg border border-gray-400 bg-[#FAFAFA] px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150">
              <p className="mr-3 h-6 w-6">👨🏽‍💻</p>
              <p className="text-[#1B1B1B] mx-auto sm:mx-0 ">Websitefnjwfen</p>
              <div className="ml-auto mt-0.5">
                <svg className="h-5 w-5 text-[#1B1B1B]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </body>

       
    </>
  );
};
export default page;