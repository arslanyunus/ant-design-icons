// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverRefreshLinearSvg from '@ant-design/icons-svg/lib/asn/DriverRefreshLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverRefreshLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverRefreshLinear: DriverRefreshLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverRefreshLinearSvg}></AntdIcon>;
};

DriverRefreshLinear.displayName = 'DriverRefreshLinear';
DriverRefreshLinear.inheritAttrs = false;
export default DriverRefreshLinear;