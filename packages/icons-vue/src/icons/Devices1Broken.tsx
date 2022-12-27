// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Devices1BrokenSvg from '@ant-design/icons-svg/lib/asn/Devices1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Devices1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Devices1Broken: Devices1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Devices1BrokenSvg}></AntdIcon>;
};

Devices1Broken.displayName = 'Devices1Broken';
Devices1Broken.inheritAttrs = false;
export default Devices1Broken;