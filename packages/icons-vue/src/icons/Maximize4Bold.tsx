// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize4BoldSvg from '@ant-design/icons-svg/lib/asn/Maximize4Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize4BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize4Bold: Maximize4BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize4BoldSvg}></AntdIcon>;
};

Maximize4Bold.displayName = 'Maximize4Bold';
Maximize4Bold.inheritAttrs = false;
export default Maximize4Bold;