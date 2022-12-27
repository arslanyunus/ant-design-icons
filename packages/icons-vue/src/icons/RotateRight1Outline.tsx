// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRight1OutlineSvg from '@ant-design/icons-svg/lib/asn/RotateRight1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRight1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRight1Outline: RotateRight1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRight1OutlineSvg}></AntdIcon>;
};

RotateRight1Outline.displayName = 'RotateRight1Outline';
RotateRight1Outline.inheritAttrs = false;
export default RotateRight1Outline;