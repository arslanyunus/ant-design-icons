// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScissorBoldSvg from '@ant-design/icons-svg/lib/asn/ScissorBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScissorBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScissorBold: ScissorBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorBoldSvg}></AntdIcon>;
};

ScissorBold.displayName = 'ScissorBold';
ScissorBold.inheritAttrs = false;
export default ScissorBold;