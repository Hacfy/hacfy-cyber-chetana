"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const cybercrimeData = [
  {
    category: "Financial Loss",
    value: 2047,
    displayValue: "₹2,047 Cr",
    color: "#09437d",
  },
  {
    category: "Cases Reported",
    value: 20875,
    displayValue: "20,875",
    color: "#ff8533",
  },
  {
    category: "Industry Impact",
    value: 684,
    displayValue: "₹6.84 M",
    color: "#09437d",
  },
  {
    category: "Daily Cases",
    value: 63,
    displayValue: "63 Cases/Day",
    color: "#ff8533",
  },
];

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full bg-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
       
<div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
  <h2
    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4"
    style={{ color: "var(--primary-blue)" }}
  >
    Cybercrimes in Karnataka
    <br />
    Rising Rapidly, Threatening Lives & Finances!
  </h2>
  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
    Track the alarming rise in cybercrime incidents across Karnataka. 
    From financial fraud to identity theft, the numbers tell a concerning story 
    of digital threats impacting lives and businesses.
  </p>
</div>


          <div className="w-full bg-white rounded-xl border-2 shadow-lg p-6">
            <h3
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: "var(--primary-blue)" }}
            >
              2024 Cybercrime Statistics
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={cybercrimeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="category" type="category" width={120} />
                <Tooltip 
                  formatter={(value, name, props) => props.payload.displayValue}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {cybercrimeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
