import { ThemeProvider } from '@codeit/shared/ui-theme-provider';
import { Box } from '@mantine/core';

export const Playground: React.FC = () => (
  <ThemeProvider>
    <Box sx={{ display: 'flex', height: '100vh' }}>
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
  </ThemeProvider>
);
