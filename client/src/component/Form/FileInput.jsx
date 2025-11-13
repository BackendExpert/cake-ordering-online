import React from 'react';

const FileInput = ({ label, name, onChange, required = false, accept, multiple = false }) => {
    return (
        <div className="mb-5">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-semibold text-[#341539] mb-2"
                >
                    {label}
                </label>
            )}
            <input
                type="file"
                name={name}
                id={name}
                onChange={onChange}
                required={required}
                accept={accept}
                multiple={multiple}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-xl bg-white
                           file:px-4 file:py-2 file:mr-4 file:border-0
                           file:bg-[#341539] file:text-white file:rounded-md
                           hover:file:bg-[#27102a] focus:outline-none
                           focus:border-[#341539] focus:ring-2 focus:ring-[#341539]/40
                           transition-all duration-200 shadow-sm hover:shadow-md"
            />
        </div>
    );
};

export default FileInput;
