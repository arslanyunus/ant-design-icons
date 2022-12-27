// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverBrokenSvg from '@ant-design/icons-svg/lib/asn/DriverBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverBroken: DriverBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverBrokenSvg}></AntdIcon>;
};

DriverBroken.displayName = 'DriverBroken';
DriverBroken.inheritAttrs = false;
export default DriverBroken;