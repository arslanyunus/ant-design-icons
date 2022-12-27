// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard1BrokenSvg from '@ant-design/icons-svg/lib/asn/Simcard1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard1Broken: Simcard1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard1BrokenSvg}></AntdIcon>;
};

Simcard1Broken.displayName = 'Simcard1Broken';
Simcard1Broken.inheritAttrs = false;
export default Simcard1Broken;