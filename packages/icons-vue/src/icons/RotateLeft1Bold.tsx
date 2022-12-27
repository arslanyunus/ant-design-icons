// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeft1BoldSvg from '@ant-design/icons-svg/lib/asn/RotateLeft1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeft1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeft1Bold: RotateLeft1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeft1BoldSvg}></AntdIcon>;
};

RotateLeft1Bold.displayName = 'RotateLeft1Bold';
RotateLeft1Bold.inheritAttrs = false;
export default RotateLeft1Bold;