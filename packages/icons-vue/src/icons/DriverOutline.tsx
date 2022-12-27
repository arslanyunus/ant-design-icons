// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverOutlineSvg from '@ant-design/icons-svg/lib/asn/DriverOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverOutline: DriverOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverOutlineSvg}></AntdIcon>;
};

DriverOutline.displayName = 'DriverOutline';
DriverOutline.inheritAttrs = false;
export default DriverOutline;