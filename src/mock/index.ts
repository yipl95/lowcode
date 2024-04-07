import { ComponentType } from '@/logic/component';

export const componentsMockData: ComponentType[] = [
  {
    id: 1,
    type: 'icon',
    name: 'DownOutlined',
    props: null,
  },
  {
    id: 2,
    type: 'component',
    name: 'Space',
    props: {
      size: 'large',
    },
    children: [{
      id: 3,
      type: 'component',
      name: 'Button',
      props: {
        type: 'primary',
        text: '按钮1',
      },
    }]
  },
];
