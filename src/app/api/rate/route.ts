import {NextResponse} from "next/server";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE!;
const CLIENT = process.env.NEXT_PUBLIC_CLIENT!;
const SALE_TYPE = process.env.NEXT_PUBLIC_SALE_TYPE!;
const FROM_PIN = process.env.NEXT_PUBLIC_FROM_PIN!;
const DOCTYPE = process.env.NEXT_PUBLIC_DOCTYPE!;
const RISK = process.env.NEXT_PUBLIC_RISK!;
const PRODUCT = process.env.NEXT_PUBLIC_PRODUCT!;
const VAS = process.env.NEXT_PUBLIC_VAS!;
const TOPAY = process.env.NEXT_PUBLIC_TOPAY!;
const COD = process.env.NEXT_PUBLIC_COD!;
const REV_PICKUP = process.env.NEXT_PUBLIC_REV_PICKUP!;

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);

    const toPinCode = searchParams.get("toPinCode");
    const mode = searchParams.get("mode");
    const pcs = searchParams.get("pcs") || "1";
    const weight = searchParams.get("weight");
    const invoiceValue = searchParams.get("invoiceValue") || "0";

    const url = `${BASE_URL}/GetRatecalculatorResult?SaleType=${SALE_TYPE}&Client=${CLIENT}&FromPin=${FROM_PIN}
    &ToPin=${toPinCode}&Mode=${mode}&DocType=${DOCTYPE}&PCS=${pcs}&Weight=${weight}&InvoiceValue=${invoiceValue}
    &RiskCoveredBy=${RISK}&Product=${PRODUCT}&VAS=${VAS}&Topay=${TOPAY}&COD=${COD}&isRevPickup=${REV_PICKUP}`;

    try {
        const response = await axios.get(url);
        return NextResponse.json(response.data);
    } catch (error) {
        console.log(error);
        // return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
