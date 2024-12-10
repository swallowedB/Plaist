import React, { useState } from "react";

type ChannelType = {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

const ChannelTest = () => {
  const [channelList, setChannelList] = useState<ChannelType[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<ChannelType | null>(
    null
  );
  const [createClicked, setCreateClicked] = useState(false);
  const [channelClicked, setChannelClicked] = useState(false);
  const [formData, setFormData] = useState({
    authRequired: false,
    name: "",
    description: "",
  });

  const onClickButton = (action: string) => {
    if (action === "create") {
      setCreateClicked((state) => !state);
    } else if (action === "channel") {
      setChannelClicked((state) => !state);
      if (channelClicked === true) fetchChannelList();
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmitCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/channels/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to create channel");
      }
      const data = await response.json();
      alert(`Channel created: ${JSON.stringify(data, null, 2)}`);
      setFormData({
        authRequired: false,
        name: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to create channel. Please try again.");
    }
  };

  const fetchChannelList = async () => {
    try {
      const response = await fetch("/channels/");
      if (!response.ok) {
        throw new Error("Error: Unable to fetch mock data");
      }
      const data: ChannelType[] = await response.json();
      setChannelList(data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch channels. Please try again.");
    }
  };

  const onClickChannelName = (channelName: string) => {
    const channel = channelList.find((ch) => ch.name === channelName) || null;
    setSelectedChannel(channel);
  };

  return (
    <div>
      {/* Create Channel */}
      <button
        onClick={() => onClickButton("create")}
        className="block bg-blue-200 font-bold my-3 rounded-md p-2"
      >
        채널 생성
      </button>
      {createClicked ? (
        <div>
          <form onSubmit={onSubmitCreate} className="bg-slate-200 p-3">
            <div>
              <label>
                Channel Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  required
                  className="my-3"
                />
              </label>
            </div>
            <div>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={onInputChange}
                  required
                  className="my-3"
                />
              </label>
            </div>
            <div>
              <label>
                Requires Authentication:
                <input
                  type="checkbox"
                  name="authRequired"
                  checked={formData.authRequired}
                  onChange={onInputChange}
                  className="my-3"
                />
              </label>
            </div>
            <button type="submit" className="bg-emerald-200">
              Create Channel
            </button>
          </form>
        </div>
      ) : null}

      {/* Fetch and Display Channels */}
      <button
        onClick={() => onClickButton("channel")}
        className="block bg-blue-200 font-bold my-3 rounded-md p-2"
      >
        채널 확인
      </button>
      {channelClicked ? (
        <div>
          {channelList.map((channel) => (
            <button
              key={channel._id}
              onClick={() => onClickChannelName(channel.name)}
              className="border p-2 m-2"
            >
              {channel.name}
            </button>
          ))}
        </div>
      ) : null}

      {/* Display Selected Channel */}
      {selectedChannel && channelClicked ? (
        <div className="p-4 mt-4 bg-gray-100 border rounded">
          <h3>Channel Details</h3>
          <pre>{JSON.stringify(selectedChannel, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
};

export default ChannelTest;
