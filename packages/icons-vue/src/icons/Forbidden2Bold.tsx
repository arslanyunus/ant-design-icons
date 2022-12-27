// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forbidden2BoldSvg from '@ant-design/icons-svg/lib/asn/Forbidden2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forbidden2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forbidden2Bold: Forbidden2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forbidden2BoldSvg}></AntdIcon>;
};

Forbidden2Bold.displayName = 'Forbidden2Bold';
Forbidden2Bold.inheritAttrs = false;
export default Forbidden2Bold;