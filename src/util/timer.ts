const str_pad_left = (string: number, pad: string, length: number) => {
  return (new Array(length + 1).join(pad) + string).slice(-length);
};

export const getTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const finalTime =
    str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);

  return finalTime;
};
