import React, { useEffect } from 'react';
import './Body.css'
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

const PricingSec = () => {

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => { setToggled(!isToggled) };
    const [plan, setPlan] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://app.askdocs.com/back/stripe/paymentplan')
            const datafetch = res.data.success;
            console.log("here is data", datafetch);
            setPlan(datafetch);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const monthlyPlan = plan.filter(item => item.plan_name === "free" || item.duration === "month");
    console.log("monthlyplan", monthlyPlan)

    const yearlyPlan = plan.filter(item => item.plan_name === "free" || item.duration === "year");
    console.log("yearyly plan", yearlyPlan);


    return (
        <div className='container mt-5 pt-5 mb-5'>
            <div className='row mb-3' id='pricing'>
                <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                    <span className='plan_border py-2 px-4'>Choose A Plan</span>
                    <p className='keyfeatures'>Choose from any of our plans</p>
                    <p className="">On Anually plan Save 10%</p>
                    <div className="toggle" onClick={toggleTrueFalse}>
                        <span className="text">Monthly</span>
                        <span className={`switch ${isToggled ? ' is-active' : ''}`} />
                        <span className="text">Anually</span>
                    </div>

                </div>
            </div>

            <div className='row d-flex align-items-center mb-5'>
                {isToggled ? <>
                    {
                        yearlyPlan.map((item) => (
                            <>

                                <div className='col-12 col-md-6 mb-5 mb-md-5 col-lg-4 h-100 d-flex justify-content-around'>
                                    <div className={`card w-75 card_edit py-3 px-4 ${item.plan_type === "Popular" && "card_border"}`} key={item.id}>
                                        <div className='price_content d-flex gap-2'>
                                            <h1 className='fw-bold'>${item.amount / 100 / 12}</h1>
                                            <div>
                                                <h5 className='fw-bold'>{item.display_name}</h5>
                                                <p className='text-primary'>per month</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='key_content'>
                                            <h6 className='fw-bold'>Key Features</h6>
                                            {item?.content?.map((deto, index) => (
                                                <p className='keyfeatures' key={index}>
                                                    {deto.content}
                                                </p>
                                            ))}
                                        </div>

                                        {item.plan_name === "free" && <Link href={"https://app.askdocs.com/"} className={`btn btn-light card_button py-3 mx-3 ${item.plan_name === "free" ? "d-block" : "d-none"}`}>Get Started</Link>}
                                        {
                                            item.plan_name !== "free" && (
                                                <>
                                                    <Link href={`https://app.askdocs.com/pricing?plan=${item.plan_name}&life_time=false`} className={`btn btn-primary py-3 card_spec`}>Get Started</Link>
                                                </>
                                            )
                                        }

                                        {
                                            item.plan_name != "free" &&
                                            (
                                                <Link href={`https://app.askdocs.com/pricing?plan=${item.plan_name}&life_time=true`} className='btn btn-danger w-100 rounded-0 my-2 py-2 d-flex gap-2 justify-content-center'>
                                                    <span>Get LifeTime Deal</span>
                                                    <span>${item.life_time_price / 100}</span>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </>
                    : <>
                        {
                            monthlyPlan.map((item) => (
                                <>

                                    <div className='col-12 col-md-6 mb-5 mb-md-5 col-lg-4 h-100 d-flex justify-content-around'>
                                        <div className={`card w-75 card_edit py-3 px-4 ${item.plan === "Pro" && "card_border"}`} key={item.id}>
                                            <div className='price_content d-flex gap-2'>
                                                <h1 className='fw-bold'>${item.amount / 100}</h1>
                                                <div>
                                                    <h5 className='fw-bold'>{item.display_name}</h5>
                                                    <p className='text-primary'>per month</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='key_content'>
                                                <h6 className='fw-bold'>Key Features</h6>
                                                {item?.content?.map((deto, index) => (
                                                    <p className='keyfeatures' key={index}>
                                                        {deto.content}
                                                    </p>
                                                ))}
                                            </div>
                                            {item.plan_name === "free" && <Link href={"https://app.askdocs.com/"} className={`btn btn-light card_button py-3 mx-3 ${item.plan_name === "free" ? "d-block" : "d-none"}`}>Get Started</Link>}
                                            {
                                                item.plan_name !== "free" && (
                                                    <>
                                                        <Link href={`https://app.askdocs.com/pricing?plan=${item.plan_name}&life_time=false`} className={`btn btn-primary py-3 card_spec`}>Get Started</Link>
                                                    </>
                                                )
                                            }
                                            {
                                                item.plan_name != "free" &&
                                                (
                                                    <Link href={`https://app.askdocs.com/pricing?plan=${item.plan_name}&life_time=true`} className='btn btn-danger w-100 rounded-0 my-2 py-2 d-flex gap-2 justify-content-center'>
                                                        <span>Get LifeTime Deal</span>
                                                        <span>${item.life_time_price / 100}</span>
                                                    </Link>
                                                )
                                            }

                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </>
                }
            </div>

        </div>
    )
}

export default PricingSec