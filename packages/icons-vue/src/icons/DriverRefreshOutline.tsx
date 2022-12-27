// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverRefreshOutlineSvg from '@ant-design/icons-svg/lib/asn/DriverRefreshOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverRefreshOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverRefreshOutline: DriverRefreshOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverRefreshOutlineSvg}></AntdIcon>;
};

DriverRefreshOutline.displayName = 'DriverRefreshOutline';
DriverRefreshOutline.inheritAttrs = false;
export default DriverRefreshOutline;