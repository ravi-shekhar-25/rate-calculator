"use client"
import React from 'react';

const MainPage = () => {
    return (
        <div className="p-5">
            <form className="flex flex-col gap-5">
                <div className={"flex flex-row items-center gap-4"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        Branch Code:
                    </label>
                    <input
                        name="branchCode"
                        type="text"
                        id="branchCode"
                        defaultValue={"MZP23"}
                        className="bg-lime-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg p-2.5"
                        placeholder="Branch Code"
                        disabled={true}
                    />
                </div>
                <div className={"flex flex-row items-center gap-4"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        Branch Name:
                    </label>
                    <input
                        name="branchName"
                        type="text"
                        id="branchName"
                        defaultValue={"OM COMMUNICATION"}
                        className="bg-lime-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg p-2.5"
                        placeholder="Branch Name"
                        disabled={true}
                    />
                </div>
                <div className={"flex flex-row items-center gap-4"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        From PinCode:
                    </label>
                    <input
                        name="fromPinCode"
                        type="text"
                        id="fromPinCode"
                        defaultValue={"842001"}
                        className="bg-lime-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                        placeholder="From PinCode"
                        disabled={true}
                    />
                </div>
                <div className={"flex flex-row items-center gap-4"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        To PinCode:
                    </label>
                    <input
                        name="toPinCode"
                        type="text"
                        id="toPinCode"

                        className="bg-gray-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                        placeholder="To PinCode"
                        required={true}
                    />
                </div>

                <div className={"flex flex-row items-center gap-4"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        Mode:
                    </label>
                    <select
                        name="mode"
                        id="mode"
                        required={true}
                        className="bg-gray-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                    >
                        <option value={""}>Select mode</option>
                        <option value="Surface">Surface</option>
                        <option value="Air">Air</option>
                    </select>

                    <label
                        className="text-black text-lg font-medium"
                    >
                        Pieces:
                    </label>
                    <input
                        name="pieces"
                        type="integer"
                        id="pieces"
                        className="bg-gray-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                        placeholder="Pieces"
                    />
                </div>

                <div className={"flex flex-row items-center gap-4"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        Weight (in Kg):
                    </label>
                    <input
                        name="weight"
                        type="text"
                        id="weight"

                        className="bg-gray-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                        placeholder="Weight"
                        required={true}
                    />
                </div>
                <div className={"flex flex-row items-center gap-4"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        Invoice Value:
                    </label>
                    <input
                        name="invoiceValue"
                        type="text"
                        id="invoiceValue"

                        className="bg-gray-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                        placeholder="Invoice Value"

                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-800 text-white cursor-pointer font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    Calculate
                </button>
            </form>
        </div>
    );
};

export default MainPage;