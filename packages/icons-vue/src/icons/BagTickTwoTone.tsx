// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/BagTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTickTwoTone: BagTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTickTwoToneSvg}></AntdIcon>;
};

BagTickTwoTone.displayName = 'BagTickTwoTone';
BagTickTwoTone.inheritAttrs = false;
export default BagTickTwoTone;