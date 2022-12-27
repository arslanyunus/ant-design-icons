// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Crown1BoldSvg from '@ant-design/icons-svg/lib/asn/Crown1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Crown1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Crown1Bold: Crown1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Crown1BoldSvg}></AntdIcon>;
};

Crown1Bold.displayName = 'Crown1Bold';
Crown1Bold.inheritAttrs = false;
export default Crown1Bold;