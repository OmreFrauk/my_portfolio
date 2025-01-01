import axios from "axios";

const API_BASE = "https://portfoliobackend-omrefrauks-projects.vercel.app";

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE}/notion/getProjects`);
    let data = response.data;

    console.log("Properties: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error.message);
    throw new Error("Error fetching data from Notion Database");
  }
};

export const insertMessage = async (data) => {
  try {
    const response = await axios.post(`${API_BASE}/notion/insertMessage`, data);
    return response.data;
  } catch (error) {
    console.error("Error inserting data: ", error.message);
    throw new Error("Error inserting data into Notion Database");
  }
};
export const sendemail = async (data) => {
  try {
    const response = await axios.post(`${API_BASE}/email/sendmail`, data);
    return response.data;
  } catch (error) {
    console.error("Error sending email: ", error.message);
    throw new Error("Error sending email");
  }
};
