// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building4BrokenSvg from '@ant-design/icons-svg/lib/asn/Building4Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building4BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building4Broken: Building4BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building4BrokenSvg}></AntdIcon>;
};

Building4Broken.displayName = 'Building4Broken';
Building4Broken.inheritAttrs = false;
export default Building4Broken;