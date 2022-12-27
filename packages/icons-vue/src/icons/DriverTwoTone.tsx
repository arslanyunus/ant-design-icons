// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverTwoToneSvg from '@ant-design/icons-svg/lib/asn/DriverTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverTwoTone: DriverTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverTwoToneSvg}></AntdIcon>;
};

DriverTwoTone.displayName = 'DriverTwoTone';
DriverTwoTone.inheritAttrs = false;
export default DriverTwoTone;