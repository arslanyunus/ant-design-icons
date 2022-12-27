// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/TruckRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckRemoveOutline: TruckRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckRemoveOutlineSvg}></AntdIcon>;
};

TruckRemoveOutline.displayName = 'TruckRemoveOutline';
TruckRemoveOutline.inheritAttrs = false;
export default TruckRemoveOutline;