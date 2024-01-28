import './destinations.css'
import { Timeline, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

export const Destinations = () => {
  return (
    <div className="destinations-container">
    <MantineProvider>
    <Timeline color="black" radius="lg" active={2} lineWidth={3} bulletSize={32} align="right">
    <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">
          Default bullet without anything
        </Text>
      </Timeline.Item>
    </Timeline>
    </MantineProvider>
    </div>
  )
  }
