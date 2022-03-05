import { Flex, Heading, HStack, Image, Link, Spacer, Text } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'

export default function Home () {
  return (
    <Flex flexDir='column' h='100vh' color='#6D6D6D' p='4'>
      <Head>
        <title>Nullish</title>
        <meta name='description' content='Homepage of nullish.tech' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex alignSelf='flex-start'>
        <Image src='/nullish.svg' width='40' height='20' />
      </Flex>
      <Spacer />
      <Heading alignSelf='center' justifySelf='center'>Hi there👋, welcome to

        <NextLink href='/'>
          <Link>
            <Text color='#006981' display='inline'> Null</Text><Text color='#ADADAD' display='inline'>ish</Text>.tech
          </Link>
        </NextLink>
      </Heading>
      <Spacer />
      <Text>
        Lost?
        check these projects out:
      </Text>
      <HStack>
        <NextLink href='https://wordy.nullish.tech' isExternal><Link>Wordy</Link></NextLink>
        <NextLink href='https://mdn.nullish.tech' isExternal><Link>mdn</Link></NextLink>
        <NextLink href='https://nuance.nullish.tech' isExternal><Link>nuance</Link></NextLink>
      </HStack>

    </Flex>
  )
}
