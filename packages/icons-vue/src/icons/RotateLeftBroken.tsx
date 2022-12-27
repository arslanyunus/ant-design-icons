// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeftBrokenSvg from '@ant-design/icons-svg/lib/asn/RotateLeftBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeftBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeftBroken: RotateLeftBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeftBrokenSvg}></AntdIcon>;
};

RotateLeftBroken.displayName = 'RotateLeftBroken';
RotateLeftBroken.inheritAttrs = false;
export default RotateLeftBroken;