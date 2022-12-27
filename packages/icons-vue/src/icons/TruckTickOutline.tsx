// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTickOutlineSvg from '@ant-design/icons-svg/lib/asn/TruckTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTickOutline: TruckTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTickOutlineSvg}></AntdIcon>;
};

TruckTickOutline.displayName = 'TruckTickOutline';
TruckTickOutline.inheritAttrs = false;
export default TruckTickOutline;