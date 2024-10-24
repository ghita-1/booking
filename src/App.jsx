import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import c from './assets/c.png';
import cc from './assets/cc.png';
import ccc from './assets/ccc.png';
import p from './assets/p.png';
import t from './assets/t.png';
import s from './assets/s.png';
import n from './assets/n.png';
import l from './assets/l.png';
import avion from './assets/avion.png';
import a from './assets/1.png';
import z from './assets/2.png';
import e from './assets/3.png';
import P1 from './assets/11.png';
import P2 from './assets/12.png';
import P3 from './assets/13.png';
import P4 from './assets/14.png';
import P5 from './assets/15.png';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-2xl font-bold text-purple-600">GH</div>
                    <nav className="ml-10 space-x-4">
                        <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <i className="fas fa-search text-gray-700"></i>
                    <i className="fas fa-bell text-gray-700"></i>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded">Sign up</button>
                </div>
            </div>
        </header>
        <main className="container mx-auto px-4 py-8">
            <section className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Hotel, car & experiences</h1>
                <p className="text-gray-600 mt-2">Accompanying you, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
                <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded">Start your search</button>
                <div className="mt-8 flex justify-center space-x-8">
                    <img src={c} alt="Image 1" className="rounded-lg shadow-md w-44"/>
                    <img src={cc} alt="Image 2" className="w-44 rounded-lg shadow-md"/>
                    <img src={ccc} alt="Image 3" className="w-44 rounded-lg shadow-md"/>
                </div>
            </section>
            <section className="mt-12 bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded">Stay</button>
                        <button className="text-gray-700 px-4 py-2">Experiences</button>
                        <button className="text-gray-700 px-4 py-2">Rental car</button>
                    </div>
                    <div className="flex space-x-4">
                        <input type="text" placeholder="Location" className="border rounded px-4 py-2"/>
                        <input type="date" placeholder="Check in" className="border rounded px-4 py-2"/>
                        <input type="date" placeholder="Check out" className="border rounded px-4 py-2"/>
                        <input type="number" placeholder="Guests" className="border rounded px-4 py-2"/>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </section>
            <section className="mt-12 ml-10">
                <h2 className="text-2xl font-bold text-gray-800">Heading of sections</h2>
                <p className="text-gray-600">Description for sections</p>
                <div className="mt-4 grid grid-cols-5 gap-4">
                    <div className="text-center">
                        <img src={n} alt="New York" className="w-44 h-64 rounded-lg shadow-md"/>
                        <h3 className="mt-2 text-gray-800">New York</h3>
                        <p className="text-gray-600">1120 properties</p>
                    </div>
                    <div className="text-center">
                        <img src={s} alt="Singapore" className="w-44 h-64 rounded-lg shadow-md"/>
                        <h3 className="mt-2 text-gray-800">Singapore</h3>
                        <p className="text-gray-600">980 properties</p>
                    </div>
                    <div className="text-center">
                        <img src={p} alt="Paris" className="w-44 h-64 rounded-lg shadow-md"/>
                        <h3 className="mt-2 text-gray-800">Paris</h3>
                        <p className="text-gray-600">850 properties</p>
                    </div>
                    <div className="text-center">
                        <img src={l} alt="London" className="w-44 h-64 rounded-lg shadow-md"/>
                        <h3 className="mt-2 text-gray-800">London</h3>
                        <p className="text-gray-600">750 properties</p>
                    </div>
                    <div className="text-center">
                        <img src={t} alt="Tokyo" className="w-44 h-64 rounded-lg shadow-md"/>
                        <h3 className="mt-2 text-gray-800">Tokyo</h3>
                        <p className="text-gray-600">900 properties</p>
                    </div>
                </div>
            </section>
            <section className="mt-12 flex p-8">
                <div className="w-1/2">
                    <img src={avion} alt="Happening cities illustration" className="rounded-lg ml-16"/>
                </div>
                <div className="w-1/2 pl-8">
                    <h2 className="text-2xl font-bold text-gray-800">Happening cities</h2>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-blue-600">Support</h3>
                        <p className="text-gray-600">Cost-effective advertising</p>
                        <p className="text-gray-600 mt-2">Why do new listings have extra cost-effective promotion with us? Learn more</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-blue-600">Support</h3>
                        <p className="text-gray-600">Reach millions with Chisfis</p>
                        <p className="text-gray-600 mt-2">Millions of people are browsing and booking hotels on Chisfis. Try to list your place with us</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-red-600">Secure</h3>
                        <p className="text-gray-600">Secure and simple</p>
                        <p className="text-gray-600 mt-2">A safety and security system that is secure and easy to use. Learn more about our security features</p>
                    </div>
                </div>
            </section>
            <div >
            <div className="flex items-center justify-center">
                    <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200">
                        <span className="mr-2">View all</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P1} alt="Luxury cabin with a pool by the sea" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">-10% today</div>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 10 beds</div>
                                <div className="flex items-center space-x-2">
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">ADS</span>
                                    <div className="font-semibold text-lg">Best Western Cedar...</div>
                                </div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 1 Anzinger Court</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">2600DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">4.8</span>
                                        <span className="text-sm text-gray-500">(28)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P2} alt="Luxury bedroom with modern decor" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">-10% today</div>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 6 beds</div>
                                <div className="font-semibold text-lg">Bell By Greene King Inns</div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 32923 Judy Hill</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">2500DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">4.4</span>
                                        <span className="text-sm text-gray-500">(198)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P3} alt="Outdoor pool area with seating" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 9 beds</div>
                                <div className="font-semibold text-lg">Half Moon, Sherborne By...</div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 6731 Killdeer Park</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">2780DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">3.6</span>
                                        <span className="text-sm text-gray-500">(16)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P4} alt="Rooftop pool with dining area" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 7 beds</div>
                                <div className="font-semibold text-lg">White Horse Hotel By...</div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 35 Sherman Park</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">4000DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">4.8</span>
                                        <span className="text-sm text-gray-500">(34)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P5} alt="Luxury cabin with a pool by the sea" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">-10% today</div>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 10 beds</div>
                                <div className="flex items-center space-x-2">
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">ADS</span>
                                    <div className="font-semibold text-lg">Best Western Cedar...</div>
                                </div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 1 Anzinger Court</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">2600DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">4.8</span>
                                        <span className="text-sm text-gray-500">(28)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P4} alt="Luxury bedroom with modern decor" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">-10% today</div>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 6 beds</div>
                                <div className="font-semibold text-lg">Bell By Greene King Inns</div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 32923 Judy Hill</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">2500DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">4.4</span>
                                        <span className="text-sm text-gray-500">(198)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P3} alt="Outdoor pool area with seating" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 9 beds</div>
                                <div className="font-semibold text-lg">Half Moon, Sherborne By...</div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 6731 Killdeer Park</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">2780DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">3.6</span>
                                        <span className="text-sm text-gray-500">(16)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P2} alt="Rooftop pool with dining area" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 7 beds</div>
                                <div className="font-semibold text-lg">White Horse Hotel By...</div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 35 Sherman Park</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">4000DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">4.8</span>
                                        <span className="text-sm text-gray-500">(34)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P2} alt="Luxury cabin with a pool by the sea" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">-10% today</div>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 10 beds</div>
                                <div className="flex items-center space-x-2">
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">ADS</span>
                                    <div className="font-semibold text-lg">Best Western Cedar...</div>
                                </div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 1 Anzinger Court</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">2600DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">4.8</span>
                                        <span className="text-sm text-gray-500">(28)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P4} alt="Luxury bedroom with modern decor" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">-10% today</div>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 6 beds</div>
                                <div className="font-semibold text-lg">Bell By Greene King Inns</div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 32923 Judy Hill</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">2500DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">4.4</span>
                                        <span className="text-sm text-gray-500">(198)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P5} alt="Outdoor pool area with seating" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 9 beds</div>
                                <div className="font-semibold text-lg">Half Moon, Sherborne By...</div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 6731 Killdeer Park</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">2780DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">3.6</span>
                                        <span className="text-sm text-gray-500">(16)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img src={P1} alt="Rooftop pool with dining area" className="w-full h-48 object-cover"/>
                                <div className="absolute top-2 right-2 p-2 bg-white rounded-full">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Entire cabin · 7 beds</div>
                                <div className="font-semibold text-lg">White Horse Hotel By...</div>
                                <div className="text-sm text-gray-500"><i className="fas fa-map-marker-alt"></i> 35 Sherman Park</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-lg font-semibold">4000DH <span className="text-sm font-normal">/night</span></div>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-star text-orange-500"></i>
                                        <span className="text-sm font-semibold">4.8</span>
                                        <span className="text-sm text-gray-500">(34)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                    <h1 className="text-3xl font-bold text-gray-900">How it work</h1>
                    <p className="text-gray-500 mb-12">Keep calm & travel on</p>
                    <div className="flex justify-center space-x-12">
                        <div className="text-center">
                            <img src={a} alt="Travel items including a backpack, sunscreen, and drinks" className="mx-auto mb-4 w-[145px]"/>
                            <h2 className="text-xl font-bold text-gray-900">Book & relax</h2>
                            <p className="text-gray-500">Let each trip be an inspirational journey, each room a peaceful space</p>
                        </div>
                        <div className="text-center">
                            <img src={z} alt="Travel items including a hat, sunglasses, and an umbrella" className="mx-auto mb-4 w-44"/>
                            <h2 className="text-xl font-bold text-gray-900">Smart checklist</h2>
                            <p className="text-gray-500">Let each trip be an inspirational journey, each room a peaceful space</p>
                        </div>
                        <div className="text-center">
                            <img src={e} alt="A coconut drink with a straw and umbrella" className="mx-auto mb-4 w-[190px]"/>
                            <h2 className="text-xl font-bold text-gray-900">Save more</h2>
                            <p className="text-gray-500">Let each trip be an inspirational journey, each room a peaceful space</p>
                        </div>
                    </div>
                </div>
            
        </main>
    </div>
)
}

export default App
