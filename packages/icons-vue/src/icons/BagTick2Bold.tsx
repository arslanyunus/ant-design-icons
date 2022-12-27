// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTick2BoldSvg from '@ant-design/icons-svg/lib/asn/BagTick2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTick2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTick2Bold: BagTick2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTick2BoldSvg}></AntdIcon>;
};

BagTick2Bold.displayName = 'BagTick2Bold';
BagTick2Bold.inheritAttrs = false;
export default BagTick2Bold;