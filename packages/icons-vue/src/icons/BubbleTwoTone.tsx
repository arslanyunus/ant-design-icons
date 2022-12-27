// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BubbleTwoToneSvg from '@ant-design/icons-svg/lib/asn/BubbleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BubbleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BubbleTwoTone: BubbleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BubbleTwoToneSvg}></AntdIcon>;
};

BubbleTwoTone.displayName = 'BubbleTwoTone';
BubbleTwoTone.inheritAttrs = false;
export default BubbleTwoTone;