// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Crown1OutlineSvg from '@ant-design/icons-svg/lib/asn/Crown1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Crown1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Crown1Outline: Crown1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Crown1OutlineSvg}></AntdIcon>;
};

Crown1Outline.displayName = 'Crown1Outline';
Crown1Outline.inheritAttrs = false;
export default Crown1Outline;