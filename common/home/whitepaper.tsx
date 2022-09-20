import Button from "../../components/button";

const Whitepaper = () => {
    return (
        <div className="mt-24">
            <div className="bg-[#1d1e42] p-[32px] flex flex-col justify-center items-center gap-y-4">
                <p className="text-white text-[32px]">Why People Wanna Purchase This LLC</p>
                <p className="text-white">You can get one of the world ‘ s most valuable health knowledge for Free.
                    <br />
                    For the benefit of mankind!</p>
                <p className="text-[#ffec37]">
                    1588.04 vs 278.85
                </p>
                <Button text="DOWNLOAD WHITEPAPER" />
            </div>
        </div>
    )
}

export default Whitepaper;