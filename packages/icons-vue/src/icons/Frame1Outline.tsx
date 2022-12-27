// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame1OutlineSvg from '@ant-design/icons-svg/lib/asn/Frame1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame1Outline: Frame1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame1OutlineSvg}></AntdIcon>;
};

Frame1Outline.displayName = 'Frame1Outline';
Frame1Outline.inheritAttrs = false;
export default Frame1Outline;