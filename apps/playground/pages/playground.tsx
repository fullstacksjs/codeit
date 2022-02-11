import { Box } from '@mantine/core';

const Playground: React.FC = () => (
  <Box sx={{ display: 'flex', height: '100%' }}>
    <Box sx={{ flexBasis: '350px' }}>Instruction</Box>
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

export default Playground;
