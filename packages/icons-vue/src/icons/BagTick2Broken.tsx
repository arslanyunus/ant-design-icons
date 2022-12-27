// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTick2BrokenSvg from '@ant-design/icons-svg/lib/asn/BagTick2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTick2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTick2Broken: BagTick2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTick2BrokenSvg}></AntdIcon>;
};

BagTick2Broken.displayName = 'BagTick2Broken';
BagTick2Broken.inheritAttrs = false;
export default BagTick2Broken;