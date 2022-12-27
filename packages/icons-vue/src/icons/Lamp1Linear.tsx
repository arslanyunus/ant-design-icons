// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lamp1LinearSvg from '@ant-design/icons-svg/lib/asn/Lamp1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lamp1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lamp1Linear: Lamp1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lamp1LinearSvg}></AntdIcon>;
};

Lamp1Linear.displayName = 'Lamp1Linear';
Lamp1Linear.inheritAttrs = false;
export default Lamp1Linear;