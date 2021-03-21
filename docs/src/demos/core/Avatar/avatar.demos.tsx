import React from 'react';
import { Avatar, ElementsGroup } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

export function AvatarRootDemo() {
  return (
    <CodeDemo>
      <ElementsGroup position="center">
        <Avatar
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />
        <Avatar radius="xl" />
        <Avatar>VR</Avatar>
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
        <Avatar color="blue" radius="xl">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
      </ElementsGroup>
    </CodeDemo>
  );
}

const code = `import React from 'react';
import { Avatar } from '@mantine/core';
import image from './image.png';

export function AvatarDemo() {
  return <Avatar src={image} alt="it's me" />;
}`;

export function AvatarBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Avatar
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />
      </ElementsGroup>
    </CodeDemo>
  );
}

const placeholderCode = `import React from 'react';
import { Avatar } from '@mantine/core';

export function AvatarDemo() {
  return <Avatar src={null} alt="no image here" />;
}`;

export function AvatarPlaceholderDemo() {
  return (
    <CodeDemo code={placeholderCode} language="tsx">
      <ElementsGroup position="center">
        <Avatar src={null} alt="no image here" />
      </ElementsGroup>
    </CodeDemo>
  );
}

const iconPlaceholderCode = `import React from 'react';
import { Avatar } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';

export function AvatarDemo() {
  return (
    <ElementsGroup position="center">
      <Avatar>
        <StarIcon />
      </Avatar>
      <Avatar color="blue">
        <StarIcon />
      </Avatar>
      <Avatar color="red">
        <StarIcon />
      </Avatar>
    </ElementsGroup>
  );
}`;

export function AvatarIconPlaceholderDemo() {
  return (
    <CodeDemo code={iconPlaceholderCode} language="tsx">
      <ElementsGroup position="center">
        <Avatar>
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
        <Avatar color="blue">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
        <Avatar color="red">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
      </ElementsGroup>
    </CodeDemo>
  );
}

const lettersPlaceholderCode = `import React from 'react';
import { Avatar } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';

export function AvatarDemo() {
  return (
    <ElementsGroup position="center">
      <Avatar>MK</Avatar>
      <Avatar color="green">YT</Avatar>
      <Avatar color="indigo">VR</Avatar>
    </ElementsGroup>
  );
}`;

export function AvatarLettersPlaceholderDemo() {
  return (
    <CodeDemo code={lettersPlaceholderCode} language="tsx">
      <ElementsGroup position="center">
        <Avatar>MK</Avatar>
        <Avatar color="green">YT</Avatar>
        <Avatar color="indigo">VR</Avatar>
      </ElementsGroup>
    </CodeDemo>
  );
}
