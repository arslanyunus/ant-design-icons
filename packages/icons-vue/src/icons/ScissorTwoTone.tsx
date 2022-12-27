// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScissorTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScissorTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScissorTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScissorTwoTone: ScissorTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorTwoToneSvg}></AntdIcon>;
};

ScissorTwoTone.displayName = 'ScissorTwoTone';
ScissorTwoTone.inheritAttrs = false;
export default ScissorTwoTone;