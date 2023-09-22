import { useEffect } from "react";

const Basket = () => {
    // Sample data
    const data = [
        { productImg: "/src/assets/images/Image12.png", productName: "Produce name", price: '$450.00', quantity: 30, total: '$900.00' },
        { productImg: "/src/assets/images/Image6.png", productName: "Produce name", price: '$450.00', quantity: 25, total: '$900.00' },
        { productImg: "/src/assets/images/Image13.png", productName: "Produce name", price: '$450.00', quantity: 35, total: '$900.00' },
        { productImg: "/src/assets/images/Image8.png", productName: "Produce name", price: '$450.00', quantity: 40, total: '$900.00' }
    ];

    useEffect(() => {
    }, [])
    return (
        <div className="flex flex-col items-center justify-center">

            <table className=" min-w-1/2 bg-white">
                <thead>
                    <tr className="w-1/2 h-16 border-gray-300 border-b py-8">
                        <th className="pl-14 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">PRODUCT</th>
                        <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">PRICE</th>
                        <th className="text-gray-600 font-normal text-left text-sm tracking-normal leading-4">QUANTITY</th>
                        <th className="text-gray-600 font-normal text-left text-sm tracking-normal leading-4">TOTAL</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(row => (
                        <tr key={row.productImg} className="h-15 border-gray-300 border-b">
                            <div>
                                <td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"><img src={row.productImg} className="w-20 h-20 " /></td>
                                <td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"><div className=" mb-20">
                                    <div>Product name</div>
                                    <div><button className="underline">
                                        x remove
                                    </button></div>
                                </div></td>
                            </div>
                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{row.price}</td>
                            <td className="text-sm whitespace-no-wrap text-gray-800 tracking-normal leading-4">{row.quantity}</td>
                            <td className="text-sm whitespace-no-wrap text-gray-800 tracking-normal leading-4">{row.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Basket;