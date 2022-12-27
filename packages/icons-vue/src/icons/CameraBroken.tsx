// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraBrokenSvg from '@ant-design/icons-svg/lib/asn/CameraBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraBroken: CameraBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraBrokenSvg}></AntdIcon>;
};

CameraBroken.displayName = 'CameraBroken';
CameraBroken.inheritAttrs = false;
export default CameraBroken;