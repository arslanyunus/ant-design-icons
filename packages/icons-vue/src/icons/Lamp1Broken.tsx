// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lamp1BrokenSvg from '@ant-design/icons-svg/lib/asn/Lamp1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lamp1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lamp1Broken: Lamp1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lamp1BrokenSvg}></AntdIcon>;
};

Lamp1Broken.displayName = 'Lamp1Broken';
Lamp1Broken.inheritAttrs = false;
export default Lamp1Broken;