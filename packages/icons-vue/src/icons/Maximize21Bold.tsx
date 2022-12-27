// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize21BoldSvg from '@ant-design/icons-svg/lib/asn/Maximize21Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize21BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize21Bold: Maximize21BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize21BoldSvg}></AntdIcon>;
};

Maximize21Bold.displayName = 'Maximize21Bold';
Maximize21Bold.inheritAttrs = false;
export default Maximize21Bold;