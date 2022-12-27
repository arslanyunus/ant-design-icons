// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CourthouseBrokenSvg from '@ant-design/icons-svg/lib/asn/CourthouseBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CourthouseBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CourthouseBroken: CourthouseBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CourthouseBrokenSvg}></AntdIcon>;
};

CourthouseBroken.displayName = 'CourthouseBroken';
CourthouseBroken.inheritAttrs = false;
export default CourthouseBroken;