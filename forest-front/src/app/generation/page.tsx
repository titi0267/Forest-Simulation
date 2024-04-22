"use client";

import axiosInstance from "@/utils/axios";
import { useState, useEffect } from "react";
import "@/app/globals.css";
import Swal from "sweetalert2";
import { parseSqlFiles } from "@/utils/initDb";

interface LordIconProps {
  src: string;
  trigger: string;
  style: React.CSSProperties;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": LordIconProps;
    }
  }
}

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [response, setResponse] = useState(null);

  const generateForest = async () => {
    await parseSqlFiles();
    // try {
    //     const response = await axiosInstance.post('/generateforest/');
    //     if (response.data["success"] === true) {
    //         Swal.fire({
    //             icon: "success",
    //             title: `${response.data["message"]}`,
    //             showConfirmButton: false,
    //             timer: 2000
    //         });
    //     }
    // } catch (error) {
    //     console.error('Erreur:', error);
    // }
  };

  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <div style={{ maxWidth: "" }} className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img
              src="/images/forest.jpg"
              alt="Forest"
              style={{
                borderRadius: "10px",
                maxWidth: "115%",
                maxHeight: "638px",
                height: "1035px",
                width: "115%",
              }}
            />
          </div>
          <div
            style={{ paddingLeft: "5rem", marginRight: "-300px" }}
            className="col-span-1"
          >
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl mb-4 mt-4">
              Forest Simulation
            </h3>
            <p className="text-gray-600">
              The purpose of this project is to randomly generate trees of
              different species in 100 plots.
              <br />
              <br />
              Each plot contains 500 trees and is recorded in a database with
              various information about the trees, such as their X and Y
              positions, minimum and maximum diameters, tree species, etc.
              <br />
              <br />
              To generate these trees, please click on the button below.
              <br />
              <br />
              It is, of course, possible to generate new data by clicking the
              button again.
              <br />
              <br />
              Thank you !
            </p>
            <br />
            <br />
            <br />
            <button onClick={generateForest} className="button type1">
              <span className="btn-txt">GENERATE</span>
            </button>
            {/* {response && <pre>{JSON.stringify(response, null, 2)}</pre>} */}
            <lord-icon
              src="https://cdn.lordicon.com/vmmnvljd.json"
              trigger="hover"
              style={{ width: "100px", height: "75px" }}
            />
          </div>
          <div className="col-span-1">
            <img
              src="/images/programmer.jpeg"
              alt="Forest"
              style={{
                position: "relative",
                borderRadius: "10px",
                top: "55%",
                left: "10px",
                width: "65%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
