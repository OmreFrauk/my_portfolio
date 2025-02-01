import axios from "axios";

//const API_BASE = "https://portfoliobackend-omrefrauks-projects.vercel.app";
const API_BASE = "http://localhost:5000";

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

export const getExperiences = async () => {
  try {
    const response = await axios.get(`${API_BASE}/notion/getExperiences`);
    return response.data;
  } catch (error) {
    console.error("Error fetching experiences: ", error.message);
    throw new Error("Error fetching experiences from Notion Database");
  }
};

export const downloadCv = async () => {
  try {
    const response = await axios({
      url: `${API_BASE}/download-cv`,
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Accept': 'application/pdf'
      }
    });

    // Dosyayı indir
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);

    return response.data;
  } catch (error) {
    console.error("Error downloading CV: ", error.message);
    throw new Error("Error downloading CV");
  }
};
