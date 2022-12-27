// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverRefreshBoldSvg from '@ant-design/icons-svg/lib/asn/DriverRefreshBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverRefreshBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverRefreshBold: DriverRefreshBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverRefreshBoldSvg}></AntdIcon>;
};

DriverRefreshBold.displayName = 'DriverRefreshBold';
DriverRefreshBold.inheritAttrs = false;
export default DriverRefreshBold;