import { Atom } from "react-loading-indicators"

const Loading = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <Atom color="#00ff00" size="medium" text="Loading ..." textColor="#fff" />
        </div>
    )
}

export default Loading;