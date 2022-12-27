// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Crown1LinearSvg from '@ant-design/icons-svg/lib/asn/Crown1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Crown1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Crown1Linear: Crown1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Crown1LinearSvg}></AntdIcon>;
};

Crown1Linear.displayName = 'Crown1Linear';
Crown1Linear.inheritAttrs = false;
export default Crown1Linear;