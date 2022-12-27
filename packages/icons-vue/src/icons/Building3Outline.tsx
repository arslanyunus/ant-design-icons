// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building3OutlineSvg from '@ant-design/icons-svg/lib/asn/Building3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building3Outline: Building3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building3OutlineSvg}></AntdIcon>;
};

Building3Outline.displayName = 'Building3Outline';
Building3Outline.inheritAttrs = false;
export default Building3Outline;