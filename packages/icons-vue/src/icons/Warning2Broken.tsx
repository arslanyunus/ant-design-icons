// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Warning2BrokenSvg from '@ant-design/icons-svg/lib/asn/Warning2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Warning2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Warning2Broken: Warning2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Warning2BrokenSvg}></AntdIcon>;
};

Warning2Broken.displayName = 'Warning2Broken';
Warning2Broken.inheritAttrs = false;
export default Warning2Broken;