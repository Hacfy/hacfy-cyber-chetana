import BackgroundImage from "./blogbgimage"
import { KnowMore } from "./knowMore"
import { LatestBlog } from "./latestblog"

export default function Home(){
    return(
        <div>
            <div>
                   <BackgroundImage />
                   </div>
                   <div>
                   <LatestBlog/>
                   </div>
        <div className="justify-center">
       <KnowMore/>
        </div>
        </div>
    )
}