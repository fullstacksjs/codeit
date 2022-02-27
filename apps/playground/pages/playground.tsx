import type {
  GetRandomPuzzleQuery,
  PuzzleFieldsFragment,
} from '@codeit/shared/data-access';
import {
  GetRandomPuzzleDocument,
  initServerSideClient,
  withGraphQL,
} from '@codeit/shared/data-access';
import { Box, Title } from '@mantine/core';
import type { GetServerSideProps } from 'next';

interface Props {
  puzzle: PuzzleFieldsFragment;
}

const Playground: React.FC<Props> = ({ puzzle }) => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Box sx={{ flexBasis: '350px' }}>
        <Title>{puzzle?.title}</Title>
      </Box>
      <Box
        sx={theme => ({
          flexGrow: 1,
          borderLeft: '1px solid',
          borderColor: theme.colors.dark.at(-1),
        })}
      >
        Editor
      </Box>
      <Box
        sx={theme => ({
          flexBasis: '330px',
          borderLeft: '1px solid',
          borderColor: theme.colors.dark.at(-1),
        })}
      >
        Result
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const client = initServerSideClient();

  const { data } = await client
    .query<GetRandomPuzzleQuery>(GetRandomPuzzleDocument, {})
    .toPromise();

  return {
    notFound: data?.getRandomPuzzle == null,
    props: { puzzle: data!.getRandomPuzzle! },
  };
};

export default withGraphQL(Playground);
