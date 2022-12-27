// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraBoldSvg from '@ant-design/icons-svg/lib/asn/CameraBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraBold: CameraBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraBoldSvg}></AntdIcon>;
};

CameraBold.displayName = 'CameraBold';
CameraBold.inheritAttrs = false;
export default CameraBold;