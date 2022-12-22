
export default function ToogleMode() {

    const handleOnChange = () => {
        if(document.body.classList.contains("dark")) {
            document.body.classList.remove("dark");
            return;
        }
        document.body.classList.add('dark');
    }

    return (
        <div className="text-center mt-4">
            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleOnChange}>Camibiar tema</button>
        </div>
    );
}