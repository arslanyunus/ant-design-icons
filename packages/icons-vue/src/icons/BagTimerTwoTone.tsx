// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTimerTwoToneSvg from '@ant-design/icons-svg/lib/asn/BagTimerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTimerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTimerTwoTone: BagTimerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTimerTwoToneSvg}></AntdIcon>;
};

BagTimerTwoTone.displayName = 'BagTimerTwoTone';
BagTimerTwoTone.inheritAttrs = false;
export default BagTimerTwoTone;