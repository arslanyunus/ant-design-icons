// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mouse1OutlineSvg from '@ant-design/icons-svg/lib/asn/Mouse1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mouse1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mouse1Outline: Mouse1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mouse1OutlineSvg}></AntdIcon>;
};

Mouse1Outline.displayName = 'Mouse1Outline';
Mouse1Outline.inheritAttrs = false;
export default Mouse1Outline;