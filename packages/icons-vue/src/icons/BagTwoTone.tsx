// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTwoToneSvg from '@ant-design/icons-svg/lib/asn/BagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTwoTone: BagTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTwoToneSvg}></AntdIcon>;
};

BagTwoTone.displayName = 'BagTwoTone';
BagTwoTone.inheritAttrs = false;
export default BagTwoTone;