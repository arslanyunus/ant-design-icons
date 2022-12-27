// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverRefreshBrokenSvg from '@ant-design/icons-svg/lib/asn/DriverRefreshBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverRefreshBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverRefreshBroken: DriverRefreshBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverRefreshBrokenSvg}></AntdIcon>;
};

DriverRefreshBroken.displayName = 'DriverRefreshBroken';
DriverRefreshBroken.inheritAttrs = false;
export default DriverRefreshBroken;