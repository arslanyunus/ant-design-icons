// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CourthouseOutlineSvg from '@ant-design/icons-svg/lib/asn/CourthouseOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CourthouseOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CourthouseOutline: CourthouseOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CourthouseOutlineSvg}></AntdIcon>;
};

CourthouseOutline.displayName = 'CourthouseOutline';
CourthouseOutline.inheritAttrs = false;
export default CourthouseOutline;