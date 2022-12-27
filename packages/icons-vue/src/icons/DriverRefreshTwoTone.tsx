// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverRefreshTwoToneSvg from '@ant-design/icons-svg/lib/asn/DriverRefreshTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverRefreshTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverRefreshTwoTone: DriverRefreshTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverRefreshTwoToneSvg}></AntdIcon>;
};

DriverRefreshTwoTone.displayName = 'DriverRefreshTwoTone';
DriverRefreshTwoTone.inheritAttrs = false;
export default DriverRefreshTwoTone;