// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagHappyTwoToneSvg from '@ant-design/icons-svg/lib/asn/BagHappyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagHappyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagHappyTwoTone: BagHappyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagHappyTwoToneSvg}></AntdIcon>;
};

BagHappyTwoTone.displayName = 'BagHappyTwoTone';
BagHappyTwoTone.inheritAttrs = false;
export default BagHappyTwoTone;