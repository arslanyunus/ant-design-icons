// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRight1BoldSvg from '@ant-design/icons-svg/lib/asn/RotateRight1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRight1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRight1Bold: RotateRight1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRight1BoldSvg}></AntdIcon>;
};

RotateRight1Bold.displayName = 'RotateRight1Bold';
RotateRight1Bold.inheritAttrs = false;
export default RotateRight1Bold;