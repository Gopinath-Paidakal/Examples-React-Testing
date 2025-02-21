import { useState } from "react";
import axios from "axios";

const FillForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [response, setResponse] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("https://localhost:7131/Subscriber/GetSubscriberById?subscriberId=100", {
        params: formData, // Send form data as query parameters
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="subscriberName"
          placeholder="Subscriber Name"
          value={formData.subscriberName}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          //type="email"
          name="subscriberAddress"
          placeholder="Subscriber Address"
          value={formData.subscriberAddress}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Submit
        </button>
      </form>

      {response && (
        <div className="mt-4 p-2 bg-gray-100">
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FillForm;

