import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Contenido = styled.div`
    max-width: 1200px;
    width: 95%;
    padding-top: 4rem;
    margin: 0 auto;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }

    p{
        line-height: 2;
        margin-top: 2rem;
    }

`;

const ContenidoNosotros = () => {

    const query = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {
          slug: {eq: "Nosotros"}
        }){
          nodes{
            titulo
            contenido
            imagen {
              fluid(maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `);

      const { titulo, contenido, imagen } = query.allDatoCmsPagina.nodes[0];

    return ( 
        <>
            <h2
                css={css`
                    text-align: center;
                    margin-top: 4rem;
                    font-size: 4rem;
                `}
            > {titulo} </h2>

            <Contenido>

                <p> {contenido} </p>
                <Image fluid={imagen.fluid}/>

            </Contenido>

        </>
     );
}
 
export default ContenidoNosotros;