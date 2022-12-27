// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScreenmirroringBrokenSvg from '@ant-design/icons-svg/lib/asn/ScreenmirroringBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScreenmirroringBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScreenmirroringBroken: ScreenmirroringBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScreenmirroringBrokenSvg}></AntdIcon>;
};

ScreenmirroringBroken.displayName = 'ScreenmirroringBroken';
ScreenmirroringBroken.inheritAttrs = false;
export default ScreenmirroringBroken;