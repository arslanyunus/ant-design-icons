// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTimerTwoToneSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTimerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTimerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTimerTwoTone: BrifecaseTimerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTimerTwoToneSvg}></AntdIcon>;
};

BrifecaseTimerTwoTone.displayName = 'BrifecaseTimerTwoTone';
BrifecaseTimerTwoTone.inheritAttrs = false;
export default BrifecaseTimerTwoTone;