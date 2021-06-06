import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

const signFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (data, event) => {
    event.preventDefault();
    console.log(data);
  }

  return (
      <Flex 
        w="100vw" 
        h="100vh" 
        alignItems="center" 
        justifyContent="center"
      >
        <Flex 
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input name="email" type="email" error={errors.email} label="E-mail" {...register('email')} />
          <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')} />
          </Stack>
        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg" 
          isLoading={formState.isSubmitting}>
            Entrar
        </Button>
        </Flex>
      </Flex>
    );
}
