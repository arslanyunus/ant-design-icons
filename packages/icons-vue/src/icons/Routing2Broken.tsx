// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Routing2BrokenSvg from '@ant-design/icons-svg/lib/asn/Routing2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Routing2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Routing2Broken: Routing2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Routing2BrokenSvg}></AntdIcon>;
};

Routing2Broken.displayName = 'Routing2Broken';
Routing2Broken.inheritAttrs = false;
export default Routing2Broken;