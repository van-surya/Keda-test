import PricingCard from "./PricingCard";

const pricingPlanData = [
    {
        id: crypto.randomUUID(),
        title: "TIER 1/Basic ",
        price: '250',
        features: [
            "Mencatat barang masuk",
            "Mencatat barang keluar",
            "Mencatat hasil keuntungan",
        ],
        highlighted: false,
    },
    {
        id: crypto.randomUUID(),
        title: "TIER 2/Business",
        price: '400',
        features: [
            "Mencatat barang masuk dan keluar",
            "Mencatat Keuntungan",
            "Dapat menganalisa hasil penjualan dengan CHART",
            "Support 7x24 Jam",
        ],
        highlighted: true,
    },
    {
        id: crypto.randomUUID(),
        title: "TIER 3/Entrepreneur",
        price: '600',
        features: [
            "Mencatat barang masuk dan keluar",
            "Mencatat Keuntungan",
            "Dapat menganalisa hasil penjualan dengan CHART",
            "Support 7x24 Jam",
            "Export data ke Excel",
            "AI Prediksi penghasilan",
        ],
        highlighted: false,
    },
];
function Pricing() {
    return (
        <>
            <section id="pricing" className="py-12 lg:py-24 xl:py-32 bg-neutral-800">
                <div className="container px-4 mx-auto">
                    <div className="lg:w-[600px] mx-auto">
                        <h2 className="text-4xl uppercase text-center font-bold text-orange-400 mb-3 lg:mb-4">Pricing</h2>
                        <p className="text-neutral-50 text-xl text-center leading-[calc(1em*1)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore beatae aspernatur ad reprehenderit nesciunt, commodi nostrum alias</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-4 mt-12 lg:mt-24">
                        {pricingPlanData.map((plan, index) => (
                            <div className="py-12 px-4 lg:py-4 border border-blue-800 hover:bg-blue-800 rounded-2xl" key={plan.id} index={index}>
                                <PricingCard plan={plan} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing