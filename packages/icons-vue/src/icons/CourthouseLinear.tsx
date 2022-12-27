// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CourthouseLinearSvg from '@ant-design/icons-svg/lib/asn/CourthouseLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CourthouseLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CourthouseLinear: CourthouseLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CourthouseLinearSvg}></AntdIcon>;
};

CourthouseLinear.displayName = 'CourthouseLinear';
CourthouseLinear.inheritAttrs = false;
export default CourthouseLinear;