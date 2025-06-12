type InputSearchType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputSearch = ({value, onChange, placeholder}: InputSearchType) => {
  return (
    <div className="flex items-center h-full justify-center rounded-full border-[1px] border-gray-500 overflow-hidden w-full">
      <div className="relative w-full text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input 
            type="search" 
            name="search-filter" 
            className="py-2 pr-3 text-sm w-full text-black  rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" 
            placeholder={placeholder ? placeholder : "Search items..."} 
            autoComplete="new-password"
            value={value}
            onChange={onChange} 
          />
        </div>
    </div>
  )
}

export default InputSearch;