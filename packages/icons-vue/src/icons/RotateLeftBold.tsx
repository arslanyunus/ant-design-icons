// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeftBoldSvg from '@ant-design/icons-svg/lib/asn/RotateLeftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeftBold: RotateLeftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeftBoldSvg}></AntdIcon>;
};

RotateLeftBold.displayName = 'RotateLeftBold';
RotateLeftBold.inheritAttrs = false;
export default RotateLeftBold;