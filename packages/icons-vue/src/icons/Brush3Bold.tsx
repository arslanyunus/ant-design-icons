// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush3BoldSvg from '@ant-design/icons-svg/lib/asn/Brush3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush3Bold: Brush3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush3BoldSvg}></AntdIcon>;
};

Brush3Bold.displayName = 'Brush3Bold';
Brush3Bold.inheritAttrs = false;
export default Brush3Bold;