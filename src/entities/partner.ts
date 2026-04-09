export type Partner = {
  id: number;
  name: string;
  description: string;
  type: "job" | "formation";
  url: string;
  imgUrl?: string;
};
