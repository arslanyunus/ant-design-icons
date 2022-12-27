// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckOutlineSvg from '@ant-design/icons-svg/lib/asn/TruckOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckOutline: TruckOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckOutlineSvg}></AntdIcon>;
};

TruckOutline.displayName = 'TruckOutline';
TruckOutline.inheritAttrs = false;
export default TruckOutline;