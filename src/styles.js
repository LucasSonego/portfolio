import styled from "styled-components";

export const Container = styled.div`
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .row {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .text {
    h1 {
      color: #00adb5;
      font-size: 42px;
      margin-top: 0;
      margin-bottom: 50px;
    }

    a {
      color: #eee;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    svg {
      color: #eee;
      height: 22px;
      width: 22px;
      margin-right: 10px;
    }
  }

  .logo img {
    height: 500px;
    width: 500px;
  }

  @media (max-width: 600px) {
    .logo img {
      display: none;
    }

    .text {
      h1 {
        font-size: 32px;
      }
    }
  }
`;
