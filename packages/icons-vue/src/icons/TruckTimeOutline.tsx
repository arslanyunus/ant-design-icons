// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTimeOutlineSvg from '@ant-design/icons-svg/lib/asn/TruckTimeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTimeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTimeOutline: TruckTimeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTimeOutlineSvg}></AntdIcon>;
};

TruckTimeOutline.displayName = 'TruckTimeOutline';
TruckTimeOutline.inheritAttrs = false;
export default TruckTimeOutline;