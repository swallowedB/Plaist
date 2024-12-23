export const findValueByKeyInString = (
  input: string,
  spotChannels: ChannelList
) => {
  const keys = Object.keys(spotChannels);
  for (const key of keys) {
    if (input.includes(key)) {
      return spotChannels[key];
    }
  }

  return "";
};
