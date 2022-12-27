// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Crown1BrokenSvg from '@ant-design/icons-svg/lib/asn/Crown1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Crown1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Crown1Broken: Crown1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Crown1BrokenSvg}></AntdIcon>;
};

Crown1Broken.displayName = 'Crown1Broken';
Crown1Broken.inheritAttrs = false;
export default Crown1Broken;