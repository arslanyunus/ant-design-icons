// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building3BrokenSvg from '@ant-design/icons-svg/lib/asn/Building3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building3Broken: Building3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building3BrokenSvg}></AntdIcon>;
};

Building3Broken.displayName = 'Building3Broken';
Building3Broken.inheritAttrs = false;
export default Building3Broken;