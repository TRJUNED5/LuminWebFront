import React, { useState } from 'react';
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";

const Product = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState(0);

  // Array of tab names
  const tabs = Array.from({ length: 11 }, (_, i) => `Tab ${i + 1}`);

  return (
    <div>
      {/* Hero image section */}
      <div
        className="hero flex justify-center items-center"
        style={{
          backgroundImage:
            "url('productImage.jpg'), linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: '455px',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <h1
            data-aos="zoom-in"
            style={{ color: "white", fontFamily: "Roboto, sans-serif", textAlign: "center", fontWeight: "bold", fontSize: "3rem",}}
            className="text-5xl"
          >
            Our Products
          </h1>
        </div>
      </div>

      {/* Tabs section */}
      <div>
        <div className="mt-5 mx-5 flex flex-wrap justify-center p-1 bg-sky-100 rounded-lg shadow-md" role="tablist">
        {/* Tab 1 */}
        <button
          className={`w-1/5 border-2 border-indigo-600 py-2 text-sm font-medium leading-5 text-blue-700 rounded-lg shadow-md
          ${activeTab === 0 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(0)}
        >
          Polyester Chips
        </button>
        {/* ... Repeat for each tab ... */}
        
        {/* Tab 2 */}

        <button
          className={`w-1/5 border-2 border-indigo-600 py-2 text-sm font-medium leading-5 text-blue-700 rounded-lg shadow-md
          ${activeTab === 10 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(10)}
        >Nylon Chips</button>
        {/* Tab 3 */}
        <button
          className={`w-1/5 border-2 border-indigo-600 py-2 text-sm font-medium leading-5 text-blue-700 rounded-lg shadow-md
          ${activeTab === 110 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(110)}
        >HDPE Chips</button>
        {/* Tab 4 */}
        <button
          className={`w-1/5 py-2  border-2 border-indigo-600 text-sm font-medium leading-5 text-blue-700 rounded-lg  shadow-md
          ${activeTab === 1110 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(1110)}
        >Polyester Staple Fiber</button>
        {/* Tab 5 */}
        <button
          className={`w-1/5 py-2 border-2 border-indigo-600  text-sm font-medium leading-5 text-blue-700 rounded-lg  shadow-md
          ${activeTab === 11110 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(11110)}
        >Viscose Staple Fiber</button>
        {/* Tab 6 */}
        <button
          className={`w-1/5  border-2 border-indigo-600 py-2 text-sm font-medium leading-5 text-blue-700 rounded-lg shadow-md
          ${activeTab === 111110 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(111110)}
        >Cotton and Blended Yarn</button>
        {/* Tab 7 */}
        <button
          className={`w-1/5  border-2 border-indigo-600 py-2 text-sm font-medium leading-5 text-blue-700 rounded-lg shadow-md
          ${activeTab === 1111110 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(1111110)}
        >Polyester Filament Yarn</button>
        {/* Tab 8 */}
        <button
          className={`w-1/5  border-2 border-indigo-600 py-2 text-sm font-medium leading-5 text-blue-700 rounded-lg shadow-md
          ${activeTab === 11111110 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(11111110)}
        >Nylon Filament Yarn</button>
        {/* Tab 9 */}
        <button
          className={`w-1/5  border-2 border-indigo-600 py-2 text-sm font-medium leading-5 text-blue-700 rounded-lg shadow-md
          ${activeTab === 111111110 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(111111110)}
        >Spandex Yarn</button>
        {/* Tab 10 */}
        <button
          className={`w-1/5  border-2 border-indigo-600 py-2 text-sm font-medium leading-5 text-blue-700 rounded-lg shadow-md
          ${activeTab === 1111111110 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(1111111110)}
        >Sewing Thread</button>
        {/* Tab 11 */}
        <button
          className={`w-1/5  border-2 border-indigo-600 py-2 text-sm font-medium leading-5 text-blue-700 rounded-lg shadow-md
          ${activeTab === 11111111110 ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-500'}
          focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 m-1`}
          role="tab"
          onClick={() => setActiveTab(11111111110)}
        >Sweater Yarn</button>
      </div>
      </div>
      

      {/* Tab content */}
      <div className="tab-content mt-16"
>
        {/* Content for Tab 1 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 0 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-fpwh{background-color:#32cb00;border-color:inherit;text-align:center;vertical-align:top;color:white;}\n.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fpwh" colSpan={4}>
          Polyester Chips
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-c3ow">ITEM</td>
        <td className="tg-c3ow">SPECIFICATION</td>
        <td className="tg-c3ow">IV</td>
        <td className="tg-c3ow">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={5}>
          PET Chips
        </td>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.67</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.69</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD Recycle</td>
        <td className="tg-c3ow">0.73</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">BR Recycle</td>
        <td className="tg-c3ow">0.70</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.84</td>
        <td className="tg-c3ow">Bottle Grade</td>
      </tr>
    </tbody>
  </table>
</>

  {/* Responsive Image */}
 <div className="w-full h-full max-w-md">
    <img
      src="Product1ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>

         {/* Tab content */}
         <div className="tab-content mt-16"
>
        {/* Content for Tab 2 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 10 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-7k10{background-color:#32cb00;border-color:inherit;text-align:center;vertical-align:top}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-7k10" colSpan={4}>
          <span style={{ color: "#FFF" }}>Nylon Chips</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-c3ow">ITEM</td>
        <td className="tg-c3ow">SPECIFICATION</td>
        <td className="tg-c3ow">IV</td>
        <td className="tg-c3ow">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={4}>
          Nylon 6 Chips
          <br />
          (Polyamide)
          <br />
          &amp;
          <br />
          Nylon 66 Chips
          <br />
          (Polyamide)
        </td>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">2.47</td>
        <td className="tg-c3ow">High Speed</td>
      </tr>
      <tr>
        <td className="tg-c3ow">FD</td>
        <td className="tg-c3ow">2.47</td>
        <td className="tg-c3ow">High Speed</td>
      </tr>
      <tr>
        <td className="tg-c3ow">BR</td>
        <td className="tg-c3ow">2.47</td>
        <td className="tg-c3ow">High Speed</td>
      </tr>
      <tr>
        <td className="tg-c3ow">BR</td>
        <td className="tg-c3ow">2.80</td>
        <td className="tg-c3ow">High Speed</td>
      </tr>
    </tbody>
  </table>
</>


  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">
    <img
      src="Product2ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}
         <div className="tab-content mt-16"
>
        {/* Content for Tab 3 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 110 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-fpwh{background-color:#32cb00;border-color:inherit;text-align:center;vertical-align:top}\n.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fpwh" colSpan={9}>
          <span style={{ color: "#FFF" }}>HDPE Chips</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-c3ow">Sector</td>
        <td className="tg-c3ow">Grade</td>
        <td className="tg-c3ow">Density (Kg/m3)</td>
        <td className="tg-c3ow">Melt Index (g/10min)</td>
        <td className="tg-c3ow" colSpan={5}>
          Typical Applications
        </td>
      </tr>
      <tr>
        <td className="tg-c3ow" rowSpan={3}>
          Film Grade
        </td>
        <td className="tg-c3ow">F5010</td>
        <td className="tg-c3ow">950</td>
        <td className="tg-c3ow">1</td>
        <td className="tg-c3ow" colSpan={5}>
          General Purpose Packaging &amp; Wrapping applications
        </td>
      </tr>
      <tr>
        <td className="tg-c3ow">F52H04</td>
        <td className="tg-c3ow">952</td>
        <td className="tg-c3ow">0.04</td>
        <td className="tg-c3ow" colSpan={5}>
          Garment / Grocery/ Merchandise Bags, Disposal Waste Bags, Counter
          Bags, Shopping bags. etc.
        </td>
      </tr>
      <tr>
        <td className="tg-c3ow">F50H08</td>
        <td className="tg-c3ow">950</td>
        <td className="tg-c3ow">0.08</td>
        <td className="tg-c3ow" colSpan={5}>
          Super Market Carrier bag, Grocery bags
        </td>
      </tr>
      <tr>
        <td className="tg-c3ow" rowSpan={6}>
          Monofilament
        </td>
        <td className="tg-c3ow">R5504</td>
        <td className="tg-c3ow">955</td>
        <td className="tg-c3ow">0.4</td>
        <td className="tg-c3ow" colSpan={5}>
          Fishing Nets, Insect Screens, Ropes, Cloth Yarns, Packing Straps,
          Woven Sacks for Fertilizer.
        </td>
      </tr>
      <tr>
        <td className="tg-c3ow">R5504</td>
        <td className="tg-c3ow">954</td>
        <td className="tg-c3ow">0.9</td>
        <td className="tg-c3ow" colSpan={5}>
          Raffia Tapes for Woven Sacks &amp; Tarpaulin, Knitted nets for crop
          protection,“ Raschel’’ sacks for vegetables ,Ropes
        </td>
      </tr>
      <tr>
        <td className="tg-c3ow">R5106</td>
        <td className="tg-c3ow">951</td>
        <td className="tg-c3ow">0.6</td>
        <td className="tg-c3ow" colSpan={5}>
          Geo-Grid
        </td>
      </tr>
      <tr>
        <td className="tg-c3ow">Y5008</td>
        <td className="tg-c3ow">950</td>
        <td className="tg-c3ow">0.85</td>
        <td className="tg-c3ow" colSpan={5}>
          Woven sacks, fishing nets, mosquito nets, insect screens, agriculture
          nets etc.
        </td>
      </tr>
      <tr>
        <td className="tg-c3ow">Y5808</td>
        <td className="tg-c3ow">958</td>
        <td className="tg-c3ow">0.8</td>
        <td className="tg-c3ow" colSpan={5}>
          Cloth Yarn, Woven Sacks, Tarpaulin
        </td>
      </tr>
      <tr>
        <td className="tg-c3ow">Y5710</td>
        <td className="tg-c3ow">957</td>
        <td className="tg-c3ow">v</td>
        <td className="tg-9wq8" colSpan={5}>
          Monofilament for Nets, Twines &amp; Ropes
        </td>
      </tr>
    </tbody>
  </table>
</>


  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">    <img
      src="Product3ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}
      <div className="tab-content mt-2 ">
        {/* Content for Tab 4 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 1110 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 
{/* table data */}
<>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-1z5w{background-color:#1bb262;border-color:inherit;color:#ffffff;text-align:center;vertical-align:middle}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-1z5w" colSpan={4}>
          Polyester Staple Fiber
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-9wq8">ITEM</td>
        <td className="tg-9wq8">SPECIFICATION</td>
        <td className="tg-9wq8">Cut Length</td>
        <td className="tg-9wq8">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={4}>
          Polyester Staple Fiber
          <br />
          (PSF)
          <br />
          RawWhite
          <br />
          &amp;
          <br />
          Dope Dyed
        </td>
        <td className="tg-9wq8">0.80D</td>
        <td className="tg-9wq8">32MM,34MM,38MM</td>
        <td className="tg-9wq8">RW &amp; DD</td>
      </tr>
      <tr>
        <td className="tg-9wq8">1.00D</td>
        <td className="tg-9wq8">32MM,34MM,38MM</td>
        <td className="tg-9wq8">RW &amp; DD</td>
      </tr>
      <tr>
        <td className="tg-9wq8">1.20D</td>
        <td className="tg-9wq8">32MM,34MM,38MM</td>
        <td className="tg-9wq8">RW &amp; DD</td>
      </tr>
      <tr>
        <td className="tg-9wq8">1.40D</td>
        <td className="tg-9wq8">32MM,34MM,38MM</td>
        <td className="tg-9wq8">RW &amp; DD</td>
      </tr>
    </tbody>
  </table>
</>

  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">    <img
      src="Product4ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}
      <div className="tab-content mt-2 ">
        {/* Content for Tab 5 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 11110 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-1z5w{background-color:#1bb262;border-color:inherit;color:#ffffff;text-align:center;vertical-align:middle}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-1z5w" colSpan={4}>
          Viscose Staple Fiber
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-9wq8">ITEM</td>
        <td className="tg-9wq8">SPECIFICATION</td>
        <td className="tg-9wq8">Cut Length</td>
        <td className="tg-9wq8">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={4}>
          Viscose Staple Fiber
          <br />
          (VSF)
          <br />
          RawWhite
          <br />
          &amp;
          <br />
          Dope Dyed
        </td>
        <td className="tg-9wq8">0.80D</td>
        <td className="tg-9wq8">32MM,34MM,38MM</td>
        <td className="tg-9wq8">RW &amp; DD</td>
      </tr>
      <tr>
        <td className="tg-9wq8">1.00D</td>
        <td className="tg-9wq8">32MM,34MM,38MM</td>
        <td className="tg-9wq8">RW &amp; DD</td>
      </tr>
      <tr>
        <td className="tg-9wq8">1.20D</td>
        <td className="tg-9wq8">32MM,34MM,38MM</td>
        <td className="tg-9wq8">RW &amp; DD</td>
      </tr>
      <tr>
        <td className="tg-9wq8">1.40D</td>
        <td className="tg-9wq8">32MM,34MM,38MM</td>
        <td className="tg-9wq8">RW &amp; DD</td>
      </tr>
    </tbody>
  </table>
</>

  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">    <img
      style={{width: '350px', height: '350px'}}
      src="Product5ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}
      <div className="tab-content mt-2 ">
        {/* Content for Tab 6 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 111110 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-fpwh{background-color:#32cb00;border-color:inherit;text-align:center;vertical-align:top}\n.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fpwh" colSpan={4}>
          Cotton and Blended Yarn
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-c3ow">ITEM</td>
        <td className="tg-c3ow">SPECIFICATION</td>
        <td className="tg-c3ow">IV</td>
        <td className="tg-c3ow">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={5}>
          PET Chips
        </td>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.67</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.69</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD Recycle</td>
        <td className="tg-c3ow">0.73</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">BR Recycle</td>
        <td className="tg-c3ow">0.70</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.84</td>
        <td className="tg-c3ow">Bottle Grade</td>
      </tr>
    </tbody>
  </table>
</>

  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">    <img
      src="Product6ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}
      <div className="tab-content mt-2 ">
        {/* Content for Tab 7 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 1111110 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-fpwh{background-color:#32cb00;border-color:inherit;text-align:center;vertical-align:top}\n.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fpwh" colSpan={4}>
          Polyester Filament Yarn
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-c3ow">ITEM</td>
        <td className="tg-c3ow">SPECIFICATION</td>
        <td className="tg-c3ow">IV</td>
        <td className="tg-c3ow">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={5}>
          PET Chips
        </td>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.67</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.69</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD Recycle</td>
        <td className="tg-c3ow">0.73</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">BR Recycle</td>
        <td className="tg-c3ow">0.70</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.84</td>
        <td className="tg-c3ow">Bottle Grade</td>
      </tr>
    </tbody>
  </table>
</>
  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">    <img
      src="Product7ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}
      <div className="tab-content mt-2 ">
        {/* Content for Tab 8 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 11111110 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-fpwh{background-color:#32cb00;border-color:inherit;text-align:center;vertical-align:top}\n.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fpwh" colSpan={4}>
          Nylon Filament Yarn
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-c3ow">ITEM</td>
        <td className="tg-c3ow">SPECIFICATION</td>
        <td className="tg-c3ow">IV</td>
        <td className="tg-c3ow">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={5}>
          PET Chips
        </td>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.67</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.69</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD Recycle</td>
        <td className="tg-c3ow">0.73</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">BR Recycle</td>
        <td className="tg-c3ow">0.70</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.84</td>
        <td className="tg-c3ow">Bottle Grade</td>
      </tr>
    </tbody>
  </table>
</>
  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">    <img
      src="Product8ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}
      <div className="tab-content mt-2 ">
        {/* Content for Tab 9 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 111111110 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-fpwh{background-color:#32cb00;border-color:inherit;text-align:center;vertical-align:top}\n.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fpwh" colSpan={4}>
          Spandex Yarn
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-c3ow">ITEM</td>
        <td className="tg-c3ow">SPECIFICATION</td>
        <td className="tg-c3ow">IV</td>
        <td className="tg-c3ow">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={5}>
          PET Chips
        </td>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.67</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.69</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD Recycle</td>
        <td className="tg-c3ow">0.73</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">BR Recycle</td>
        <td className="tg-c3ow">0.70</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.84</td>
        <td className="tg-c3ow">Bottle Grade</td>
      </tr>
    </tbody>
  </table>
</>
  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">    <img
      src="Product9ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}
      <div className="tab-content mt-2 ">
        {/* Content for Tab 10 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 1111111110 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-fpwh{background-color:#32cb00;border-color:inherit;text-align:center;vertical-align:top}\n.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fpwh" colSpan={4}>
          Sewing Thread
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-c3ow">ITEM</td>
        <td className="tg-c3ow">SPECIFICATION</td>
        <td className="tg-c3ow">IV</td>
        <td className="tg-c3ow">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={5}>
          PET Chips
        </td>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.67</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.69</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD Recycle</td>
        <td className="tg-c3ow">0.73</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">BR Recycle</td>
        <td className="tg-c3ow">0.70</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.84</td>
        <td className="tg-c3ow">Bottle Grade</td>
      </tr>
    </tbody>
  </table>
</>
  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">    <img
      src="Product10ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}
      <div className="tab-content mt-2 ">
        {/* Content for Tab 11 */}
        <div
          className={`p-8 bg-white flex flex-row items-center justify-center gap-x-5 gap-y-5 flex-col sm:flex-row ${activeTab === 11111111110 ? 'block' : 'hidden'}`}
          role="tabpanel"
        > 

  {/* table data */}
  <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}\n.tg .tg-fpwh{background-color:#32cb00;border-color:inherit;text-align:center;vertical-align:top}\n.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}\n"
    }}
  />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fpwh" colSpan={4}>
          Sweater yarn
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-c3ow">ITEM</td>
        <td className="tg-c3ow">SPECIFICATION</td>
        <td className="tg-c3ow">IV</td>
        <td className="tg-c3ow">REMARKS</td>
      </tr>
      <tr>
        <td className="tg-9wq8" rowSpan={5}>
          PET Chips
        </td>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.67</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.69</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD Recycle</td>
        <td className="tg-c3ow">0.73</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">BR Recycle</td>
        <td className="tg-c3ow">0.70</td>
        <td className="tg-c3ow">Filament Grade</td>
      </tr>
      <tr>
        <td className="tg-c3ow">SD</td>
        <td className="tg-c3ow">0.84</td>
        <td className="tg-c3ow">Bottle Grade</td>
      </tr>
    </tbody>
  </table>
</>
  {/* Responsive Image */}
  <div className="w-full h-full max-w-md">    <img
      src="Product11ss.PNG" // Replace with the path to your image
      
      alt="Product Image"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>
       </div>
       
       </div>
         {/* Tab content */}      
        <div>
        <AnimatedBanner />
        </div>
       </div>
       

  );
};



export default Product;
