// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CourthouseBoldSvg from '@ant-design/icons-svg/lib/asn/CourthouseBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CourthouseBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CourthouseBold: CourthouseBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CourthouseBoldSvg}></AntdIcon>;
};

CourthouseBold.displayName = 'CourthouseBold';
CourthouseBold.inheritAttrs = false;
export default CourthouseBold;