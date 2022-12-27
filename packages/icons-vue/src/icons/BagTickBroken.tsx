// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTickBrokenSvg from '@ant-design/icons-svg/lib/asn/BagTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTickBroken: BagTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTickBrokenSvg}></AntdIcon>;
};

BagTickBroken.displayName = 'BagTickBroken';
BagTickBroken.inheritAttrs = false;
export default BagTickBroken;