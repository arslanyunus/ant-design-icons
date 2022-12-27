// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScissorBrokenSvg from '@ant-design/icons-svg/lib/asn/ScissorBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScissorBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScissorBroken: ScissorBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorBrokenSvg}></AntdIcon>;
};

ScissorBroken.displayName = 'ScissorBroken';
ScissorBroken.inheritAttrs = false;
export default ScissorBroken;