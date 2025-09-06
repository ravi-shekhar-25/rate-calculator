"use client"
import React, {useState} from 'react';
import axios from "axios";

const MainPage = () => {
    const [formData, setFormData] = useState({
        toPinCode: "",
        mode: "",
        pieces: "",
        weight: "",
        invoiceValue: "",
    });

    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    // handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // handle form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.get("/api/rate", {
                params: {
                    toPinCode: formData.toPinCode,
                    mode: formData.mode,
                    pcs: formData.pieces,
                    weight: formData.weight,
                    invoiceValue: formData.invoiceValue,
                },
            });

            setResult(response.data);
        } catch (error) {
            console.error("Error fetching rate:", error);
            setResult({ error: "Failed to fetch data" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-1 md:p-5">
            <div className={"text-2xl mb-3 p-1 rounded-3xl bg-gray-200 font-bold text-center items-center"}>
                <p> Rate Calculator</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className={"flex flex-row items-center gap-2.5"}>
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
                <div className={"flex flex-row items-center gap-2"}>
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
                <div className={"flex flex-row items-center gap-2"}>
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
                <div className={"flex flex-row items-center gap-2.5"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        To PinCode:
                    </label>
                    <input
                        name="toPinCode"
                        type="number"
                        id="toPinCode"
                        value={formData.toPinCode}
                        onChange={handleChange}
                        className="bg-gray-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                        placeholder="To PinCode"
                        required={true}
                    />
                </div>

                <div className={"flex flex-row items-center gap-2.5"}>
                    <label className="text-black text-lg font-medium">
                        Select Mode:
                    </label>
                    <select
                        name="mode"
                        id="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        required={true}
                        className="bg-gray-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                    >
                        <option value={""}>Select mode</option>
                        <option value="Surface">Surface</option>
                        <option value="Air">Air</option>
                    </select>
                </div>

                {/*//todo: pieces is not required*/}
                {/*<label*/}
                {/*    className="text-black text-lg font-medium"*/}
                {/*>*/}
                {/*    Pieces:*/}
                {/*</label>*/}
                {/*<input*/}
                {/*    name="pieces"*/}
                {/*    type="number"*/}
                {/*    id="pieces"*/}
                {/*    value={formData.pieces}*/}
                {/*    onChange={handleChange}*/}
                {/*    className="bg-gray-100 border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"*/}
                {/*    placeholder="Pieces"*/}
                {/*/>*/}

                <div className={"flex flex-row items-center gap-2"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        Weight (in Kg):
                    </label>
                    <input
                        name="weight"
                        type="number"
                        id="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="bg-gray-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                        placeholder="Weight"
                        required={true}
                    />
                </div>
                <div className={"flex flex-row items-center gap-2"}>
                    <label
                        className="text-black text-lg font-medium"
                    >
                        Invoice Value:
                    </label>
                    <input
                        name="invoiceValue"
                        type="number"
                        id="invoiceValue"
                        value={formData.invoiceValue}
                        onChange={handleChange}
                        className="bg-gray-100 border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg  p-2.5"
                        placeholder="Invoice Value"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-800 text-white cursor-pointer font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    {loading ? "Calculating..." : "Calculate"}
                </button>
            </form>
            {result && (
                <div className="mt-6 mb-8 p-4 bg-gray-100 rounded-lg border">
                    <h2 className="text-lg font-bold">Rate Calculation Result</h2>
                    <pre className="mt-2 bg-white p-3 rounded-lg overflow-auto">
                    {result.Item2?.ToPin && (
                        <div className="text-md text-black font-semibold">
                            To PinCode: {result.Item2.ToPin}
                        </div>
                    )}
                        {result.Item2?.ToCity && (
                            <div className="text-md text-black font-semibold">
                                To City: {result.Item2.ToCity}
                            </div>
                        )}
                        {result.Item2?.ToBranch && (
                            <div className="text-md text-gray-800">
                                ToBranch: {result.Item2.ToBranch}
                            </div>
                        )}
                        {result.Item1?.NetChg && (
                            <div className="text-md text-black">
                                Charge: Rs.{result.Item1.NetChg}
                            </div>
                        )}
                        {result.Item1?.FuelChg && (
                            <div className="text-md text-black">
                                Fuel Charge: Rs.{result.Item1.FuelChg}
                            </div>
                        )}
                        {result.Item1?.InsuChg !== 0 && (
                            <div className="text-md text-black">
                                Insurance Charge: Rs.{result.Item1.InsuChg}
                            </div>
                        )}

                        {result.Item1?.GRTotal && (
                            <div className="text-md text-black font-semibold">
                                Grand Total(excluding GST): Rs.{result.Item1.GRTotal}
                            </div>
                        )}
                        {result.Item1?.GRTotal && (
                            <div className="text-md text-black font-semibold">
                                GST (18%): Rs. {((result.Item1.GRTotal * 0.18).toFixed(2))}
                            </div>
                        )}
                        {result.Item1?.GRTotal !== undefined && (
                            <div className="text-xl mt-1.5 p-2 rounded-md bg-gray-200 text-black font-bold">
                                Total Cost: Rs. {((result.Item1.GRTotal * 1.18).toFixed(2))}
                            </div>
                        )}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default MainPage;