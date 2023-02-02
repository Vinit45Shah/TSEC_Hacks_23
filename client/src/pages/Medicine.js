import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";

const Medicine = () => {
  const [data, setData] = useState(null);
  const [sender, setSender] = useState(null);
  const id = useParams().id;
  const url = "http://localhost:5000";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url + "/getMedsById", {
          headers: {
            id: String(id),
          },
        });
        setData(res.data.med);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchSender(user) {
      try {
        console.log(data);
        const res = await axios.get(`${url}/fetch${user}ById`, {
          headers: {
            id: String(user === "Ngo" ? data.ownedby : data.addedby),
          },
        });
        console.log(res.data.data);
        setSender(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    const user = data && (data.ownedby ? "Ngo" : "User");
    fetchSender(user);
  }, [data]);

  return (
    <div>
      <Navbar />
      {data && sender && (
        <div className="flex px-8 justify-evenly">
          <img src={bg} alt="Medicine" className="w-1/2" />
          <div className="bg-primary-gray rounded-lg p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-semibold text-xl text-center">
                {data.commonname}
              </div>
              <div className="flex justify-between">
                <div className="pr-2 space-y-4">
                  <div className="font-semibold">
                    Quantity:{" "}
                    <span className="font-normal">{data.quantity}</span>
                  </div>
                  <div className="font-semibold">
                    Time: <span className="font-normal">{data.time}</span>
                  </div>
                </div>
                <div className="pl-2 space-y-4">
                  <div className="font-semibold">
                    Expiry:{" "}
                    <span className="font-normal">
                      {String(data.expiry).split("T")[0]}
                    </span>
                  </div>
                  <div className="font-semibold">
                    Owned by: <span className="font-normal">{sender.name}</span>
                  </div>
                </div>
              </div>
              <div className="font-semibold">
                Address: <span className="font-normal">{sender.address}</span>
              </div>
            </div>
            <button className="btn-primary w-full my-48">Get Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Medicine;
