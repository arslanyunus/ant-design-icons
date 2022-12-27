// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTick2TwoToneSvg from '@ant-design/icons-svg/lib/asn/BagTick2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTick2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTick2TwoTone: BagTick2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTick2TwoToneSvg}></AntdIcon>;
};

BagTick2TwoTone.displayName = 'BagTick2TwoTone';
BagTick2TwoTone.inheritAttrs = false;
export default BagTick2TwoTone;