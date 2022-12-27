// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building4OutlineSvg from '@ant-design/icons-svg/lib/asn/Building4Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building4OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building4Outline: Building4OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building4OutlineSvg}></AntdIcon>;
};

Building4Outline.displayName = 'Building4Outline';
Building4Outline.inheritAttrs = false;
export default Building4Outline;