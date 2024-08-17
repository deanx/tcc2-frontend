import PropTypes from 'prop-types';
import { API_URL } from '../constants';

import React from 'react';
import axios from 'axios';

import { VStack, HStack, Box, 
  Select, Textarea, Checkbox, Input, Button,
  Card, CardHeader, CardBody, 
  Heading, Text, CardFooter } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
function App(props) {
  const [showTermoConsentimento, setShowTermoConsentimento] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [datanascto, setDataNascto] = React.useState("");
  const [genero, setGenero] = React.useState("");
  const [escolaridade, setEscolaridade] = React.useState("");
  const [rendaFamiliar, setRendaFamiliar] = React.useState("");
  const [regiaoBrasil, setRegiaoBrasil] = React.useState("");
  const [orientacaoPolitica, setOrientacaoPolitica] = React.useState("");
  const [frequenciaInformaPolitica, setFrequenciaInformaPolitica] = React.useState("");
  const [principaisFontesInformacao, setPrincipaisFontesInformacao] = React.useState("");
  const [redeSocial, setRedeSocial] = React.useState("");
  const [costumaBuscarInformacoes, setCostumaBuscarInformacoes] = React.useState("");
  const [duranteConversaPoliticaAge, setDuranteConversaPoliticaAge] = React.useState("");
  const [pessoasProximasDesentenderam, setPessoasProximasDesentenderam] = React.useState("");
  const [pessoasDesentenderamAgrediram, setPessoasDesentenderamAgrediram] = React.useState("");
  const [precisouCortarContato, setPrecisouCortarContato] = React.useState("");
  const [causaComportamentos, setCausaComportamentos] = React.useState("");

  function aceiteConsentimento() {
    if (email == "") {
      alert("preencha o email")
      document.getElementById("email").focus()
    } else {
        setShowTermoConsentimento(false);
        alert("Para o funcionamento da análise neurocientífica, certifique-se de que o ambiente esteja bem iluminado e mantenha seu rosto no centro da câmera");
        setShowTermoConsentimento(false); 
        props.startup(); 
        setTimeout(()=> props.takepicture(email + "-aceite.png"), 3000)
        localStorage.setItem("step", 1);
        localStorage.setItem("email", email);
        document.getElementById("container-camera").style.display="block"
    }
  }

  function enviarQuestionario() {
    if(
      datanascto == "" ||
      genero == "" ||
      escolaridade == "" ||
      rendaFamiliar == "" ||
      regiaoBrasil == "" ||
      orientacaoPolitica == "" ||
      frequenciaInformaPolitica == "" ||
      principaisFontesInformacao == "" ||
      redeSocial == "" ||
      costumaBuscarInformacoes == "" ||
      duranteConversaPoliticaAge == "" ||
      pessoasProximasDesentenderam == "" ||
      pessoasDesentenderamAgrediram == "" ||
      precisouCortarContato == "" ||
      causaComportamentos == "") {
        alert("Preencha todos os campos")
      } else {
        let data = JSON.stringify({
          "id": 1,
          "email": email || localStorage.getItem("email"),
          "datanascto": datanascto,
          "genero": genero,
          "escolaridade": escolaridade,
          "renda_familiar": rendaFamiliar,
          "regiaoBrasil": regiaoBrasil,
          "orientacaoPolitica": orientacaoPolitica,
          "frequenciaInformaPolitica": frequenciaInformaPolitica,
          "principaisFontesInformacao": principaisFontesInformacao,
          "redeSocial": redeSocial,
          "costumaBuscarInformacoes": costumaBuscarInformacoes,
          "duranteConversaPoliticaAge": duranteConversaPoliticaAge,
          "pessoasProximasDesentenderam": pessoasProximasDesentenderam,
          "pessoasDesentenderamAgrediram": pessoasDesentenderamAgrediram,
          "precisouCortarContato": precisouCortarContato,
          "causaComportamentos": causaComportamentos
        });
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: API_URL + "/questionario",
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        axios.request(config)
        .then((response) => {
          window.email = email;
          props.takepicture(email + "-fim-questionario.png")
          props.setActiveStep(2);
          localStorage.setItem("step", 2);
        })
        .catch((error) => {
          alert("Erro! Revise os dados e tente novamente!")
        });
      }
  }
    return (
      <>
      <ChakraProvider>
      {!localStorage.getItem("email") && <Card>
                <CardHeader>
                    <Heading size='sm'>TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO</Heading>
                </CardHeader>
                <CardBody>
                    <Text pt='2' fontSize='sm'>
Você está convidado (a) a participar de uma pesquisa academica sobre polarização política, que faz parte de um projeto de finalizacão de curso de Pós graduação em Neurociencia pela PUC Rio Grande do Sul, em que se inclue o uso de analise neurocientifica que faz aferiçoes durante a pesquisa, portanto é necessário que <strong>habilite sua camera quando solicitado.</strong> 
<br/><br/>
O teste será composto por <strong>um questionário</strong> sobre você e <strong>sete posts que simulam o Instagram</strong>. Nessas telas você pode curtir, compartilhar e deverá deixar um comentário com sua opinião sobre aquele post.
<br/><br/><strong>Importante:</strong><br/>
Todas as informações coletadas durante a sua participação serão analisadas em conjunto com as informações dos outros voluntários. Caso você aceite participar da pesquisa e assine este termo, você estará ciente que todos os seus dados pessoais e aferiçoes coletadas pela camera serão processados de acordo com a Lei 13.709/18 (LGPD), e serão utilizados apenas para os propósitos desta pesquisa e não serão compartilhados.
                    </Text>
                </CardBody>
                <CardFooter >
                    <Heading size='xs'>
                        E-mail: <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}></Input>
                        <Box><Checkbox cursor={'pointer'} value={showTermoConsentimento} isChecked={!showTermoConsentimento} onChange={() => aceiteConsentimento()}></Checkbox> Sim, aceito participar.</Box>
                    </Heading>
                </CardFooter>
            </Card>}
            {localStorage.getItem("email")  && 
      <div width="100%">
        <VStack>
          <HStack w="100%">
            <Box w={"50%"}>Data de nascimento:</Box>
            <Box w={"50%"}><input type="date" value={datanascto} onChange={(event) => setDataNascto(event.target.value)}/></Box>
          </HStack>
          <HStack w="100%" bg='teal.300' color='#666'>
            <Box w={"50%"}>Qual é o seu gênero?</Box>
            <Box ><Select value={genero} onChange={(event) => setGenero(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="LGBTQQICAAPF2K+">LGBTQQICAAPF2K+</option>
            </Select></Box>
          </HStack>
          <HStack w="100%">
            <Box w={"50%"}>Qual a sua escolaridade?</Box>
            <Box><Select value={escolaridade} onChange={(event) => setEscolaridade(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="ensino-fundamental">Ensino Fundamental</option>
              <option value="ensino-medio">Ensino Médio</option>
              <option value="ensino-superior">Ensino Superior</option>
              <option value="pos-graduacao-mba">Pós Graduação/MBA</option>
              <option value="mestrado">Mestrado</option>
              <option value="doutorado">Doutorado</option>
            </Select></Box>
          </HStack>
          <HStack w="100%" bg='teal.300' color='#666'>
            <Box w={"50%"}>Qual é a sua renda familiar mensal?</Box>
            <Box><Select value={rendaFamiliar} onChange={(event) => setRendaFamiliar(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="ate-1-salario">Até 1 salário mínimo</option>
              <option value="ate-3-salarios">Até 3 salários mínimos</option>
              <option value="ate-5-salarios">Até 5 salários mínimos</option>
              <option value="mais-5-salarios">Mais de 5 salários mínimos</option>
            </Select></Box>
          </HStack>
          <HStack w="100%">
            <Box w={"50%"}>A qual região do Brasil você pertence?</Box>
            <Box><Select value={regiaoBrasil} onChange={(event) => setRegiaoBrasil(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="centro-oeste">Centro-oeste</option>
              <option value="nordeste">Nordeste</option>
              <option value="norte">Norte</option>
              <option value="sudeste">Sudeste</option>
              <option value="sul">Sul</option>
            </Select></Box>
          </HStack>
          <HStack w="100%" bg='teal.300' color='#666'>
            <Box w={"50%"}>Quais das opções abaixo melhor descreve sua orientação política?</Box>
            <Box><Select value={orientacaoPolitica} onChange={(event) => setOrientacaoPolitica(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="esquerda">esquerda</option>
              <option value="direita">direita</option>
              <option value="extrema-esquerda">extrema-esquerda</option>
              <option value="extrema-direita">extrema-direita</option>
            </Select></Box>
          </HStack> 
          <HStack w="100%">
            <Box w={"50%"}>Com que frequência você se informa sobre política?</Box>
            <Box><Select value={frequenciaInformaPolitica} onChange={(event) => setFrequenciaInformaPolitica(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="todos-os-dias">Todos os dias</option>
              <option value="algumas-vezes-semana">Algumas vezes por semana</option>
              <option value="raramente">Raramente</option>
              <option value="nunca">Nunca</option>
            </Select></Box>
          </HStack>
          <HStack w="100%" bg='teal.300' color='#666'>
            <Box w={"50%"}>Quais são suas principais fontes de informação sobre política?</Box>
            <Box><Select value={principaisFontesInformacao} onChange={(event) => setPrincipaisFontesInformacao(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="telejornais-programas-jornalisticos">Telejornais e programas jornalísticos</option>
              <option value="pessoas-publicas">Pessoas públicas na internet</option>
              <option value="redes-sociais">Redes sociais</option>
              <option value="sites-noticias">Sites de notícias</option>
            </Select></Box>
          </HStack> 
          <HStack w="100%">
            <Box w={"50%"}>Qual rede social que você usa com mais frequência?</Box>
            <Box><Select value={redeSocial} onChange={(event) => setRedeSocial(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="x">X(Twitter)</option>
              <option value="tiktok">TikTok</option>
              <option value="whatsapp">Whatsapp</option>
            </Select></Box>
          </HStack> 
          <HStack w="100%" bg='teal.300' color='#666'>
            <Box w={"50%"}>Você costuma buscar informações ou ler e acompanhar notícias que apresentam opiniões políticas diferentes das suas?</Box>
            <Box><Select value={costumaBuscarInformacoes} onChange={(event) => setCostumaBuscarInformacoes(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
              <option value="sim-evito-fake-news">Sim, mas evito conteúdos de opositores para evitar fake-news</option>
            </Select></Box>
          </HStack> 
          <HStack w="100%">
            <Box w={"50%"}>Durante uma conversa sobre política com pessoas que têm opiniões diferentes, como você geralmente age?</Box>
            <Box><Select value={duranteConversaPoliticaAge} onChange={(event) => setDuranteConversaPoliticaAge(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="defendo-firmememnte">Defendo firmemente minha opinião</option>
              <option value="encerro-a-conversa">Encerro a conversa para evitar desentendimentos</option>
              <option value="ouco-para-entender">Ouço para entender o que ele tem a dizer</option>
            </Select></Box>
          </HStack> 
          <HStack w="100%" bg='teal.300' color='#666'>
            <Box w={"50%"}>Você teve pessoas próximas a você que se desentenderam devido a posicionamentos políticos?</Box>
            <Box><Select value={pessoasProximasDesentenderam} onChange={(event) => setPessoasProximasDesentenderam(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="sim-minha-familia">Sim, na minha família</option>
              <option value="sim-amigos-conhecidos">Sim, alguns amigos e conhecidos</option>
              <option value="nao">Não</option>
            </Select></Box>
          </HStack>
          <HStack w="100%">
            <Box w={"50%"}>Você conheceu pessoas que se desentenderam a ponto de se agredirem fisicamente devido a posicionamentos políticos?</Box>
            <Box><Select value={pessoasDesentenderamAgrediram} onChange={(event) => setPessoasDesentenderamAgrediram(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="sim-familia">Sim, na minha família</option>
              <option value="sim-amigos-conhecidos">Sim, alguns amigos e conhecidos</option>
              <option value="nao">Não</option>
            </Select></Box>
          </HStack>  
          <HStack w="100%" bg='teal.300' color='#666'>
            <Box w={"50%"}>Você precisou cortar contato com pessoas devido a posicionamentos políticos?</Box>
            <Box><Select value={precisouCortarContato} onChange={(event) => setPrecisouCortarContato(event.target.options[event.target.selectedIndex].value)}>
              <option>selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
              <option value="sim-mas-retornamos">Sim, mas já retornamos a amizade</option>
            </Select></Box>
          </HStack>  
          <HStack w="100%">
            <Box w={"50%"}>Na sua opinião, qual é a causa dos comportamentos agressivos de algumas pessoas em relação a este cenário político polarizado?</Box>
            <Box><Textarea placeholder="informe sua opinião..." value={causaComportamentos} onChange={(event) => setCausaComportamentos(event.target.value)}></Textarea></Box>
          </HStack>
          <HStack w="100%" textAlign={"center"} className='blue'>
            <Box w="100%"><Button bg='tomato' color={"white"} onClick={() => {enviarQuestionario()}}>Avançar!</Button></Box>
          </HStack>                                      
        </VStack>
        </div>
      }
      </ChakraProvider>
      </>
    )
  }
  
  App.propTypes = {
    setActiveStep: PropTypes.func,
    startup: PropTypes.func,
    takepicture: PropTypes.func
  }

  export default App
  