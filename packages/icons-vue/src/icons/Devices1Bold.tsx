// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Devices1BoldSvg from '@ant-design/icons-svg/lib/asn/Devices1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Devices1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Devices1Bold: Devices1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Devices1BoldSvg}></AntdIcon>;
};

Devices1Bold.displayName = 'Devices1Bold';
Devices1Bold.inheritAttrs = false;
export default Devices1Bold;