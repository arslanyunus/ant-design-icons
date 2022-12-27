// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lamp1BoldSvg from '@ant-design/icons-svg/lib/asn/Lamp1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lamp1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lamp1Bold: Lamp1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lamp1BoldSvg}></AntdIcon>;
};

Lamp1Bold.displayName = 'Lamp1Bold';
Lamp1Bold.inheritAttrs = false;
export default Lamp1Bold;