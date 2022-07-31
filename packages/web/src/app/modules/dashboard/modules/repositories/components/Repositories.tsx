import { LanguageIcon, SearchIcon } from '@app/shared/components';
import { useEffectOnce } from '@lib/core';
import { FlexLayout, Icon } from '@lib/ui';
import { MultiSelect, TextInput } from '@mantine/core';

interface RepoListProps {
  type: 'stars' | 'repositories';
}

export function Repositories({ type }: RepoListProps) {
  useEffectOnce(() => {
    console.log('initializing RepoList', type);
  });

  return (
    <FlexLayout>
      <TextInput
        icon={<SearchIcon size="sm" />}
        placeholder="Search your stars"
        variant="default"
        style={{ width: 250 }}
      />
      <FlexLayout direction="column">
        <MultiSelect
          variant="default"
          icon={
            <Icon size="sm">
              <LanguageIcon />
            </Icon>
          }
          data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
          placeholder="Pick all that you like"
          defaultValue={['react', 'next']}
          clearButtonLabel="Clear selection"
          clearable
        />
      </FlexLayout>
    </FlexLayout>
  );
}
