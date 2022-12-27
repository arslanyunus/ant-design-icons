// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTick2OutlineSvg from '@ant-design/icons-svg/lib/asn/BagTick2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTick2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTick2Outline: BagTick2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTick2OutlineSvg}></AntdIcon>;
};

BagTick2Outline.displayName = 'BagTick2Outline';
BagTick2Outline.inheritAttrs = false;
export default BagTick2Outline;