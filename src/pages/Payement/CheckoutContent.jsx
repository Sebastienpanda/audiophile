import { useNavigate } from "react-router-dom"
import { Input } from "../../components/ui/Forms/Input.jsx"
import { InputRadio } from "../../components/ui/Forms/InputRadio.jsx"
import { Subtitle } from "../Components/Payement/SubtitlePayment.jsx"
import { Summary } from "../Components/Payement/Summary.jsx"

export function CheckoutContent() {
    const navigate = useNavigate()
    return (
        <>
            <span className="block pt-4 text-title-shop text-black/50 md:pt-8 lg:pt-[4.94rem]">
                <button onClick={() => navigate(-1)}>Go back</button>
            </span>
            <section className="flex flex-col gap-8 pt-6 lg:flex-row lg:justify-between">
                <section>
                    <div className="flex flex-col gap-8 rounded-lg bg-white px-6 pb-[1.94rem] pt-6">
                        <h1 className="text-h4">CHECKOUT</h1>
                        <div>
                            <Subtitle title="Billing details" />
                            <div className="flex flex-col gap-6 pt-6 md:flex-row md:flex-wrap">
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Alexei Ward"
                                    label="Name"
                                    autoComplete="name"
                                    style="md:w-[48%]"
                                />
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="alexei@mail.com"
                                    label="Email Address"
                                    autoComplete="email"
                                    style="md:w-[48%]"
                                />
                                <Input
                                    type="tel"
                                    id="tel"
                                    placeholder="+1 202-555-0136"
                                    label="Phone Number"
                                    autoComplete="tel"
                                    style="md:w-[48%]"
                                />
                            </div>
                        </div>
                        <div>
                            <Subtitle title="shipping info" />
                            <div className="pt-6">
                                <Input
                                    type="text"
                                    id="address"
                                    placeholder="1137 Williams Avenue"
                                    label="Your Address"
                                    autoComplete="street-address"
                                    style="pb-6"
                                />
                                <div className="flex flex-col gap-6 md:flex-row md:flex-wrap">
                                    <Input
                                        type="number"
                                        id="ZIPCode"
                                        placeholder="10001"
                                        label="ZIP Code"
                                        autoComplete="postal-code"
                                        style="md:w-[48%]"
                                    />
                                    <Input
                                        type="text"
                                        id="city"
                                        placeholder="New York"
                                        label="City"
                                        autoComplete="address-level1"
                                        style="md:w-[48%]"
                                    />
                                    <Input
                                        type="text"
                                        id="country"
                                        placeholder="United States"
                                        label="Country"
                                        autoComplete="country"
                                        style="md:w-[48%]"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <InputRadio id="e-Money" label="e-Money" defaultChecked={true} />
                        <InputRadio id="cash" label="Cash on Delivery" defaultChecked={false} /> */}
                    </div>
                </section>
                <Summary />
            </section>
        </>
    )
}
