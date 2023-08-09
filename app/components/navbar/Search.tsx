import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md trasnition cursor-pointer">
            <div className="flex flex-row justify-between items-center ">
                <div className="text-sm font-semibold px-6">
                    anything
                </div>
                <div className="hidden sm:block text-sm font-semibold px-6 flex-center border-x-[1px] flex-1">any week</div>
                <div className="pl-6 pr-2 text-gray-600 text-sm flex items-center flex-row gap-3">
                    <div className="hidden sm:block">add guest</div>
                    <div className="bg-rose-500 text-white p-2 rounded-full">
                        <BiSearch size='18' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search