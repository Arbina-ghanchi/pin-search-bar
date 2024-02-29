import { Buttonbox, Container, Searchbar, Searchbarinput } from "./home.styled";
import { useRef } from "react";
import { SimpleButton } from "../components/buttons.styled";
export function Home() {
  const searchdata = useRef(null);

  const Handlesubmit = (output) => {
    output.preventDefault();
    console.log(searchdata.current.value);
  };

  const Searchresult = (value)=>{
    console.log(value);
    searchdata.current.value=value
  };
  return (
    <>
      <Container>
        <h1>search bar</h1>

        <Searchbar onSubmit={Handlesubmit}>
          <Searchbarinput
            ref={searchdata}
            type="search"
            placeholder="type here"
          ></Searchbarinput>
        </Searchbar>
        <Buttonbox>
          <SimpleButton onClick={()=>Searchresult("asthetics")}>asthetics</SimpleButton>
          <SimpleButton onClick={()=>Searchresult("nature")}>nature</SimpleButton>
          <SimpleButton onClick={()=>Searchresult("Outfit")}>outfit</SimpleButton>
          <SimpleButton onClick={()=>Searchresult("styles")}>styles</SimpleButton>
        </Buttonbox>
      </Container>
    </>
  );
}
