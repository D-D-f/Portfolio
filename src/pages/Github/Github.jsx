import { useEffect, useState } from "react";

const Github = () => {
  const [git, setGit] = useState([]);
  useEffect(() => {
    const username = "D-D-f";
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await response.json();
      setGit(data);
    };
    fetchData();
  }, []);
  console.log(git);

  return <div>GITHUB</div>;
};

export default Github;
