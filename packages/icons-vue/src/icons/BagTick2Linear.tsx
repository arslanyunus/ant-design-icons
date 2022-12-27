// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTick2LinearSvg from '@ant-design/icons-svg/lib/asn/BagTick2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTick2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTick2Linear: BagTick2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTick2LinearSvg}></AntdIcon>;
};

BagTick2Linear.displayName = 'BagTick2Linear';
BagTick2Linear.inheritAttrs = false;
export default BagTick2Linear;