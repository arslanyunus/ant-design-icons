// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BusOutlineSvg from '@ant-design/icons-svg/lib/asn/BusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BusOutline: BusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusOutlineSvg}></AntdIcon>;
};

BusOutline.displayName = 'BusOutline';
BusOutline.inheritAttrs = false;
export default BusOutline;