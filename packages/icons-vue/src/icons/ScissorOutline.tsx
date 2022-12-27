// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScissorOutlineSvg from '@ant-design/icons-svg/lib/asn/ScissorOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScissorOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScissorOutline: ScissorOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorOutlineSvg}></AntdIcon>;
};

ScissorOutline.displayName = 'ScissorOutline';
ScissorOutline.inheritAttrs = false;
export default ScissorOutline;