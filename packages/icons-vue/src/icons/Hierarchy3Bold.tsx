// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy3BoldSvg from '@ant-design/icons-svg/lib/asn/Hierarchy3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy3Bold: Hierarchy3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy3BoldSvg}></AntdIcon>;
};

Hierarchy3Bold.displayName = 'Hierarchy3Bold';
Hierarchy3Bold.inheritAttrs = false;
export default Hierarchy3Bold;