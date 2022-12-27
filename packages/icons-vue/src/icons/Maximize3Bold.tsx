// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize3BoldSvg from '@ant-design/icons-svg/lib/asn/Maximize3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize3Bold: Maximize3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize3BoldSvg}></AntdIcon>;
};

Maximize3Bold.displayName = 'Maximize3Bold';
Maximize3Bold.inheritAttrs = false;
export default Maximize3Bold;