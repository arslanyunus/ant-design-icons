// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Devices1LinearSvg from '@ant-design/icons-svg/lib/asn/Devices1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Devices1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Devices1Linear: Devices1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Devices1LinearSvg}></AntdIcon>;
};

Devices1Linear.displayName = 'Devices1Linear';
Devices1Linear.inheritAttrs = false;
export default Devices1Linear;