// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScreenmirroringOutlineSvg from '@ant-design/icons-svg/lib/asn/ScreenmirroringOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScreenmirroringOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScreenmirroringOutline: ScreenmirroringOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScreenmirroringOutlineSvg}></AntdIcon>;
};

ScreenmirroringOutline.displayName = 'ScreenmirroringOutline';
ScreenmirroringOutline.inheritAttrs = false;
export default ScreenmirroringOutline;