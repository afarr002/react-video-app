import styled from "styled-components";

import Wrapper from "../styles/Trending";

const StyledChannels = styled.div`
  margin-top: 1rem;
`;

function SearchResults() {
  return (
    <Wrapper>
      <h2>Search Results</h2>
      <StyledChannels>
        {/* Profile Search Results */}
        {/* Video Search Results */}
      </StyledChannels>
    </Wrapper>
  );
}

export default SearchResults;
