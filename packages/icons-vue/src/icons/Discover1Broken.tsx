// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Discover1BrokenSvg from '@ant-design/icons-svg/lib/asn/Discover1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Discover1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Discover1Broken: Discover1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Discover1BrokenSvg}></AntdIcon>;
};

Discover1Broken.displayName = 'Discover1Broken';
Discover1Broken.inheritAttrs = false;
export default Discover1Broken;