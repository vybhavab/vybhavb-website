import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  HStack,
  Stack,
  Container,
  Button
} from '@chakra-ui/react';
import Link from 'next/link';
import Project from 'types/project.types';

interface Props {
  projects: Project[]
}

const ProjectCard = ({ project }: {project: Project}) =>  {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        href={project.linkToSite}
        as={Button}
        _hover={{
          bg: "teal.600"
        }}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {project.name}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {project.description}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}

const Projects = ({ projects }: Props) => {
  return (
    <Container>
      <Stack direction={['column', 'row']}>
        {
          projects.slice(0, 3).map(
            (project:Project, idx) => <ProjectCard project={project} key={idx} />
          )
        }
      </Stack>
    </Container>
  );
};

export default Projects;

