// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScreenmirroringBoldSvg from '@ant-design/icons-svg/lib/asn/ScreenmirroringBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScreenmirroringBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScreenmirroringBold: ScreenmirroringBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScreenmirroringBoldSvg}></AntdIcon>;
};

ScreenmirroringBold.displayName = 'ScreenmirroringBold';
ScreenmirroringBold.inheritAttrs = false;
export default ScreenmirroringBold;