// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckFastOutlineSvg from '@ant-design/icons-svg/lib/asn/TruckFastOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckFastOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckFastOutline: TruckFastOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckFastOutlineSvg}></AntdIcon>;
};

TruckFastOutline.displayName = 'TruckFastOutline';
TruckFastOutline.inheritAttrs = false;
export default TruckFastOutline;