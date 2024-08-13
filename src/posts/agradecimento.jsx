import React from 'react';

import {
    Card, Heading, CardHeader, CardBody,
    Text,
  } from '@chakra-ui/react';

import { ChakraProvider } from '@chakra-ui/react'

function Agradecimento() {
    const [aguarde, setAguarde] = React.useState(true);
    setTimeout(() => {
        setAguarde(false);
    }, 3000)
    return (
        <>
        <ChakraProvider>
        <Card>
                <CardHeader>
                    <Heading size='sm'>Obrigada :)</Heading>
                </CardHeader>
                <CardBody>
                    <Text pt='2' fontSize='sm'>
                    Muito obrigada por dedicar seu tempo para responder à minha pesquisa! Sua colaboração foi simplesmente fantástica e crucial para o sucesso do meu projeto de Pós graduação em Neurociência na PUC Rio Grande do Sul.<br/>Cada resposta que você compartilhou é inestimável.<br/><strong>Sou profundamente grata por tudo!</strong>
                    </Text>
                </CardBody>
            </Card>
            </ChakraProvider>
        {aguarde && <Text fontWeight={'bolder'} size={"xs"}>Aguarde...</Text>}
        {!aguarde && <Text fontWeight={'bolder'} size={"xs"}>Pode fechar a janela...</Text>}
        </>
    );
}

export default Agradecimento;