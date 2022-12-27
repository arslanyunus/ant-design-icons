// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Logout1BrokenSvg from '@ant-design/icons-svg/lib/asn/Logout1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Logout1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Logout1Broken: Logout1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Logout1BrokenSvg}></AntdIcon>;
};

Logout1Broken.displayName = 'Logout1Broken';
Logout1Broken.inheritAttrs = false;
export default Logout1Broken;