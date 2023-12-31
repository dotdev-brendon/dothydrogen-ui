import {
  ArrowForwardIcon,
  ChevronDownIcon,
  EmailIcon,
  PhoneIcon,
  SearchIcon,
} from '../src/index';
import { HStack, Stack } from '../src/index';
import * as React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdBuild, MdCall } from 'react-icons/md';
import { Spinner } from '~/spinner';
import { Button } from '../src/index';
import { ButtonGroup, IconButton } from '../src/index';

import { themeDecorator } from '../../story-layout/src/index';

export default {
  title: 'Button',
  decorators: [themeDecorator],
  parameters: {
    layout: 'centered',
  },
};

export const basic = () => (
  <>
    <Button>Button</Button>
  </>
);

export const withVariants = () => (
  <HStack spacing="24px">
    <Button colorScheme="teal" variant="solid">
      Solid
    </Button>
    <Button colorScheme="teal" variant="inverted">
      Inverted
    </Button>
    <Button colorScheme="teal" variant="outline">
      Outline
    </Button>
  </HStack>
);

export const withSizes = () => (
  <HStack>
    <Button colorScheme="blue" size="xs">
      Button
    </Button>
    <Button colorScheme="blue" size="sm">
      Button
    </Button>
    <Button colorScheme="blue" size="md">
      Button
    </Button>
    <Button colorScheme="blue" size="lg">
      Button
    </Button>
  </HStack>
);

export const WithIcon = () => (
  <Stack direction="row" spacing={4}>
    <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
      Email
    </Button>
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme="teal"
      variant="outline"
    >
      Call us
    </Button>
  </Stack>
);

export const withReactIcons = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
      Settings
    </Button>
    <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
      Call us
    </Button>
  </Stack>
);

export const WithLoading = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button size="lg" isLoading colorScheme="teal">
      Email
    </Button>

    <Button
      isLoading
      colorScheme="blue"
      spinner={<Spinner size={8} color="white" />}
    >
      Click me
    </Button>

    <Button
      isLoading
      loadingText="Submitting..."
      colorScheme="teal"
      variant="outline"
    >
      Submit
    </Button>
  </Stack>
);

export const WithLoadingSpinnerPlacement = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button
      isLoading
      loadingText="Loading"
      colorScheme="teal"
      variant="outline"
      spinnerPosition="start"
    >
      Submit
    </Button>
    <Button
      isLoading
      loadingText="Loading"
      colorScheme="teal"
      variant="outline"
      spinnerPlacement="end"
    >
      Continue
    </Button>
  </Stack>
);

export const withDisabled = () => (
  <HStack spacing="24px">
    <Button isDisabled colorScheme="teal" variant="solid">
      Button
    </Button>
    <Button isDisabled colorScheme="teal" variant="inverted">
      Button
    </Button>
    <Button isDisabled colorScheme="teal" variant="outline">
      Button
    </Button>
  </HStack>
);

export const customComposition = () => (
  <Button
    size="md"
    height="48px"
    width="200px"
    border="2px solid"
    borderColor="green.500"
  >
    Button
  </Button>
);

export const iconButton = () => (
  <Stack direction="row">
    <IconButton aria-label="Search database" icon={<SearchIcon />} />

    <IconButton
      colorScheme="blue"
      aria-label="Search database"
      icon={<SearchIcon />}
    />

    <IconButton colorScheme="teal" aria-label="Call Segun" size="lg">
      <PhoneIcon />
    </IconButton>
  </Stack>
);

export const WithButtonGroup = () => (
  <ButtonGroup variant="outline">
    <Button colorScheme="blue">Save</Button>
    <Button>Cancel</Button>
  </ButtonGroup>
);

export const attachedButtons = () => (
  <ButtonGroup size="sm" isAttached variant="outline">
    <Button marginEnd="-px">Save</Button>
    <IconButton
      fontSize="2xl"
      aria-label="Add to friends"
      icon={<ChevronDownIcon />}
    />
  </ButtonGroup>
);

export const socialButton = () => (
  <Stack direction="row">
    <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
      Facebook
    </Button>
    <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
      Twitter
    </Button>
  </Stack>
);
