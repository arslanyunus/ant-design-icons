// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box1OutlineSvg from '@ant-design/icons-svg/lib/asn/Box1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box1Outline: Box1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box1OutlineSvg}></AntdIcon>;
};

Box1Outline.displayName = 'Box1Outline';
Box1Outline.inheritAttrs = false;
export default Box1Outline;