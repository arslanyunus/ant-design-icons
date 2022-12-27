// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScreenmirroringLinearSvg from '@ant-design/icons-svg/lib/asn/ScreenmirroringLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScreenmirroringLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScreenmirroringLinear: ScreenmirroringLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScreenmirroringLinearSvg}></AntdIcon>;
};

ScreenmirroringLinear.displayName = 'ScreenmirroringLinear';
ScreenmirroringLinear.inheritAttrs = false;
export default ScreenmirroringLinear;