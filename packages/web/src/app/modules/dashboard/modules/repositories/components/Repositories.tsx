import { LanguageIcon, SearchIcon } from '@app/shared/components';
import { useEffectOnce } from '@lib/core';
import { Icon, Stack } from '@lib/ui';
import { MultiSelect, TextInput } from '@mantine/core';

interface RepoListProps {
  type: 'stars' | 'repositories';
}

export function Repositories({ type }: RepoListProps) {
  useEffectOnce(() => {
    console.log('initializing RepoList', type);
  });

  return (
    <Stack>
      <TextInput icon={<SearchIcon size="sm" />} placeholder="Search your stars" style={{ width: 250 }} />
      <Stack direction="column">
        <MultiSelect
          icon={
            <Icon size="sm">
              <LanguageIcon />
            </Icon>
          }
          data={['React', 'Angular', 'Svelte', 'Vue']}
          placeholder="Pick all that you like"
          clearable
          style={{ width: 250 }}
        />
      </Stack>
    </Stack>
  );
}
