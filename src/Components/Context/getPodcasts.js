import axios from "axios";
import { createContext } from "react";

export const PodcastContext = createContext();

export function PodcastProvider({ children }) {

    function getAllPodcasts() {
        return axios.get(`https://simpleupload-production.up.railway.app/posts`,
            {}).then((res) => res).catch((err) => err);
    }
  return (
 
    <PodcastContext.Provider value={{getAllPodcasts }}>
     {children}
    </PodcastContext.Provider>
  );
}
